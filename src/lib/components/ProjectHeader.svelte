<script lang="ts">
  export let title: string;
  export let date: string;
  export let status: string = '';
</script>

<header class="project-header">
  <h1>{title}</h1>
  <div class="project-meta">
    <span class="date">{date}</span>
    {#if status}
      <span class="status {status.toLowerCase().replace(' ', '-')}">{status}</span>
    {/if}
  </div>
  <hr class="header-separator" />
</header>

<style>
  .project-header {
    margin-bottom: 2rem;
  }
  
  h1 {
    color: #1a1a1a;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: 700;
  }
  
  .project-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .date {
    color: #666;
    font-size: 0.95em;
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
  
  .header-separator {
    border: none;
    border-top: 2px solid #d4af37;
    margin: 0;
  }
</style>
