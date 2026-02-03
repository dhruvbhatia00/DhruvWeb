<script lang="ts">
  import { page } from '$app/stores';
  
  export let items: Array<{
    title: string;
    route: string;
    date?: string;
  }> = [];
  
  export let type: 'blog' | 'project' = 'blog';
  
  $: activeRoute = $page.url.pathname;
</script>

<nav class="recent-nav">
  <h3 class="nav-title">Recent {type === 'blog' ? 'Posts' : 'Projects'}</h3>
  <ul class="timeline-list">
    {#each items as item}
      <li class="timeline-item">
        <a 
          href={item.route} 
          class="timeline-link"
          class:active={activeRoute === item.route}
        >
          <span class="item-title">{item.title}</span>
          {#if item.date}
            <span class="item-date">{item.date}</span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
.recent-nav {
  --base-scale: clamp(0.75rem, 1.1vw, 1.1rem);
  --tab-color: #f7d89a;
  --tab-spacing: 0.5em;
  --transition-speed: 0.2s;
  
  width: 100%;
  padding: 1.5em 0;
  font-size: var(--base-scale);
  font-family: 'Courier New', Courier, 'IBM Plex Mono', 'Source Code Pro', monospace;
}

.nav-title {
  margin: 0 0 1em 0;
  font-size: 1em;
  font-weight: 600;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-left: 0.5em;
}

.timeline-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--tab-spacing);
}

.timeline-item {
  position: relative;
}

.timeline-link {
  display: block;
  position: relative;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
  
  /* Tab styling */
  width: 70%;
  padding: 0.5em 0.8em;
  background: var(--tab-color);
  border-radius: 0 0px 0px 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  font-weight: 600;
  letter-spacing: 0.01em;
  
  /* Better font rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  
  transition: 
    transform var(--transition-speed) ease,
    box-shadow var(--transition-speed) ease,
    filter var(--transition-speed) ease;
}

/* Triangle tab pointer on the right */
.timeline-link::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  width: 0.8em;
  background: var(--tab-color);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  transition: background var(--transition-speed) ease;
}

.timeline-link:hover {
  transform: translateX(4px);
  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 1);
  filter: brightness(1.05);
}

.timeline-link:hover::after {
  filter: brightness(1.05);
}

.timeline-link.active {
  font-weight: 700;
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.15);
  filter: saturate(1.2) brightness(1.08);
  z-index: 10;
}

.item-title {
  display: block;
  font-size: 0.98em;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.15em;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.item-date {2em;
  color: rgba(0, 0, 0, 0.65);
  font-style: italic;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.01em
  white-space: nowrap;
}
</style>
