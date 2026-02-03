<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 - Page Not Found | Dhruv Bhatia</title>
</svelte:head>

<div class="error-container">
  <h1>404</h1>
  <h2>Page Not Found</h2>
  <p>
    The page <code>{$page.url.pathname}</code> doesn't exist.
  </p>
  <a href="/" class="home-link">← Back to Home</a>
</div>

<style>
  .error-container {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 6em;
    color: #d4af37;
    margin: 0;
    font-weight: 700;
  }

  h2 {
    font-size: 2em;
    color: #2a2a2a;
    margin: 0.5em 0;
  }

  p {
    font-size: 1.1em;
    color: #666;
    margin: 1em 0 2em 0;
  }

  code {
    background: #f5f5f5;
    padding: 0.2em 0.5em;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }

  .home-link {
    display: inline-block;
    padding: 0.8em 1.5em;
    background: #d4af37;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.2s;
  }

  .home-link:hover {
    background: #b8941f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  }
</style>
