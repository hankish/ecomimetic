# Ecomimetic Design

Website and manual for [ecomimetic.design](https://ecomimetic.design) — the hub for knowledge and documentation related to Ecomimetic Design.

## Stack

- **[Eleventy v3](https://www.11ty.dev/)** — static site generator
- **[Vite](https://vitejs.dev/)** — asset bundling via `@11ty/eleventy-plugin-vite`
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — templating
- **[Web Awesome](https://backerkit.com/c/projects/web-awesome)** (`@awesome.me/webawesome`) — UI components
- **[eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)** — hierarchical nav / breadcrumbs
- Deployed to **GitHub Pages** via GitHub Actions

## Development

```bash
npm install
npm start        # dev server at http://localhost:8080
npm run build    # production build → _site/
```

## Project Structure

```
src/
├── _data/           # Global data (site.json)
├── _includes/
│   ├── layouts/     # base.njk, manual-page.njk
│   └── partials/    # site-header.njk, site-footer.njk, manual-toc.njk
├── assets/
│   ├── css/main.css
│   └── js/main.js
├── manual/          # Manual sub-site (sidebar layout, hierarchical nav)
├── about/
├── artifacts/
├── participate/
└── index.md
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys to GitHub Pages.

> **Note:** In your repository settings, Pages source must be set to **GitHub Actions** (not "Deploy from a branch") or the build will fail.
