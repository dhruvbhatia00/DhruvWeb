<script lang="ts">
  export let title: string;
  export let date: string;
  export let author: string = '';
</script>

<header class="post-header">
  <h1>{title}</h1>
  <div class="post-meta">
    <span class="date">{date}</span>
    {#if author}
      <span class="author">by {author}</span>
    {/if}
  </div>
  <hr class="header-separator" />
</header>

<style>
  .post-header {
    margin-bottom: 2rem;
  }
  
  h1 {
    color: #1a1a1a;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: 700;
  }
  
  .post-meta {
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
  
  .author {
    color: #888;
    font-size: 0.95em;
    font-style: italic;
  }
  
  .header-separator {
    border: none;
    border-top: 2px solid #d4af37;
    margin: 0;
  }
</style>
