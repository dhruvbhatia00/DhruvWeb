export async function load() {
  // Get all blog post pages using Vite's glob import (both .svelte and .md)
  const postFilesSvelte = import.meta.glob('./blogposts/*/+page.svelte', { eager: true, as: 'raw' });
  const postFilesMd = import.meta.glob('./blogposts/*/+page.md', { eager: true, as: 'raw' });
  
  const postFiles = { ...postFilesSvelte, ...postFilesMd };
  
  const posts = Object.entries(postFiles).map(([path, content]) => {
    // Extract slug from path
    const slug = path.match(/\.\/blogposts\/(.+)\/\+page\.(svelte|md)$/)?.[1];
    
    if (!slug) return null;
    
    // Extract metadata from the content (both formats)
    const titleMatch = content.match(/title:\s*['"](.+?)['"]/) || content.match(/^title:\s*(.+)$/m);
    const dateMatch = content.match(/date:\s*['"](.+?)['"]/) || content.match(/^date:\s*(.+)$/m);
    
    // Extract first paragraph for excerpt
    const paragraphMatch = content.match(/<p>([\s\S]*?)<\/p>/) || content.match(/^(?!#|---|\s*$)(.+)$/m);
    const excerpt = paragraphMatch?.[1]
      ?.replace(/<[^>]*>/g, '') // Remove HTML tags
      ?.replace(/\$.*?\$/g, '') // Remove inline math
      ?.trim()
      ?.slice(0, 200) // Limit to 200 characters
      + '...' || 'Click to read more...';
    
    const title = titleMatch?.[1] || slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const date = dateMatch?.[1] || 'January 2026';
    
    return {
      slug,
      title,
      route: `/blog/blogposts/${slug}`,
      date,
      excerpt
    };
  }).filter(Boolean);
  
  return {
    posts: posts.sort((a, b) => 
      // Sort by title for now, could parse dates and sort by those
      a!.title.localeCompare(b!.title)
    )
  };
}
