<script>
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
>
  {@render children?.()}
</dialog>

<style>
  dialog {
    max-width: 80vw;
    border-radius: 0.5em;
    border: none;
    padding: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.5);
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
