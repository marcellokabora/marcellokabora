<script>
  import { fade, scale } from "svelte/transition";
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
  class="fixed inset-0 m-auto max-w-[80vw] rounded-lg border-0 p-0 shadow-lg bg-white/50 backdrop-blur-xl [&::backdrop]:bg-black/50"
  transition:fade={{ duration: 200 }}
>
  <div
    class="relative flex items-center justify-center w-full h-full p-6"
    in:scale={{ duration: 200, start: 0.95 }}
    out:scale={{ duration: 200, start: 0.95 }}
  >
    {@render children?.()}
  </div>
</dialog>
