<script>
  import { fade, fly } from "svelte/transition";
  let { showModal = $bindable(), children } = $props();

  let dialog = $state(); // HTMLDialogElement

  $effect(() => {
    if (showModal) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
  class="fixed top-0 right-0 h-screen w-[500px] max-w-[100vw] m-0 border-0 p-0 shadow-2xl bg-white/95 backdrop-blur-xl [&::backdrop]:bg-black/50 translate-x-0"
  style="inset: 0 0 0 auto; height: 100vh; min-height: 100vh;"
  transition:fly={{ x: 500, duration: 400, delay: 100 }}
>
  <div class="relative flex flex-col w-full h-full">
    {@render children?.()}
  </div>
</dialog>
