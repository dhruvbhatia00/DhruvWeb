<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<h1>Projects</h1>

<p>
  Here are some of my research projects and software tools at the intersection of 
  mathematics, topology, and data science.
</p>

{#each data.projects as project}
  <article class="project-preview">
    <div class="project-meta">
      <span class="date">{project.date}</span>
      <span class="status {project.status.toLowerCase().replace(' ', '-')}">{project.status}</span>
    </div>
    <h2><a href="{project.route}">{project.title}</a></h2>
    <p>
      {project.excerpt}
    </p>
    <a href="{project.route}" class="read-more">View project →</a>
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
  
  .project-preview {
    padding: 1rem 0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 1rem;
  }
  
  .project-preview:last-child {
    border-bottom: none;
  }
  
  .project-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5em;
  }
  
  .date {
    color: #666;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
  
  .status {
    font-size: 0.85em;
    padding: 0.3em 0.8em;
    border-radius: 4px;
    font-weight: 600;
  }
  
  .status.in-progress {
    background: #fff3cd;
    color: #856404;
  }
  
  .status.completed {
    background: #d4edda;
    color: #155724;
  }
  
  .status.ongoing {
    background: #d1ecf1;
    color: #0c5460;
  }
  
  .status.planned {
    background: #e2e3e5;
    color: #383d41;
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
