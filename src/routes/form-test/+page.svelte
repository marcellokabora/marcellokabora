<script lang="ts">
  import type { ActionData } from "./$types";
  import {
    validateUsername,
    validateEmail,
    validatePhone,
    type ValidationResult,
  } from "./validation.remote";
  import { enhance } from "$app/forms";

  export let form: ActionData;

  let username = "";
  let email = "";
  let phone = "";

  let usernameError = "";
  let emailError = "";
  let phoneError = "";

  let usernameValidating = false;
  let emailValidating = false;
  let phoneValidating = false;

  let submitting = false;

  // Debounce timer
  let usernameTimer: ReturnType<typeof setTimeout>;
  let emailTimer: ReturnType<typeof setTimeout>;
  let phoneTimer: ReturnType<typeof setTimeout>;

  // Validate username with debouncing
  async function handleUsernameInput() {
    clearTimeout(usernameTimer);
    usernameError = "";

    if (!username) return;

    usernameTimer = setTimeout(async () => {
      usernameValidating = true;
      try {
        const result = (await validateUsername({
          username,
        })) as ValidationResult;
        if (!result.valid) {
          usernameError = result.error || "Invalid username";
        } else {
          usernameError = "";
        }
      } catch (error) {
        console.error("Validation error:", error);
        usernameError = "Validation failed";
      } finally {
        usernameValidating = false;
      }
    }, 500);
  }

  // Validate email with debouncing
  async function handleEmailInput() {
    clearTimeout(emailTimer);
    emailError = "";

    if (!email) return;

    emailTimer = setTimeout(async () => {
      emailValidating = true;
      try {
        const result = (await validateEmail({ email })) as ValidationResult;
        if (!result.valid) {
          emailError = result.error || "Invalid email";
        } else {
          emailError = "";
        }
      } catch (error) {
        console.error("Validation error:", error);
        emailError = "Validation failed";
      } finally {
        emailValidating = false;
      }
    }, 500);
  }

  // Validate phone with debouncing
  async function handlePhoneInput() {
    clearTimeout(phoneTimer);
    phoneError = "";

    if (!phone) return;

    phoneTimer = setTimeout(async () => {
      phoneValidating = true;
      try {
        const result = (await validatePhone({ phone })) as ValidationResult;
        if (!result.valid) {
          phoneError = result.error || "Invalid phone number";
        } else {
          phoneError = "";
        }
      } catch (error) {
        console.error("Validation error:", error);
        phoneError = "Validation failed";
      } finally {
        phoneValidating = false;
      }
    }, 500);
  }

  // Update errors from form action
  $: if (form?.errors) {
    if (form.errors.username) usernameError = form.errors.username;
    if (form.errors.email) emailError = form.errors.email;
    if (form.errors.phone) phoneError = form.errors.phone;
  }

  // Restore values after failed submission
  $: if (form?.values) {
    username = form.values.username || "";
    email = form.values.email || "";
    phone = form.values.phone || "";
  }
</script>

<svelte:head>
  <title>Remote Validation Test | Marcello Annicchiarico</title>
</svelte:head>

