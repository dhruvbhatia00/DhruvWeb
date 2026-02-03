<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';
  
  let container: HTMLElement;
  
  onMount(() => {
    if (!container) return;
    
    // Auto-render inline math ($ ... $)
    const inlineMath = container.querySelectorAll('span.math-inline, .math');
    inlineMath.forEach((element) => {
      const text = element.textContent || '';
      try {
        katex.render(text, element as HTMLElement, {
          throwOnError: false,
          displayMode: false
        });
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    });
    
    // Auto-render display math ($$ ... $$)
    const displayMath = container.querySelectorAll('div.math-display, .math-block');
    displayMath.forEach((element) => {
      const text = element.textContent || '';
      try {
        katex.render(text, element as HTMLElement, {
          throwOnError: false,
          displayMode: true
        });
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    });
  });
</script>

<div bind:this={container} class="latex-content">
  <slot />
</div>

<style>
  :global(.latex-content .katex) {
    font-size: 1.1em;
  }
  
  :global(.latex-content .katex-display) {
    margin: 1.5em 0;
  }
</style>
