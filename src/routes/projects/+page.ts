export async function load() {
  // Get all project metadata from +page.ts files
  const projectModules = import.meta.glob('./projectpages/**/+page.ts');
  
  const projects = await Promise.all(
    Object.entries(projectModules).map(async ([path, resolver]) => {
      const module = await resolver() as { load: () => { metadata: any } };
      const { metadata } = module.load();
      
      // Extract the route path from the file path
      // path looks like: './projectpages/sample-project/+page.ts'
      const slug = path.match(/\.\/projectpages\/(.+)\/\+page\.ts$/)?.[1];
      
      if (!slug) return null;
      
      return {
        title: metadata.title,
        date: metadata.date,
        status: metadata.status,
        excerpt: metadata.excerpt || 'Click to learn more...',
        route: `/projects/projectpages/${slug}`
      };
    })
  );
  
  // Filter out any null entries and sort by date
  const validProjects = projects.filter(Boolean);
  validProjects.sort((a, b) => a!.date.localeCompare(b!.date));
  
  return {
    projects: validProjects
  };
}
