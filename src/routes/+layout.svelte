<script lang="ts">
import Navbar from '$lib/components/Navbar.svelte';
import RecentNav from '$lib/components/RecentNav.svelte';
import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';
  
  export let data: LayoutData;
  
  $: isBlogPost = $page.url.pathname.includes('/blogposts/');
  $: isProject = $page.url.pathname.includes('/projectpages/');
  $: showRecentNav = isBlogPost || isProject;
  $: recentItems = isBlogPost ? data.blogPosts : data.projects;
  $: navType = isBlogPost ? 'blog' : 'project';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>


<div class="viewport">
  <div class="centering-anchor" class:at-home={$page.url.pathname === '/'}>    
    <div class="centered-box" class:is-home={$page.url.pathname === '/'}>
      <slot />
    </div>
    
    <aside class="nav_clinger">
		<Navbar />
		{#if showRecentNav}
		  <div class="sidebar-extra">
		    <RecentNav type={navType} items={recentItems} />
		  </div>
		{/if}
    </aside>
  </div>
</div>


<style>

/* Ensure app-viewport doesn't hide the texture */
:global(.app-viewport) {
  background: transparent !important;
}

  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
/* 1. The full-screen container */
.viewport {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
  padding: 5vh 0;
  box-sizing: border-box;
  background-color: #f5f8ff;
  position: relative;
}

.viewport::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' /%3E%3CfeColorMatrix values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.viewport > * {
  position: relative;
  z-index: 2;
}

/* 2. The invisible anchor that stays in the center */
.centering-anchor {
  position: relative;
  display: flex;
  align-items: center;
  justify-self: center;
  transition: all 0.7s ease;
}

/* 3. The box that is mathematically centered */
.centered-box {
  z-index: 2; /* Keeps it above the tab if needed */
  /* box-shadow: 0 4px 6px rgba(0,0,0,0.1); */
}

.centered-box:not(.is-home) {
  width: 56vw;
  min-width: 500px;
  background: #ffffff00;
  padding: 3rem 2rem;
  border-radius: 12px;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); */
}

/* 4. The "clinger" div */
.nav_clinger {
  position: absolute;
  left: 100%; /* Starts exactly where the centered box ends */
  top: 10vh;
  white-space: nowrap; 
  cursor: pointer;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-extra {
  margin-top: 1.5rem;
  min-width: 240px;
  max-width: min(320px, 18vw);
  white-space: normal;
}

</style>
