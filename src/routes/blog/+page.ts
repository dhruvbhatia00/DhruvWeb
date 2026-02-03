export async function load() {
  // Get all blog post metadata from +page.ts files
  const postModules = import.meta.glob('./blogposts/**/+page.ts');
  
  const posts = await Promise.all(
    Object.entries(postModules).map(async ([path, resolver]) => {
      const module = await resolver() as { load: () => { metadata: any } };
      const { metadata } = module.load();
      
      // Extract the route path from the file path
      // path looks like: './blogposts/sample-post/+page.ts'
      const slug = path.match(/\.\/blogposts\/(.+)\/\+page\.ts$/)?.[1];
      
      if (!slug) return null;
      
      return {
        title: metadata.title,
        date: metadata.date,
        author: metadata.author,
        excerpt: metadata.excerpt || 'Click to read more...',
        route: `/blog/blogposts/${slug}`
      };
    })
  );
  
  // Filter out any null entries and sort by date (newest first)
  const validPosts = posts.filter(Boolean);
  validPosts.sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime());
  
  return {
    posts: validPosts
  };
}
