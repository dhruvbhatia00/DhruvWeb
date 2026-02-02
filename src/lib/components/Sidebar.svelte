<script lang="ts">
import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { goto } from '$app/navigation';

// Tab definitions
const tabs = [
  { name: 'Home', route: '/', color: '#f7e673' },
  { name: 'About', route: '/about', color: '#f7c873' },
  { name: 'Teaching', route: '/teaching', color: '#b6e3c6' },
  { name: 'Projects', route: '/projects', color: '#f7b3c2' },
  { name: 'Blog', route: '/blog', color: '#b3c7f7' }
];

// Get current route for active tab highlighting
const activeRoute = derived(page, ($page) => $page.url.pathname);

function handleTabClick(route: string) {
  goto(route);
}
</script>

<nav class="sidebar">
  {#each tabs as tab}
    <button
      class="tab { $activeRoute === tab.route ? 'active' : '' }"
      style="--tab-color: {tab.color}; background: {tab.color};"
      aria-current={$activeRoute === tab.route ? 'page' : undefined}
      on:click={() => handleTabClick(tab.route)}
    >
      {tab.name}
    </button>
  {/each}
</nav>

<style>
.sidebar {
  /* --- CONFIGURATION --- */
  --base-scale: clamp(0.8rem, 1.2vw, 1.2rem); /* Master font/spacing scale */
  --tab-spacing: 0.6em;    /* Gap between tabs */
  --tab-curve: 0px;        /* How rounded the right edge is */
  --transition-speed: 0.2s;
  
  height: auto;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
  
  /* Apply the scale */
  font-size: var(--base-scale);
  font-family: 'IBM Plex Mono', 'Source Code Pro', monospace;
}

.tab {
  all: unset; /* Reset button defaults safely */
  display: block;
  position: relative;
  cursor: pointer;
  
  /* Sizing */
  margin: var(--tab-spacing) 0;
  width: 4.7em; /* Using em makes width relative to font-size */
  padding: 0.6em 1em 0.5em 1em;
  
  /* Visuals */
  background: var(--tab-color);
  border-radius: 0 var(--tab-curve) var(--tab-curve) 0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  
  /* Transitions */
  transition: 
    transform var(--transition-speed) ease,
    width var(--transition-speed) ease,
    box-shadow var(--transition-speed) ease,
    padding-left var(--transition-speed) ease;
}

/* The "Sticky Tab" pointed tip */
.tab::after {
  content: '';
  position: absolute;
  left: 100%; /* Attach to right edge */
  top: 0;
  bottom: 0;
  width: 0.8em; /* Width of the triangle tip */
  background: var(--tab-color);
  
  /* Create the "cut-out" or "pointed" look using clip-path */
  /* This is much more robust than border-tricks for responsive sizes */
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.tab:hover {
  transform: translateX(4px); /* Slide slightly out from the book */
  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 1);
}

.tab.active {
  width: 6.2em; /* Grows longer when active */
  padding-left: 1.5em; /* Shifts text right when active */
  font-weight: 700;
  z-index: 10;
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.15);
  
  /* Subtle highlight on the active tab */
  filter: saturate(1.2) brightness(1.05);
}

/* Handle focus for accessibility */
.tab:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}
</style>
