<script>
  // ...existing code...
  import GitHubIcon from '$lib/assets/github.svg?url';
  import MailIcon from '$lib/assets/mail.svg?url';
  import BookIcon from '$lib/assets/book.svg?url';
  import LinkedInIcon from '$lib/assets/linkedin.svg?url';
  import CoffeeStain from '$lib/assets/vecteezy_coffee-stain-real-cup-mess-mark_10161481.png';

</script>

<div class="cover-container">
  <div class="cover-content">
    <!-- Vignette overlay (entire cover) -->
    <div class="vignette"></div>
    
    <!-- Coffee stain -->
    <img src={CoffeeStain} alt="Coffee stain" class="coffee-stain" />
    
    <!-- Banner -->
    <div class="banner">
      <div class="banner-text">Graduate Student in Mathematics</div>
    </div>
    <!-- Yellow body -->
    <div class="body">
      <div class="body-content">
        <div class="author-section">
          <div class="author-info">
            <p class="affiliation">University of Washington<br>Seattle</p>
            <h1 class="author-name">Dhruv<br>Bhatia</h1>
            <p class="degree">3rd Year PhD Student in Mathematics</p>
          </div>
          <!-- <div class="author-photo">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="40" r="30" fill="#1a1a1a" opacity="0.7" />
              <path d="M 15 100 Q 15 65 60 65 Q 105 65 105 100" fill="#1a1a1a" opacity="0.7" />
            </svg>
          </div> -->
        </div>
      </div>
      <div class="footer">
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
      </div>
    </div>
  </div>
</div>

<style>
  .cover-container {
    /* --- CONFIGURATION VARIABLES --- */
    /* This scales the base font size based on the container width */
    --base-font: clamp(16.61px, 1.62vw, 24.92px);
    /* --base-font: clamp(12px, 2.2vw, 24px);  */
    --primary-yellow: #e6c200;
    --ink-black: #1a1a1a;
    --left-margin-pct: 4%; /* Adjust the vertical line position easily */

    display: flex;
    width: 39vw;
    min-width: 400px;
    max-width: 600px;
    aspect-ratio: 5 / 7;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0);
    position: relative;
    border-radius: 4px;
    
    /* Apply the base scaling here */
    font-size: var(--base-font);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .cover-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 6px;
    position: relative;
  }
  
  .vignette {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.08) 100%);
    border-radius: 6px;
    z-index: 10;
  }

  /* Shared vertical line logic */
  .banner::before, .body::before {
    content: '';
    position: absolute;
    left: var(--left-margin-pct);
    top: 0;
    bottom: 0;
    width: 2px;
    background:#555555; /* var(--ink-black); */
    opacity: 0.3;
  }

  .banner {
    background: rgb(253, 251, 236);
    padding: 3em 1em 3em calc(var(--left-margin-pct) + 0.5em);
    position: relative;
  }

  .banner-text {
    font-size: 2.2em; /* Scaled relative to --base-font */
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 0.9;
    color: var(--primary-yellow);
    transform: scaleY(1.8);
    transform-origin: left;
    /* text-transform: uppercase; */
  }

  .body {
    flex: 1;
    background: var(--primary-yellow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5em 1.5em 0.5em 0.5em;
    position: relative;
  }
  
  .vignette {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.12) 100%);
    border-radius: 4px;
  }

  .author-info {
    margin-left: calc(var(--left-margin-pct) + 2%);
    margin-top: 1em;
  }

  .author-name {
    font-size: 2.4em;
    font-weight: 800;
    margin: 0.2em 0 0.5em 0;
    color: var(--ink-black);
    line-height: 1.05;
  }

  .affiliation {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--ink-black);
    margin: 0;
    line-height: 1.2;
  }

  .degree {
    font-size: 0.75em;
    color: var(--ink-black);
    margin: 1em 0 0 0;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .author-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .author-photo {
    width: 5em;
    height: 5em;
    opacity: 0.8;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
  }

  .links {
    display: flex;
    gap: 1.2em;
  }

  .links a img {
    width: 1.4em;
    height: 1.4em;
    transition: opacity 0.2s ease;
  }

  .links a:hover {
    opacity: 0.5;
  }
  
  .coffee-stain {
    position: absolute;
    bottom: -5%;
    left: 3%;
    width: 45%;
    height: auto;
    opacity: 0.6;
    z-index: 5;
    pointer-events: none;
  }
</style>
