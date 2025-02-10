<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Projecto } from "./database.types";
  import { supabase } from "./supabaseClient";

  let { showCreate = $bindable(), user = $bindable() } = $props();
  let loading = $state(false);
  let error = $state("");
  let data: Projecto = $state({
    name: "",
    title: "",
    slogan: "",
    info: "",
    lang: [],
    code: "",
    link: "",
    cover: "",
    type: "",
    more: [],
    date: new Date().toISOString(),
    gallery: [],
    user_id: user?.id,
    email: user?.email,
  });

  let input: HTMLInputElement;
  let cover = $state("");
  let coverFile: any = $state();
  let isValid = $derived(data.name && data.cover);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (user) {
      loading = true;
      error = "";
      if (isValid) {
        supabase
          .from("projects")
          .insert([data])
          .then((result) => {
            if (result.error) {
              error = result.error.message;
              loading = false;
            } else {
              if (coverFile) {
                supabase.storage
                  .from("marcellokabora")
                  .upload(data.name + "/" + data.cover, coverFile, {
                    cacheControl: "3600",
                    upsert: false,
                  })
                  .then((result) => {
                    if (result.error) {
                      error = result.error.message;
                      loading = false;
                    } else {
                      iFinish();
                    }
                  });
              } else {
                iFinish();
              }
            }
          });
      } else {
        error = "Missing";
      }
    } else {
      error = "Error";
    }
  }

  function iFinish() {
    loading = false;
    showCreate = false;
    goto("/projecto/" + data.name);
  }

  function onChange() {
    if (input.files && input.files[0]) {
      coverFile = input.files[0];
      cover = URL.createObjectURL(coverFile);
      data.cover = coverFile.name;
    }
  }
</script>

<form onsubmit={handleSubmit}>
  <div class="main">
    <div class="cover">
      <div class="label">
        <span>Cover*</span>
        <input bind:this={input} onchange={onChange} type="file" />
      </div>
      <img src={cover} alt="" />
    </div>
    <div class="column2">
      <label>
        <span>Name*</span>
        <input type="text" bind:value={data.name} />
      </label>
      <label>
        <span>Title</span>
        <input type="text" bind:value={data.title} />
      </label>
      <label>
        <span>Slogan</span>
        <input type="text" bind:value={data.slogan} />
      </label>
      <label>
        <span>Lang</span>
        <input type="text" bind:value={data.lang} />
      </label>
      <label>
        <span>Code</span>
        <input type="text" bind:value={data.code} />
      </label>
      <label>
        <span>Link</span>
        <input type="text" bind:value={data.link} />
      </label>
      <label>
        <span>More</span>
        <input type="text" bind:value={data.more} />
      </label>
    </div>
    <label>
      <span>Infos</span>
      <textarea bind:value={data.info}></textarea>
    </label>
  </div>
  <div class="actions">
    {#if error}
      <span class="error">{error}</span>
    {/if}
    <button onclick={() => (showCreate = false)}>Cancel</button>
    <button
      type="submit"
      class="login"
      disabled={!isValid}
      style:opacity={!isValid ? 0.2 : 1}
    >
      {#if loading}
        <span>Loading...</span>
      {:else}
        <span>Create</span>
      {/if}
    </button>
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 600px;
    max-height: 60vh;
    .main {
      display: flex;
      flex-direction: column;
      gap: 1em;
      overflow: auto;
      padding: 2em;
    }
    .column2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
    label {
      display: flex;
      flex-direction: column;
      span {
        font-size: small;
      }
      input,
      textarea {
        padding: 1em;
        border-radius: 0.5em;
        border: 1px solid silver;
      }
      textarea {
        min-height: 80px;
      }
    }
    .error {
      color: red;
      font-size: small;
      max-width: 400px;
    }
    .actions {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1em;
      padding: 1em;
      button {
        &.login {
          background-color: gray;
          color: white;
          border-radius: 100px;
          padding: 1em 1.5em;
        }
      }
    }
    .cover {
      img {
        width: 100%;
      }
    }
  }
</style>
