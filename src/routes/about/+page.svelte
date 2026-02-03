<script>
    import GitHubIcon from '$lib/assets/github.svg?url';
    import MailIcon from '$lib/assets/mail.svg?url';
    import BookIcon from '$lib/assets/book.svg?url';
    import LinkedInIcon from '$lib/assets/linkedin.svg?url';
    import ProfilePhoto from '$lib/assets/dhruv.JPG?url';
</script>

<h1>About Me</h1>

<div class="intro-section">
  <div class="intro-text">
    <p class="intro">
      I am a grad student at the <a href="https://www.math.washington.edu/">Department of Mathematics</a> at the University of Washington, Seattle, advised by Prof. <a href="https://sites.math.washington.edu//~jarod/">Jarod Alper</a>. I came into grad school thinking I'd be an algebraic geometer, but my interests have since shifted towards metaprogramming and proof automation in the interactive proof assistant Lean 4. I am currently working on implementing an efficient way to compute resultants in Lean. I also love to teach! 
    </p>

    <p>
      You can often find me at <b>my office</b>: Padelford (PDL) C-414
    </p>
  </div>
  
  <div class="profile-photo">
    <img src={ProfilePhoto} alt="Dhruv Bhatia" />
  </div>
</div>
    
<div class="links">
    <a href="https://github.com/dhruvbhatia00" target="_blank" title="GitHub">
    <img src={GitHubIcon} alt="GitHub" />
    </a>
    <a href="mailto:dbhatia1@uw.edu" title="Email">
    <img src={MailIcon} alt="Email" />
    </a>
    <a href="/cv.pdf" target="_blank" title="CV">
    <img src={BookIcon} alt="CV" />
    </a>
    <a href="https://www.linkedin.com/in/dhruv-bhatia-159863180/" target="_blank" title="LinkedIn">
    <img src={LinkedInIcon} alt="LinkedIn" />
    </a>
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
      Bhatia, D. (2025). <a href="#" class="pub-link">"Sample Publication 1"</a> 
      <em>Journal of Sample Publications</em>, 15(3), 245-278.
    </div>
  </div>
  <div class="publication">
    <div class="pub-number">2.</div>
    <div class="pub-content">
      Bhatia, D., & Collaborator, A. (2024). <a href="#" class="pub-link">"Sample Publication 2"</a> 
      <em>Proceedings of Sample Conference 2024</em>.
    </div>
  </div>
</div>

<h2>Awards</h2>
<div class="awards-section">
  <div class="award">
    <div class="award-content">
      <strong>McKibben-Merner Endowed Graduate Fellowship</strong> (2024)<br>
      Department of Mathematics, University of Washington
    </div>
  </div>
  <div class="award">
    <div class="award-content">
      <strong>Albert A. Bennet Prize for Exceptional Accomplishment in the Mathematics Concentration</strong> (2019)<br>
      Department of Mathematics, Brown University
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
  
  .intro-section {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
  
  .intro-text {
    flex: 1;
  }
  
  .profile-photo {
    flex-shrink: 0;
    width: 250px;
  }
  
  .profile-photo img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 3px solid #d4af37;
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
    transition: all 0.2s;
  }

  .degree:hover {
    background: rgba(212, 175, 55, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
  
  .publications-section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .publication {
    display: flex;
    gap: 0.8rem;
    padding: 0.6rem;
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
  
  .pub-link {
    color: #2a2a2a;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
  }
  
  .pub-link:hover {
    color: #d4af37;
    border-bottom: 1px solid #d4af37;
  }
  
  .awards-section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .award {
    padding: 0.5rem;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #d4af37;
    transition: all 0.2s;
  }
  
  .award:hover {
    background: rgba(212, 175, 55, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .award-content {
    color: #333;
    line-height: 1.6;
  }
  
  .award-content strong {
    color: #2a2a2a;
    font-size: 1.05em;
  }
</style>
