<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function getErrorTitle(status: number) {
    switch (status) {
      case 404:
        return "Project Not Found";
      case 403:
        return "Access Denied";
      case 500:
        return "Server Error";
      default:
        return "Oops! Something went wrong";
    }
  }

  function getErrorDescription(status: number) {
    switch (status) {
      case 404:
        return "The project you're looking for doesn't exist or has been moved.";
      case 403:
        return "You don't have permission to access this project.";
      case 500:
        return "Our server encountered an error while processing your request.";
      default:
        return "We're experiencing some technical difficulties.";
    }
  }
</script>

<div
  class="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4"
>
  <div
    class="max-w-md w-full text-center space-y-8 transform transition-all duration-700 ease-out"
    class:translate-y-0={mounted}
    class:opacity-100={mounted}
    class:translate-y-8={!mounted}
    class:opacity-0={!mounted}
  >
    <!-- Error Icon -->
    <div class="flex justify-center">
      <div class="relative">
        <div
          class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            class="w-12 h-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.084 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <!-- Pulse animation ring -->
        <div
          class="absolute inset-0 w-24 h-24 bg-red-200 rounded-full animate-ping opacity-20"
        ></div>
      </div>
    </div>

    <!-- Error Status -->
    <div class="space-y-2">
      <h1 class="text-6xl font-bold text-gray-800 tracking-tight">
        {page.status}
      </h1>
      <h2 class="text-2xl font-semibold text-gray-700">
        {getErrorTitle(page.status)}
      </h2>
    </div>

    <!-- Error Description -->
    <div class="space-y-4">
      <p class="text-gray-600 leading-relaxed">
        {getErrorDescription(page.status)}
      </p>
      {#if page.error?.message}
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="text-sm text-red-700 font-medium">
            Error Details: {page.error.message}
          </p>
        </div>
      {/if}
    </div>

    <!-- Action Buttons -->
    <div class="space-y-3">
      <button
        onclick={() => history.back()}
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        ← Go Back
      </button>

      <a
        href="/"
        class="block w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
      >
        🏠 Back to Home
      </a>

      <a
        href="/projects"
        class="block w-full text-blue-600 hover:text-blue-700 font-medium py-2 px-6 transition-colors duration-200"
      >
        View All Projects →
      </a>
    </div>
  </div>

  <!-- Background decoration -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"
    ></div>
  </div>
</div>
