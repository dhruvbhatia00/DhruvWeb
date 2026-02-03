<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import PostHeader from '$lib/components/PostHeader.svelte';
  
  function goBack() {
    goto('/blog');
  }
  
  $: metadata = $page.data.metadata;
</script>

<div class="post-container">
  <button class="back-button" on:click={goBack}>
    ← Back to Blog
  </button>
  
  <article class="blog-post">
    <PostHeader 
      title={metadata.title} 
      date={metadata.date} 
      author={metadata.author || ''} 
    />
    
    <section class="post-body">
      <slot />
    </section>
  </article>
</div>

<style>
  .post-container {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  }

  .back-button {
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid #d4af37;
    border-radius: 4px;
    color: #d4af37;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .back-button:hover {
    background: #d4af37;
    color: white;
    transform: translateX(-3px);
  }
  
  .blog-post {
    line-height: 1.8;
    color: #1a1a1a;
  }
  
  .post-body h2 {
    font-size: 1.8rem;
    margin: 2.5rem 0 1rem 0;
    color: #1a1a1a;
  }
  
  .post-body h3 {
    font-size: 1.4rem;
    margin: 2rem 0 1rem 0;
    color: #333;
  }
  
  .post-body p {
    margin: 1rem 0;
  }
  
  .post-body ul {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  .post-body li {
    margin: 0.5rem 0;
  }
  
  .post-body :global(.definition),
  .post-body :global(.example) {
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: #fffef9;
    border-left: 4px solid #d4af37;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  
  .post-body :global(.definition strong),
  .post-body :global(.example strong) {
    color: #d4af37;
    font-weight: 700;
  }
  
  .post-body :global(.definition) {
    background: #fffef9;
  }
  
  .post-body :global(.example) {
    background: #f9fffe;
  }
</style>
