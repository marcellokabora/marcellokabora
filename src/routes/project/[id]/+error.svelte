<script lang="ts">
  import { page } from "$app/state";
</script>

<div
  class="h-screen w-full flex flex-col items-center justify-center bg-gray-400 text-2xl font-bold"
>
  <div class="text-4xl">{page.status}</div>
  <div>{page.error?.message}</div>
</div>
