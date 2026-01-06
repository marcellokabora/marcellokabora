<script>
  import Dialog from "./Dialog.svelte";
  let { cancel, confirm } = $props();
</script>

<Dialog showModal={true}>
  <div class="main">
    <p>Do you confirm</p>
  </div>
  <div class="actions">
    <button onclick={cancel}>Cancel</button>
    <button onclick={confirm}>Confirm</button>
  </div>
</Dialog>
