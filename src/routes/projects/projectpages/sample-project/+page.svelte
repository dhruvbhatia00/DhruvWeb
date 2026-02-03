<script>
  const metadata = {
    title: 'Topological Data Analysis Tool',
    date: 'Winter 2026',
    status: 'In Progress',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Gudhi']
  };
</script>

<svelte:head>
  <title>{metadata.title}</title>
</svelte:head>

<article class="project-page">
  <header class="project-header">
    <h1>{metadata.title}</h1>
    <div class="project-meta">
      <span class="date">{metadata.date}</span>
      <span class="status {metadata.status.toLowerCase().replace(' ', '-')}">{metadata.status}</span>
    </div>
  </header>
  
  <section class="project-body">
    <h2>Overview</h2>
    <p>
      This project develops a comprehensive toolkit for topological data analysis (TDA), 
      providing researchers and practitioners with accessible methods to analyze complex 
      datasets through the lens of topology.
    </p>
    
    <h2>Motivation</h2>
    <p>
      Traditional data analysis methods often struggle with high-dimensional data and 
      complex geometric structures. TDA offers a powerful alternative by focusing on 
      the shape and structure of data, making it particularly useful for:
    </p>
    
    <ul>
      <li>Analyzing point cloud data from physical measurements</li>
      <li>Understanding network structures in social and biological systems</li>
      <li>Feature extraction in machine learning applications</li>
      <li>Time series analysis with sliding window embeddings</li>
    </ul>
    
    <h2>Key Features</h2>
    
    <div class="feature-list">
      <div class="feature">
        <!-- <h3>Persistent Homology</h3> -->
        <p>
          Compute persistence diagrams and barcodes to identify topological features 
          that persist across multiple scales.
        </p>
      </div>
      
      <div class="feature">
        <h3>Visualization Tools</h3>
        <p>
          Interactive visualizations of simplicial complexes, persistence diagrams, 
          and topological invariants.
        </p>
      </div>
      
      <div class="feature">
        <h3>Statistical Analysis</h3>
        <p>
          Statistical methods for comparing topological features and assessing 
          significance in data.
        </p>
      </div>
    </div>
    
    <h2>Technology Stack</h2>
    <div class="tech-stack">
      {#each metadata.tech as tech}
        <span class="tech-badge">{tech}</span>
      {/each}
    </div>
    
    <h2>Current Progress</h2>
    <p>
      The core computational engine is implemented and tested. Currently working on 
      improving visualization capabilities and adding support for more complex data types.
    </p>
    
    <h2>Future Directions</h2>
    <ul>
      <li>GPU acceleration for large-scale computations</li>
      <li>Integration with popular machine learning frameworks</li>
      <li>Web-based interface for accessibility</li>
      <li>Comprehensive documentation and tutorials</li>
    </ul>
  </section>
</article>

<style>
.project-page {
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  line-height: 1.8;
  color: #1a1a1a;
}

.project-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #d4af37;
}

.project-header h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.project-meta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.95rem;
}

.date {
  color: #666;
  font-style: italic;
}

.status {
  padding: 0.3em 0.8em;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status.in-progress {
  background: #fff3cd;
  color: #856404;
}

.project-body h2 {
  font-size: 1.8rem;
  margin: 2.5rem 0 1rem 0;
  color: #1a1a1a;
}

.project-body h3 {
  font-size: 1.3rem;
  margin: 1.5rem 0 0.5rem 0;
  color: #333;
}

.project-body p {
  margin: 1rem 0;
}

.project-body ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.project-body li {
  margin: 0.5rem 0;
}

.feature-list {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature {
  padding: 1.5rem;
  background: #f9f9f9;
  border-left: 4px solid #d4af37;
  border-radius: 4px;
}

.feature h3 {
  margin-top: 0;
  color: #d4af37;
}

.feature p {
  margin: 0.5rem 0 0 0;
  font-size: 0.95rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.tech-badge {
  padding: 0.4em 0.9em;
  background: #e8f4f8;
  color: #0c5460;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Courier New', monospace;
}
</style>
