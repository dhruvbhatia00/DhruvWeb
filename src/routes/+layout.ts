export async function load() {
  // Get all blog posts (both .svelte and .md)
  const blogFilesSvelte = import.meta.glob('./blog/blogposts/*/+page.svelte', { eager: true, as: 'raw' });
  const blogFilesMd = import.meta.glob('./blog/blogposts/*/+page.md', { eager: true, as: 'raw' });
  const blogFiles = { ...blogFilesSvelte, ...blogFilesMd };
  
  const blogPosts = Object.entries(blogFiles).map(([path, content]) => {
    const slug = path.match(/\.\/blog\/blogposts\/(.+)\/\+page\.(svelte|md)$/)?.[1];
    if (!slug) return null;
    
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/) || content.match(/^title:\s*(.+)$/m);
    const dateMatch = content.match(/date:\s*['"](.*?)['"]/) || content.match(/^date:\s*(.+)$/m);
    
    const title = titleMatch?.[1] || slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const date = dateMatch?.[1] || 'Jan 2026';
    
    return {
      title,
      route: `/blog/blogposts/${slug}`,
      date
    };
  }).filter(Boolean);
  
  // Get all projects (both .svelte and .md)
  const projectFilesSvelte = import.meta.glob('./projects/projectpages/*/+page.svelte', { eager: true, as: 'raw' });
  const projectFilesMd = import.meta.glob('./projects/projectpages/*/+page.md', { eager: true, as: 'raw' });
  const projectFiles = { ...projectFilesSvelte, ...projectFilesMd };
  
  const projects = Object.entries(projectFiles).map(([path, content]) => {
    const slug = path.match(/\.\/projects\/projectpages\/(.+)\/\+page\.(svelte|md)$/)?.[1];
    if (!slug) return null;
    
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/) || content.match(/^title:\s*(.+)$/m);
    const dateMatch = content.match(/date:\s*['"](.*?)['"]/) || content.match(/^date:\s*(.+)$/m);
    
    const title = titleMatch?.[1] || slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const date = dateMatch?.[1] || 'Winter 2026';
    
    return {
      title,
      route: `/projects/projectpages/${slug}`,
      date
    };
  }).filter(Boolean);
  
  return {
    blogPosts,
    projects
  };
}
