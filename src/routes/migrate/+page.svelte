<script lang="ts">
  import { onMount } from "svelte";
  import { db } from "$lib/firebase";
  import { collection, doc, setDoc } from "firebase/firestore";
  import type { Projecto } from "$lib/database.types";
  import type { PageData } from "./$types";

  export let data: PageData;

  let migrationStatus: "idle" | "migrating" | "success" | "error" = "idle";
  let migrationProgress = 0;
  let migrationMessage = "";
  let migratedCount = 0;
  let errorCount = 0;
  let logs: string[] = [];

  async function migrateToFirestore() {
    if (!data.projects || data.projects.length === 0) {
      migrationMessage = "No projects found to migrate";
      migrationStatus = "error";
      return;
    }

    migrationStatus = "migrating";
    migrationProgress = 0;
    migratedCount = 0;
    errorCount = 0;
    logs = [];

    const totalProjects = data.projects.length;
    logs.push(`Starting migration of ${totalProjects} projects...`);

    for (let i = 0; i < totalProjects; i++) {
      const project = data.projects[i];

      try {
        // Use the name as the document ID, removing any special characters
        const docId = project.name.replace(/[^a-zA-Z0-9-_]/g, "_");

        // Create a clean project object without undefined values
        const projectData: Partial<Projecto> = {
          id: project.id,
          name: project.name,
          title: project.title,
          date: project.date,
          type: project.type,
          slogan: project.slogan,
          info: project.info,
          lang: project.lang,
          link: project.link,
          code: project.code,
          youtube: project.youtube,
        };

        // Only include non-undefined values
        const cleanProjectData = Object.fromEntries(
          Object.entries(projectData).filter(
            ([_, value]) => value !== undefined
          )
        );

        // Handle arrays separately
        if (project.gallery && project.gallery.length > 0) {
          cleanProjectData.gallery = project.gallery;
        }

        if (project.cover) {
          cleanProjectData.cover = project.cover;
        }

        // Add to Firestore with title as document ID
        const docRef = doc(db, "projects", docId);
        await setDoc(docRef, cleanProjectData);

        migratedCount++;
        logs.push(`✅ Migrated: "${project.title}" (ID: ${docId})`);
      } catch (error) {
        errorCount++;
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        logs.push(`❌ Failed to migrate "${project.title}": ${errorMessage}`);
        console.error(`Error migrating project ${project.title}:`, error);
      }

      // Update progress
      migrationProgress = ((i + 1) / totalProjects) * 100;
    }

    if (errorCount === 0) {
      migrationStatus = "success";
      migrationMessage = `✅ Migration completed! Successfully migrated ${migratedCount} projects to Firestore.`;
      logs.push(
        `🎉 Migration completed successfully! ${migratedCount} projects migrated.`
      );
    } else {
      migrationStatus = "error";
      migrationMessage = `Migration completed with ${errorCount} errors. ${migratedCount} projects migrated successfully.`;
      logs.push(`⚠️ Migration completed with ${errorCount} errors`);
    }
  }

  function resetMigration() {
    migrationStatus = "idle";
    migrationProgress = 0;
    migrationMessage = "";
    migratedCount = 0;
    errorCount = 0;
    logs = [];
  }
</script>

<svelte:head>
  <title>Migrate Projects | Marcello Kabora</title>
  <meta
    name="description"
    content="Migrate projects from Supabase to Firestore"
  />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8">
  <div class="max-w-4xl mx-auto px-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">
        Project Migration Tool
      </h1>

      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">
          Supabase → Firestore Migration
        </h2>
        <p class="text-gray-600 mb-4">
          This tool will migrate all projects from Supabase to Firestore. The
          document ID in Firestore will be based on the project name.
        </p>
      </div>

      <!-- Project Count -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-blue-800">
              Found {data.projects?.length || 0} projects in Supabase
            </h3>
            {#if data.error}
              <p class="text-sm text-red-600 mt-1">Error: {data.error}</p>
            {/if}
          </div>
        </div>
      </div>

      <!-- Migration Controls -->
      <div class="mb-6">
        {#if migrationStatus === "idle"}
          <button
            on:click={migrateToFirestore}
            disabled={!data.projects || data.projects.length === 0}
            class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Start Full Migration
          </button>
          <p class="text-sm text-blue-600 mt-2">
            🚀 This will migrate all {data.projects?.length || 0} projects to Firestore
          </p>
        {:else if migrationStatus === "migrating"}
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"
              ></div>
              <span class="text-gray-700">Migrating projects...</span>
            </div>

            <!-- Progress Bar -->
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div
                class="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style="width: {migrationProgress}%"
              ></div>
            </div>

            <div class="text-sm text-gray-600">
              Progress: {migrationProgress.toFixed(1)}% ({migratedCount} migrated,
              {errorCount} errors)
            </div>
          </div>
        {:else}
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                {#if migrationStatus === "success"}
                  <svg
                    class="h-6 w-6 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                {:else}
                  <svg
                    class="h-6 w-6 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    ></path>
                  </svg>
                {/if}
                <span class="font-medium text-gray-900">{migrationMessage}</span
                >
              </div>

              <button
                on:click={resetMigration}
                class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset
              </button>
            </div>
          </div>
        {/if}
      </div>

      <!-- Migration Logs -->
      {#if logs.length > 0}
        <div class="bg-gray-900 rounded-lg p-4">
          <h3 class="text-white font-semibold mb-3">Migration Log</h3>
          <div class="bg-black rounded p-3 h-64 overflow-y-auto">
            {#each logs as log}
              <div class="text-green-400 text-sm font-mono mb-1">{log}</div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Project Preview -->
      {#if data.projects && data.projects.length > 0}
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Projects to Migrate ({data.projects.length})
          </h3>
          <div class="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
            {#each data.projects as project, index}
              <div
                class="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
              >
                <div>
                  <span class="font-medium">{project.title}</span>
                  <span class="text-gray-500 text-sm ml-2"
                    >({project.type || "Unknown type"})</span
                  >
                </div>
                <span class="text-xs text-gray-400">
                  Firestore ID: {project.name.replace(/[^a-zA-Z0-9-_]/g, "_")}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Custom scrollbar for logs */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: #1f2937;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 3px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
</style>
