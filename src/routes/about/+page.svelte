<script>
// About page content goes here
</script>

<h1>About Me</h1>

<p class="intro">
  I am a grad student at the <a href="https://www.math.washington.edu/">Department of Mathematics</a> at the University of Washington, Seattle,
</p>

<h2>Research Interests</h2>
<div class="interests-grid">
  <div class="interest-item"></div>
  <div class="interest-item">Topological Data Analysis (TDA)</div>
  <div class="interest-item">Category Theory and Functorial Methods</div>
  <div class="interest-item">Computational Topology</div>
  <div class="interest-item">Applications to Machine Learning</div>
</div>

<h2>Education</h2>
<div class="education-section">
  <div class="degree">
    <div class="degree-title">Ph.D. in Mathematics</div>
    <div class="degree-year">Expected 2029</div>
    <div class="degree-institution">University of Washington, Seattle</div>
  </div>

  <div class="degree">
    <div class="degree-title">B.Sc. in Mathematics</div>
    <div class="degree-year">2022</div>
    <div class="degree-institution">Brown University</div>
  </div>
</div>

<h2>Publications</h2>
<div class="publications-section">
  <div class="publication">
    <div class="pub-number">1.</div>
    <div class="pub-content">
      Bhatia, D. (2025). "A Functorial Approach to Persistent Homology." 
      <em>Journal of Applied Topology</em>, 15(3), 245-278.
    </div>
  </div>
  <div class="publication">
    <div class="pub-number">2.</div>
    <div class="pub-content">
      Bhatia, D., & Collaborator, A. (2024). "Topological Features in Neural Network Representations." 
      <em>Proceedings of NeurIPS 2024</em>.
    </div>
  </div>
</div>

<style>
  :global(body) {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  }

  h1 {
    color: #1a1a1a;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: 700;
    padding-bottom: 0.3em;
    border-bottom: 3px solid #d4af37;
    display: inline-block;
  }
  
  h2 {
    color: #2a2a2a;
    font-size: 1.8em;
    margin-top: 2em;
    margin-bottom: 0.8em;
    font-weight: 600;
    padding-bottom: 0.2em;
    border-bottom: 2px solid #e0e0e0;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1em;
    color: #333;
  }
  
  .intro {
    font-size: 1.05em;
    margin-bottom: 2rem;
  }
  
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0.6rem;
    margin-bottom: 2rem;
  }
  
  .interest-item {
    background: #f9f9f9;
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    border-left: 3px solid #d4af37;
    color: #333;
    font-weight: 500;
    transition: all 0.2s;
  }
  
  .interest-item:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: translateX(3px);
  }
  
  .education-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .degree {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 10px;
    border-left: 4px solid #d4af37;
    position: relative;
  }
  
  .degree-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #2a2a2a;
    margin-bottom: 0.3em;
  }
  
  .degree-year {
    display: inline-block;
    background: #d4af37;
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  
  .degree-institution {
    color: #666;
    font-size: 1em;
    margin-bottom: 0.5em;
  }
  
  .degree-detail {
    color: #555;
    font-style: italic;
    line-height: 1.5;
  }
  
  .publications-section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .publication {
    display: flex;
    gap: 0.8rem;
    padding: 0.8rem;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #d4af37;
    transition: all 0.2s;
  }
  
  .publication:hover {
    background: rgba(212, 175, 55, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .pub-number {
    font-weight: 700;
    color: #d4af37;
    font-size: 1.2em;
    flex-shrink: 0;
  }
  
  .pub-content {
    color: #333;
    line-height: 1.6;
  }
  
  .pub-content em {
    color: #555;
  }
</style>
