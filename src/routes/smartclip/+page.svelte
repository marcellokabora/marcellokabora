<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  type ProjectCard = {
    id: string;
    title: string;
    slogan: string;
    cover: string;
    link: string;
  };

  type Message = {
    id: number;
    role: "user" | "bot";
    text: string;
    projectCard?: ProjectCard;
    isError?: boolean;
  };

  // Used only for generative UI card matching — Gemini handles the text
  const PROJECT_CARDS: { keywords: string[]; card: ProjectCard }[] = [
    {
      keywords: ["beathecue", "beat", "music", "dj", "cue"],
      card: {
        id: "beathecue-app",
        title: "BeatHeCue",
        slogan: "Real-time music cue management for DJs and event hosts",
        cover: "/project/beathecue-app/beathecue-app-01.png",
        link: "/project/beathecue-app",
      },
    },
    {
      keywords: ["smava", "loan", "finance", "credit", "fintech"],
      card: {
        id: "smava-website",
        title: "Smava",
        slogan: "Loan comparison platform — UX & frontend architecture",
        cover: "/project/smava-website/_cover.jpeg",
        link: "/project/smava-website",
      },
    },
    {
      keywords: ["mineko", "utility", "bill", "rent", "proptech"],
      card: {
        id: "mineko-website",
        title: "Mineko",
        slogan: "Proptech platform for utility bill verification",
        cover: "/project/mineko-website/_cover.png",
        link: "/project/mineko-website",
      },
    },
    {
      keywords: [
        "portfolio",
        "this site",
        "your site",
        "this website",
        "sveltekit",
      ],
      card: {
        id: "portfolio",
        title: "Portfolio",
        slogan: "Personal portfolio built with SvelteKit & Firebase",
        cover: "/project/portfolio/portfolio.png",
        link: "/",
      },
    },
    {
      keywords: [
        "chartmap",
        "chart",
        "data",
        "visualization",
        "yukka",
        "sentiment",
      ],
      card: {
        id: "chartmap",
        title: "ChartMap",
        slogan: "Financial sentiment data visualization for Yukka Lab",
        cover: "/project/chartmap/_cover.jpg",
        link: "/project/chartmap",
      },
    },
  ];

  const SUGGESTED_QUESTIONS = [
    "What projects have you built?",
    "What technologies do you use?",
    "What is your background?",
    "What kind of work do you do?",
    "How many years of experience?",
    "What makes you stand out?",
  ];

  let messages = $state<Message[]>([]);
  let inputValue = $state("");
  let isTyping = $state(false);
  let messagesContainer = $state<HTMLDivElement | null>(null);
  let idCounter = 0;

  function nextId() {
    return idCounter++;
  }

  function getProjectCard(input: string): ProjectCard | undefined {
    const lower = input.toLowerCase();
    for (const { keywords, card } of PROJECT_CARDS) {
      if (keywords.some((k) => lower.includes(k))) return card;
    }
  }

  function scrollToBottom() {
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  $effect(() => {
    void messages.length;
    void isTyping;
    setTimeout(scrollToBottom, 60);
  });

  async function sendMessage(text: string) {
    if (!text.trim() || isTyping) return;
    const query = text.trim();
    inputValue = "";
    messages.push({ id: nextId(), role: "user", text: query });
    isTyping = true;

    try {
      const res = await fetch("/smartclip/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      messages.push({
        id: nextId(),
        role: "bot",
        text: data.text,
        projectCard: getProjectCard(query),
      });
    } catch {
      messages.push({
        id: nextId(),
        role: "bot",
        text: "Sorry, I couldn't connect to the AI service right now. Please try again in a moment.",
        isError: true,
      });
    } finally {
      isTyping = false;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  }

  onMount(() => {
    setTimeout(() => {
      messages.push({
        id: nextId(),
        role: "bot",
        text: "Hi! I'm Marcello's AI assistant, powered by Gemini. Ask me anything about his projects, skills, or experience — or pick a suggestion below.",
      });
    }, 700);
  });
</script>

<div class="relative flex flex-col h-[100dvh] bg-[#0a0a0a] overflow-hidden">
  <!-- Decorative background blobs -->
  <div
    class="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-500 blur-[180px] opacity-[0.06] animate-pulse"
  ></div>
  <div
    class="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary-500 blur-[140px] opacity-[0.05] animate-pulse"
    style="animation-delay: 2s"
  ></div>

  <!-- ── Top bar ─────────────────────────────────────────────── -->
  <header
    in:fly={{ y: -20, duration: 600, delay: 100, easing: cubicOut }}
    class="relative z-10 flex-shrink-0 flex items-center justify-between gap-4 px-6 pt-6 pb-4 border-b border-zinc-800/60 bg-[#0a0a0a]/80 backdrop-blur-xl"
  >
    <!-- Bot identity -->
    <div class="flex items-center gap-3">
      <div
        class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/30 flex-shrink-0"
      >
        <Icon icon="mdi:robot" class="text-xl" />
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-white font-semibold text-base leading-none">
            Portfolio <span
              class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
              >AI</span
            >
          </h1>
        </div>
        <div class="flex items-center gap-1.5 mt-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
          ></span>
          <p class="text-zinc-500 text-xs">Online · responds instantly</p>
        </div>
      </div>
    </div>

    <!-- Badge -->
    <div
      class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-medium"
    >
      <Icon icon="carbon:flash" class="text-sm" />
      Generative UI Demo
    </div>
  </header>

  <!-- ── Messages feed ──────────────────────────────────────── -->
  <div
    bind:this={messagesContainer}
    class="relative z-0 flex-1 overflow-y-auto scroll-smooth"
  >
    <div class="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-5">
      {#each messages as msg (msg.id)}
        {#if msg.role === "user"}
          <!-- User bubble -->
          <div
            in:fly={{ y: 14, duration: 380, easing: cubicOut }}
            class="flex items-end gap-2 justify-end"
          >
            <div
              class="max-w-[72%] bg-primary-500/20 border border-primary-500/30 rounded-2xl rounded-br-sm px-4 py-3"
            >
              <p class="text-white text-sm leading-relaxed">{msg.text}</p>
            </div>
            <div
              class="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-300"
            >
              <Icon icon="carbon:user-avatar-filled" class="text-sm" />
            </div>
          </div>
        {:else}
          <!-- Bot bubble -->
          <div
            in:fly={{ y: 14, duration: 380, easing: cubicOut }}
            class="flex items-start gap-2"
          >
            <div
              class="flex-shrink-0 w-7 h-7 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400"
            >
              <Icon icon="mdi:robot" class="text-sm" />
            </div>
            <div class="flex flex-col gap-3 max-w-[80%]">
              <!-- Text bubble -->
              <div
                class="bg-zinc-900/60 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3"
              >
                <p
                  class="text-sm leading-relaxed {msg.isError
                    ? 'text-red-400'
                    : 'text-zinc-200'}"
                >
                  {msg.text}
                </p>
              </div>

              <!-- Generative UI: Project card -->
              {#if msg.projectCard}
                <a
                  href={msg.projectCard.link}
                  in:fly={{
                    y: 16,
                    duration: 500,
                    delay: 220,
                    easing: cubicOut,
                  }}
                  class="group block bg-[#111111] border border-zinc-800 rounded-xl overflow-hidden hover:border-primary-500/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.14)] transition-all duration-300"
                >
                  <div class="h-40 overflow-hidden">
                    <img
                      src={msg.projectCard.cover}
                      alt={msg.projectCard.title}
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div class="px-4 py-3">
                    <p class="text-white text-sm font-semibold">
                      {msg.projectCard.title}
                    </p>
                    <p class="text-zinc-500 text-xs mt-0.5 leading-snug">
                      {msg.projectCard.slogan}
                    </p>
                    <p
                      class="text-primary-400 text-xs mt-2 flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                    >
                      View Project <Icon
                        icon="carbon:arrow-right"
                        class="text-sm"
                      />
                    </p>
                  </div>
                </a>
              {/if}
            </div>
          </div>
        {/if}
      {/each}

      <!-- Typing indicator -->
      {#if isTyping}
        <div
          in:fade={{ duration: 180 }}
          out:fade={{ duration: 120 }}
          class="flex items-start gap-2"
        >
          <div
            class="flex-shrink-0 w-7 h-7 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400"
          >
            <Icon icon="mdi:robot" class="text-sm" />
          </div>
          <div
            class="bg-zinc-900/60 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5"
          >
            <span
              class="w-2 h-2 rounded-full bg-zinc-500 animate-bounce"
              style="animation-delay: 0ms"
            ></span>
            <span
              class="w-2 h-2 rounded-full bg-zinc-500 animate-bounce"
              style="animation-delay: 160ms"
            ></span>
            <span
              class="w-2 h-2 rounded-full bg-zinc-500 animate-bounce"
              style="animation-delay: 320ms"
            ></span>
          </div>
        </div>
      {/if}

      <!-- Suggestion chips -->
      {#if messages.length <= 1 && !isTyping}
        <div
          in:fade={{ duration: 500, delay: 900 }}
          class="flex flex-wrap gap-2 mt-1"
        >
          {#each SUGGESTED_QUESTIONS as q}
            <button
              onclick={() => sendMessage(q)}
              class="border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-400 hover:border-primary-500/60 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-200 cursor-pointer"
            >
              {q}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <!-- ── Input bar (pinned bottom) ─────────────────────────── -->
  <footer
    class="relative z-10 flex-shrink-0 border-t border-zinc-800/60 bg-[#0a0a0a]/80 backdrop-blur-xl px-4 py-4"
  >
    <div class="max-w-3xl mx-auto flex flex-col gap-2">
      <div
        class="flex items-center gap-3 bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-primary-500/50 focus-within:ring-2 focus-within:ring-primary-500/10 transition-all duration-300"
      >
        <input
          bind:value={inputValue}
          onkeydown={handleKeydown}
          disabled={isTyping}
          placeholder="Ask me anything..."
          class="flex-1 bg-transparent text-white text-sm placeholder:text-zinc-600 outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        />
        <button
          onclick={() => sendMessage(inputValue)}
          disabled={isTyping || !inputValue.trim()}
          class="text-primary-400 hover:text-primary-300 disabled:text-zinc-700 disabled:cursor-not-allowed transition-colors duration-200 flex-shrink-0"
        >
          <Icon icon="carbon:send-filled" class="text-xl" />
        </button>
      </div>
      <p class="text-zinc-700 text-xs text-center">
        Powered by Gemini 2.0 Flash · responses may vary
      </p>
    </div>
  </footer>
</div>
