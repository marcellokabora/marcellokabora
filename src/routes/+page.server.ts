import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = async ({ parent }) => {
  const { projects } = await parent();

  // Custom order for featured projects
  const featuredProjectIds = ['7echno', 'heatmap', 'appmanager', 'chartmap', 'uicomponents', 'network', 'website', 'monitoring', 'fasttrack', 'github', 'uicomponents', 'uploader'];

  // Filter and sort projects based on custom order
  const featuredProjects = featuredProjectIds
    .map(id => projects.find(p => p.name === id || p.id === id))
    .filter(p => p !== undefined);

  return {
    projects,
    featuredProjects,
  };
};
