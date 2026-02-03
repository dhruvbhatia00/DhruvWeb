export async function load() {
  // Get all project pages using Vite's glob import
  const projectFiles = import.meta.glob('./projectpages/*/+page.svelte', { eager: true, as: 'raw' });
  
  const projects = Object.entries(projectFiles).map(([path, content]) => {
    // Extract slug from path: ./projectpages/sample-project/+page.svelte -> sample-project
    const slug = path.match(/\.\/projectpages\/(.+)\/\+page\.svelte$/)?.[1];
    
    if (!slug) return null;
    
    // Extract metadata from the content
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/s);
    const dateMatch = content.match(/date:\s*['"](.*?)['"]/s);
    const statusMatch = content.match(/status:\s*['"](.*?)['"]/s);
    
    // Extract first paragraph after Overview or first paragraph for excerpt
    const overviewMatch = content.match(/<h2>Overview<\/h2>[\s\S]*?<p>([\s\S]*?)<\/p>/);
    const paragraphMatch = content.match(/<p>([\s\S]*?)<\/p>/);
    
    const excerpt = (overviewMatch?.[1] || paragraphMatch?.[1])
      ?.replace(/<[^>]*>/g, '') // Remove HTML tags
      ?.trim()
      ?.slice(0, 200) // Limit to 200 characters
      + '...' || 'Click to learn more...';
    
    const title = titleMatch?.[1] || slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const date = dateMatch?.[1] || 'Winter 2026';
    const status = statusMatch?.[1] || 'Ongoing';
    
    return {
      slug,
      title,
      route: `/projects/projectpages/${slug}`,
      date,
      status,
      excerpt
    };
  }).filter(Boolean);
  
  return {
    projects: projects.sort((a, b) => 
      // Sort by title for now, could parse dates and sort by those
      a!.title.localeCompare(b!.title)
    )
  };
}
