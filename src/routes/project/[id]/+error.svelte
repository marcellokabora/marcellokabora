<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="error">
  <div class="status">{page.status}</div>
  <div>{page.error?.message}</div>
</div>

<style>
  .error {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: silver;
    width: 100%;
    font-size: 2em;
    font-weight: bold;
    .status {
      zoom: 2;
    }
  }
</style>
