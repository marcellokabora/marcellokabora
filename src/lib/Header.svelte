<script lang="ts">
  interface Props {
    title?: string;
    slogan?: string;
    zoom?: number;
  }

  let { title = "Title", slogan = "Slogan", zoom = 1 }: Props = $props();
</script>

<header
  data-aos="slide-up"
  class="text-center flex justify-center py-8"
  style="zoom: {zoom}"
>
  <div class="flex flex-col items-center">
    <div class="text-3xl font-bold px-12 min-w-[30vw]">{title}</div>
    <hr class="opacity-20 w-full my-4" />
    <div class="px-12">{slogan}</div>
  </div>
</header>