<div class="min-h-screen pt-24 px-4 pb-16 sm:px-6 bg-[#0a0a0a] m-auto">
  <div class="max-w-xl mx-auto">
    <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
      Remote Validation Test
    </h1>
    <p class="text-[#a0a0a0] text-lg leading-relaxed mb-8">
      This form demonstrates server-side validation using SvelteKit's
      <code
        class="bg-[#1a1a1a] text-purple-400 px-1.5 py-0.5 rounded font-mono text-sm"
        >.remote</code
      >
      function. As you type, the values are validated on the server, and errors are
      displayed in real-time.
    </p>

    {#if form?.success}
      <div
        class="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg mb-8 flex items-center gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        {form.message}
      </div>
    {/if}

    <form
      method="POST"
      class="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8"
      use:enhance={() => {
        submitting = true;
        return async ({ update }) => {
          await update();
          submitting = false;
        };
      }}
    >
      <div class="mb-6">
        <label
          for="username"
          class="flex items-center gap-2 text-white font-medium mb-2 text-sm"
        >
          Username
          {#if usernameValidating}
            <span class="text-cyan-400 text-xs font-normal">Validating...</span>
          {/if}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          bind:value={username}
          on:input={handleUsernameInput}
          class="w-full py-3 px-4 bg-[#0a0a0a] border rounded-lg text-white text-base transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-purple-400 focus:ring-[3px] focus:ring-purple-500/10 {usernameError
            ? 'border-red-500 focus:ring-red-500/10'
            : usernameValidating
              ? 'border-cyan-400'
              : 'border-zinc-800'}"
          placeholder="Enter username"
          required
        />
        {#if usernameError}
          <p class="text-red-500 text-sm mt-2">{usernameError}</p>
        {:else}
          <p class="text-[#a0a0a0] text-xs mt-2 italic">
            Try: admin, user, test, demo, or marcello (these are taken)
          </p>
        {/if}
      </div>

      <div class="mb-6">
        <label
          for="email"
          class="flex items-center gap-2 text-white font-medium mb-2 text-sm"
        >
          Email
          {#if emailValidating}
            <span class="text-cyan-400 text-xs font-normal">Validating...</span>
          {/if}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={email}
          on:input={handleEmailInput}
          class="w-full py-3 px-4 bg-[#0a0a0a] border rounded-lg text-white text-base transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-purple-400 focus:ring-[3px] focus:ring-purple-500/10 {emailError
            ? 'border-red-500 focus:ring-red-500/10'
            : emailValidating
              ? 'border-cyan-400'
              : 'border-zinc-800'}"
          placeholder="Enter email"
          required
        />
        {#if emailError}
          <p class="text-red-500 text-sm mt-2">{emailError}</p>
        {:else}
          <p class="text-[#a0a0a0] text-xs mt-2 italic">
            Try: admin@example.com, test@example.com, or demo@example.com (these
            are registered)
          </p>
        {/if}
      </div>

      <div class="mb-8">
        <label
          for="phone"
          class="flex items-center gap-2 text-white font-medium mb-2 text-sm"
        >
          Phone Number
          {#if phoneValidating}
            <span class="text-cyan-400 text-xs font-normal">Validating...</span>
          {/if}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          bind:value={phone}
          on:input={handlePhoneInput}
          class="w-full py-3 px-4 bg-[#0a0a0a] border rounded-lg text-white text-base transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-purple-400 focus:ring-[3px] focus:ring-purple-500/10 {phoneError
            ? 'border-red-500 focus:ring-red-500/10'
            : phoneValidating
              ? 'border-cyan-400'
              : 'border-zinc-800'}"
          placeholder="Enter phone number"
          required
        />
        {#if phoneError}
          <p class="text-red-500 text-sm mt-2">{phoneError}</p>
        {:else}
          <p class="text-[#a0a0a0] text-xs mt-2 italic">
            Enter at least 10 digits (e.g., +1 234-567-8900)
          </p>
        {/if}
      </div>

      <button
        type="submit"
        class="w-full py-3.5 px-6 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
        disabled={submitting ||
          usernameValidating ||
          emailValidating ||
          phoneValidating ||
          !!usernameError ||
          !!emailError ||
          !!phoneError}
      >
        {#if submitting}
          Submitting...
        {:else}
          Submit Form
        {/if}
      </button>
    </form>

    <div class="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6">
      <h3 class="text-white text-lg font-semibold mb-4">How it works:</h3>
      <ul class="space-y-2">
        <li
          class="text-[#a0a0a0] text-[15px] leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-purple-400"
        >
          Type in any field to trigger server-side validation after 500ms
        </li>
        <li
          class="text-[#a0a0a0] text-[15px] leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-purple-400"
        >
          Validation runs on the server using the
          <code
            class="bg-[#0a0a0a] text-purple-400 px-1.5 py-0.5 rounded font-mono text-sm"
            >.remote.ts</code
          >
          file
        </li>
        <li
          class="text-[#a0a0a0] text-[15px] leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-purple-400"
        >
          Errors are displayed in real-time as you type
        </li>
        <li
          class="text-[#a0a0a0] text-[15px] leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-purple-400"
        >
          The submit button is disabled while validating or if there are errors
        </li>
        <li
          class="text-[#a0a0a0] text-[15px] leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-purple-400"
        >
          Final validation also happens on form submission via
          <code
            class="bg-[#0a0a0a] text-purple-400 px-1.5 py-0.5 rounded font-mono text-sm"
            >+page.server.ts</code
          >
        </li>
      </ul>
    </div>
  </div>
</div>
