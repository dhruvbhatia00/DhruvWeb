<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import { cubicOut } from 'svelte/easing';

  // We use the full path as the key
  $: url = $page.url.pathname;
</script>

<article class="academic-sheet">
  <div class="transition-container">
    {#key url}
      <div 
        class="page-wrapper"
        in:fly={{ y: 10, duration: 400, delay: 500, easing: cubicOut }}
        out:fade={{ duration: 400 }}
      >
        <slot />
      </div>
    {/key}
  </div>
</article>

<style>
  .academic-sheet {
    width: 64vw;
    height: 90vh;
    border-radius: 24px;
    background-color: #ebe7e0; 
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.08);
    position: relative;
    display: flex;
    flex-direction: column;
    /* Move overflow to the wrapper if you want the frame to stay still */
    overflow: hidden; 
  }

  .transition-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .page-wrapper {
    /* Absolute positioning prevents the 'jump' during the swap */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    /* Re-adding the scroll and padding here */
    overflow-y: auto;
    padding: 4rem 5rem;
    box-sizing: border-box;
    
    font-family: 'EB Garamond', serif;
    line-height: 1.7;
    color: #2a2a2a;
  }
</style>