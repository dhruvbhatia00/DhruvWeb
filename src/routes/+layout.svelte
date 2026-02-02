<script lang="ts">
import Sidebar from '$lib/components/Sidebar.svelte';
</script>


<div class="viewport">
  <div class="centering-anchor">
    <div class="centered-box">
      <slot />
    </div>
    
    <div class="side-tab">
		<Sidebar />
    </div>
  </div>
</div>


<style>

/* Ensure your containers don't hide the texture */
:global(.viewport), :global(.app-viewport) {
  background: transparent !important;
}

  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden; /* Specifically prevents the ghost scroll */
  }
/* 1. The full-screen container */
.viewport {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* background-color: #f5f5f5; */
}

/* 2. The invisible anchor that stays in the center */
.centering-anchor {
  position: relative;
  display: flex;
  align-items: center;
}

/* 3. The box that is mathematically centered */
.centered-box {
  z-index: 2; /* Keeps it above the tab if needed */
  /* box-shadow: 0 4px 6px rgba(0,0,0,0.1); */
}

/* 4. The "clinger" div */
.side-tab {
  position: absolute;
  left: 100%; /* Starts exactly where the centered box ends */
  top: 12%;
  white-space: nowrap; 
  cursor: pointer;
  z-index: 1;
}
</style>
