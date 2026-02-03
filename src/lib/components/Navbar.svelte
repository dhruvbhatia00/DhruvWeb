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

<nav class="navbar">
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
.navbar {
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
  font-family: 'Courier New', Courier, 'IBM Plex Mono', 'Source Code Pro', monospace;
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
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  letter-spacing: 0.02em;
  
  /* Better font rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  
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

/* Hand-drawn circle scribble on active tab */
.tab.active::before {
  content: '';
  position: absolute;
  left: 40%;
  top: 50%;
  width: 150%;
  height: 140%;
  transform: translate(-50%, -50%) rotate(-3deg);
  pointer-events: none;
  z-index: 1;
  
  /* SVG hand-drawn circle */
  background-image: url("data:image/svg+xml,%3Csvg width='300' height='150' viewBox='320 750 300 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m 444.57093,791.15059 c -39.3785,-5.23718 -83.96778,10.97639 -89.22363,58.27902 -0.31346,2.82112 -0.27272,9.20229 3.61021,10.83062 35.19116,14.75758 221.25319,10.86824 191.85659,-66.01517 -18.44776,-48.248 -217.86708,14.03274 -186.18342,53.63732 20.89183,26.11478 193.40383,9.54597 193.40383,-43.32245 0,-22.25359 -147.59371,-23.17823 -128.42014,24.75569' fill='none' stroke='%23404040' stroke-width='3.5' stroke-linecap='round' opacity='0.5'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* Ensure text appears above the circle */
.tab.active {
  position: relative;
}

/* Handle focus for accessibility */
.tab:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}
</style>
