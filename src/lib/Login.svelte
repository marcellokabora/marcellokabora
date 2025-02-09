<script lang="ts">
  let { showModal = $bindable() } = $props();
</script>

<form action="" onsubmit={() => (showModal = false)}>
  <!-- svelte-ignore a11y_autofocus -->
  <input type="email" autofocus placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    input,
    button {
      flex: 1;
      padding: 1em 1.5em;
      border-radius: 100px;
      border: none;
      background-color: rgb(230, 230, 230);
    }
  }
</style>
