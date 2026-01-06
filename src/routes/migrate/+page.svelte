<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";

  let { data, form }: { data: PageData; form: ActionData } = $props();
  let loading = $state(false);
</script>

<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-6">Migrate Projects to Name-Based IDs</h1>

  {#if form?.success}
    <div
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
    >
      {form.message}
    </div>
  {/if}

  {#if form?.error}
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
    >
      {form.error}
    </div>
  {/if}

  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Current ID
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each data.projects as project}
          <tr class:bg-yellow-50={project.id !== project.name}>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {project.id}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {project.name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {project.title}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              {#if project.id !== project.name}
                <form
                  method="POST"
                  action="?/migrate"
                  use:enhance={() => {
                    loading = true;
                    return async ({ update }) => {
                      await update();
                      loading = false;
                    };
                  }}
                >
                  <input type="hidden" name="oldId" value={project.id} />
                  <input type="hidden" name="newId" value={project.name} />
                  <button
                    type="submit"
                    disabled={loading}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                  >
                    Migrate
                  </button>
                </form>
              {:else}
                <span class="text-green-600">✓ Already migrated</span>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="mt-6 p-4 bg-blue-50 rounded">
    <h2 class="font-bold mb-2">Instructions:</h2>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>Projects highlighted in yellow need migration</li>
      <li>
        Click "Migrate" to copy the project data to a new document using the
        name as ID
      </li>
      <li>
        The original document will remain (you can delete it manually later)
      </li>
      <li>
        After migration, the project will be accessible at /project/{"{name}"}
      </li>
    </ul>
  </div>
</div>
