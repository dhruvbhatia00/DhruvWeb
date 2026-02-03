<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<h1>Blog</h1>

<p>
  I write about mathematics, topology, data science, and the intersections between them. 
  Here are my recent posts:
</p>

{#each data.posts as post}
  <article class="blog-preview">
    <div class="date">{post.date}</div>
    <h2><a href="{post.route}">{post.title}</a></h2>
    <p>
      {post.excerpt}
    </p>
    <a href="{post.route}" class="read-more">Read more →</a>
  </article>
{/each}

<style>
  :global(body) {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  }

  h1 {
    color: #1a1a1a;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: 700;
    padding-bottom: 0.3em;
    border-bottom: 3px solid #d4af37;
    display: inline-block;
  }
  
  h2 {
    color: #2a2a2a;
    font-size: 1.5em;
    margin: 0.5em 0 0.3em 0;
    font-weight: 600;
  }
  
  h2 a {
    color: #2a2a2a;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  h2 a:hover {
    color: #d4af37;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1em;
    color: #333;
  }
  
  .blog-preview {
    padding: 1rem 0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 1rem;
  }
  
  .blog-preview:last-child {
    border-bottom: none;
  }
  
  .date {
    color: #666;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5em;
    font-weight: 600;
  }
  
  .read-more {
    color: #d4af37;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
  }
  
  .read-more:hover {
    color: #b8941f;
    transform: translateX(3px);
    display: inline-block;
  }
</style>
