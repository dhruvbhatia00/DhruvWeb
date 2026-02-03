<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import ProjectHeader from '$lib/components/ProjectHeader.svelte';
  
  function goBack() {
    goto('/projects');
  }
  
  $: metadata = $page.data.metadata;
</script>

<div class="project-container">
  <button class="back-button" on:click={goBack}>
    ← Back to Projects
  </button>
  
  <article class="project-page">
    <ProjectHeader 
      title={metadata.title} 
      date={metadata.date} 
      status={metadata.status || ''} 
    />
    
    <section class="project-body">
      <slot />
    </section>
  </article>
</div>

<style>
  .project-container {
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
  
  .project-page {
    line-height: 1.8;
    color: #1a1a1a;
  }
  
  .project-body h2 {
    font-size: 1.8rem;
    margin: 2.5rem 0 1rem 0;
    color: #1a1a1a;
  }
  
  .project-body h3 {
    font-size: 1.4rem;
    margin: 2rem 0 1rem 0;
    color: #333;
  }
  
  .project-body p {
    margin: 1rem 0;
  }
  
  .project-body ul {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  .project-body li {
    margin: 0.5rem 0;
  }
</style>
