<script>
  import LatexRenderer from '$lib/components/LatexRenderer.svelte';
  
  const metadata = {
    title: 'Understanding Algebraic Topology',
    date: 'January 15, 2026',
    author: 'Dhruv Bhatia'
  };
</script>

<svelte:head>
  <title>{metadata.title}</title>
</svelte:head>

<article class="blog-post">
  <header class="post-header">
    <h1>{metadata.title}</h1>
    <div class="post-meta">
      <span class="date">{metadata.date}</span>
      <span class="author">by {metadata.author}</span>
    </div>
  </header>
  
  <LatexRenderer>
    <section class="post-body">
      <p>
        Algebraic topology is a branch of mathematics that uses tools from abstract algebra 
        to study topological spaces. The basic goal is to find algebraic invariants that 
        classify topological spaces up to homeomorphism, though usually most classify up to 
        homotopy equivalence.
      </p>
      
      <h2>Fundamental Concepts</h2>
      
      <div class="definition">
        <strong>Definition:</strong> A <em>topological space</em> is a set <span class="math-inline">X</span> together with a 
        collection of subsets (called open sets) that satisfy certain axioms.
      </div>
      
      <p>
        The most important algebraic structures used in topology are groups, particularly 
        the fundamental group and homology groups. These provide powerful tools for 
        distinguishing between different topological spaces.
      </p>
      
      <h3>The Fundamental Group</h3>
      
      <p>
        The fundamental group <span class="math-inline">{'\\pi_1(X, x_0)'}</span> captures information about loops in a space <span class="math-inline">X</span> based 
        at a point <span class="math-inline">{'x_0'}</span>. It's defined as the set of homotopy classes of loops, with the group 
        operation being concatenation of loops.
      </p>
      
      <div class="example">
        <strong>Example:</strong> The fundamental group of the circle <span class="math-inline">{'S^1'}</span> is isomorphic to 
        the integers <span class="math-inline">{'\\mathbb{Z}'}</span>, where each integer represents the winding number around the circle.
      </div>
      
      <h3>Homology Groups</h3>
      
      <p>
        Homology groups provide a way to measure "holes" in different dimensions. The <span class="math-inline">n</span>-th homology group 
        <span class="math-inline">H_n(X)</span> detects <span class="math-inline">n</span>-dimensional holes in a space <span class="math-inline">X</span>.
      </p>
      
      <div class="math-display">
        {'H_n(X) = \\frac{\\ker(\\partial_n)}{\\text{im}(\\partial_{n+1})}'}
      </div>
      
      <p>
        where <span class="math-inline">{'\\partial_n'}</span> is the boundary operator. For example, the Euler characteristic can be expressed as:
      </p>
      
      <div class="math-display">
        {'\\chi(X) = \\sum_{i=0}^{\\infty} (-1)^i \\text{rank}(H_i(X))'}
      </div>
      
      <h2>Applications</h2>
      
      <p>
        Algebraic topology has found applications in various fields including:
      </p>
      
      <ul>
        <li>Data analysis and topological data analysis (TDA)</li>
        <li>Robotics and motion planning</li>
        <li>Quantum field theory and string theory</li>
        <li>Computer graphics and image processing</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>
        Understanding algebraic topology opens doors to many advanced mathematical concepts 
        and provides powerful tools for solving problems in pure mathematics and applications.
      </p>
    </section>
  </LatexRenderer>
</article>

<style>
.blog-post {
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  line-height: 1.8;
  color: #1a1a1a;
}

.post-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #d4af37;
}

.post-header h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.post-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #666;
  font-style: italic;
}

.post-body h2 {
  font-size: 1.8rem;
  margin: 2.5rem 0 1rem 0;
  color: #1a1a1a;
}

.post-body h3 {
  font-size: 1.4rem;
  margin: 2rem 0 1rem 0;
  color: #333;
}

.post-body p {
  margin: 1rem 0;
}

.post-body ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.post-body li {
  margin: 0.5rem 0;
}

.definition,
.example {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #fffef9;
  border-left: 4px solid #d4af37;
  border-radius: 4px;
}

.definition strong,
.example strong {
  color: #d4af37;
  font-weight: 700;
}
</style>
