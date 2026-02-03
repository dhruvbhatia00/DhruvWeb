# DhruvWeb - Personal Academic Website

A personal academic website built with SvelteKit, featuring a textbook-inspired design with sticky tabs, animated navigation, and LaTeX support.

## Quick Start

### Running the Development Server

```sh
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```sh
npm run build
npm run preview  # Preview the production build locally
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Navbar.svelte          # Main navigation with animated scribbles
│   │   ├── RecentNav.svelte       # Recent pages quick-access tabs
│   │   ├── PostHeader.svelte      # Reusable blog post header
│   │   ├── ProjectHeader.svelte   # Reusable project header
│   │   └── LatexRenderer.svelte   # Site-wide LaTeX/KaTeX wrapper
│   └── assets/                     # Images, icons, SVGs
├── routes/
│   ├── +layout.svelte             # Root layout (LatexRenderer wrapper)
│   ├── +page.svelte               # Home page
│   ├── about/+page.svelte         # About page
│   ├── teaching/+page.svelte      # Teaching page
│   ├── blog/
│   │   ├── +page.svelte           # Blog listing page
│   │   ├── +page.ts               # Dynamically loads all blog post metadata
│   │   └── blogposts/
│   │       ├── +layout.svelte     # Layout for all blog posts (back button, header)
│   │       └── [post-name]/
│   │           ├── +page.ts       # Post metadata
│   │           └── +page.svelte   # Post content
│   └── projects/
│       ├── +page.svelte           # Projects listing page
│       ├── +page.ts               # Dynamically loads all project metadata
│       └── projectpages/
│           ├── +layout.svelte     # Layout for all projects (back button, header)
│           └── [project-name]/
│               ├── +page.ts       # Project metadata
│               └── +page.svelte   # Project content
└── app.html                        # HTML template
```

## Creating New Content

### Adding a New Blog Post

1. Create a new folder: `src/routes/blog/blogposts/your-post-name/`

2. Create `+page.ts` with metadata:
```typescript
export function load() {
  const metadata = {
    title: 'Your Post Title',
    date: 'February 2, 2026',
    author: 'Your Name',
    excerpt: 'A brief description of your post (appears on blog listing page).'
  };
  
  return {
    metadata
  };
}
```

3. Create `+page.svelte` with content:
```svelte
<p>
  Your blog post content goes here. The layout automatically adds the header with title/date/author.
</p>

<h2>Section Heading</h2>

<p>
  You can use LaTeX inline: <span class="math-inline">\int_0^1 x^2 dx</span>
</p>

<p class="math-display">
  \sum_{i=1}^n i = \frac{n(n+1)}{2}
</p>

<!-- Special styled boxes -->
<div class="definition">
  <strong>Definition:</strong> Content here
</div>

<div class="example">
  <strong>Example:</strong> Content here
</div>
```

The post will automatically appear on `/blog` - no manual registration needed!

### Adding a New Project

1. Create a new folder: `src/routes/projects/projectpages/your-project-name/`

2. Create `+page.ts` with metadata:
```typescript
export function load() {
  const metadata = {
    title: 'Your Project Title',
    date: 'Winter 2026',
    status: 'In Progress',  // or 'Completed', 'Ongoing'
    tech: ['Python', 'JavaScript', 'etc.'],
    excerpt: 'A brief description of your project (appears on projects listing page).'
  };
  
  return {
    metadata
  };
}
```

3. Create `+page.svelte` with content:
```svelte
<h2>Overview</h2>
<p>
  Your project description. The layout automatically adds the header with title/date/status.
</p>

<h2>Technologies Used</h2>
<ul>
  <li>Tech 1</li>
  <li>Tech 2</li>
</ul>

<h2>Results</h2>
<p>
  Project outcomes and findings.
</p>
```

The project will automatically appear on `/projects` - no manual registration needed!

## Key Features

### LaTeX Support
- LaTeX is available site-wide via `LatexRenderer.svelte` in the root layout
- Use `<span class="math-inline">...</span>` for inline math
- Use `<p class="math-display">...</p>` for display math
- Powered by KaTeX

### Animated Navigation
- Active tab detection works for child routes (blog posts show "Blog" as active)
- Hand-drawn SVG scribble animation on active tabs
- Sticky navigation with textbook-style aesthetic

### Automatic Content Discovery
- Blog and project listing pages use `import.meta.glob` to automatically discover all posts/projects
- Metadata in each `+page.ts` is the single source of truth
- No need to manually register new content

### Styling
- Palatino Linotype font for body text (textbook aesthetic)
- Courier New for navigation elements
- Gold accent color: `#d4af37`
- Border-left highlights on cards and sections
- Minimal padding for compact layouts

## Recreating This Project

If cloning to a new machine:

```sh
git clone <your-repo-url>
cd DhruvWeb
npm install
npm run dev
```

### Dependencies
- SvelteKit (framework)
- TypeScript (type safety)
- Vite (build tool)
- KaTeX (LaTeX rendering)
- ESLint + Prettier (code quality)

### Configuration Files
- `svelte.config.js` - SvelteKit configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - Linting rules

## Deployment

This site is deployed to GitHub Pages with a custom domain at **dbhatia.xyz**.

### Automatic Deployment

The site automatically deploys when you push to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

### Manual Setup (One-Time)

If setting up for the first time or on a new repository:

1. **Enable GitHub Pages:**
   - Go to your repo: `https://github.com/dhruvbhatia00/DhruvWeb`
   - Settings → Pages
   - Source: "GitHub Actions"

2. **Configure DNS at your domain registrar:**
   
   Add these DNS records for **dbhatia.xyz**:
   
   ```
   Type    Name    Value                     TTL
   A       @       185.199.108.153           3600
   A       @       185.199.109.153           3600
   A       @       185.199.110.153           3600
   A       @       185.199.111.153           3600
   CNAME   www     dhruvbhatia00.github.io   3600
   ```

3. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

4. **Verify in GitHub:**
   - Go to Settings → Pages
   - Custom domain should show: `dbhatia.xyz`
   - Wait for the "DNS check successful" message
   - Enable "Enforce HTTPS"

### Testing Locally Before Deploy

```sh
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

### Troubleshooting

- **404 errors on refresh:** Ensure `static/.nojekyll` exists
- **DNS not resolving:** Check DNS propagation at `https://dnschecker.org`
- **Build fails:** Check the Actions tab in GitHub for error logs
- **Custom domain not working:** Verify `static/CNAME` contains `dbhatia.xyz`

