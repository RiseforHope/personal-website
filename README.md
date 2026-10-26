# J. Bladimir García — academic website

A lightweight personal academic website built in **Astro 7** for **free GitHub Pages hosting**. The restrained academic design pairs a navy sans heading face with a serif reading face, generous whitespace, and a deliberately short homepage. Research and independent philosophical writing remain distinct.

## What is included

- A sparse responsive homepage with two selected-work links, plus Research, Publications, Writing, Teaching, About, and 404 pages.
- Accessible navigation, keyboard-focus states, a skip link, reduced-motion support, SEO metadata, Open Graph preview image, and RSS support.
- A Markdown publishing system for future essays. Drafts are not published.
- A fully static, zero-runtime-JavaScript public-facing design (Astro generates HTML and CSS during the build; no server, database, or server-side renderer is needed).
- A GitHub Actions deployment workflow that infers the correct base path for most GitHub Pages repository names.

## Run locally

Requirements: Node.js 22.23.4+ and npm.

```bash
npm install
npm run dev
```

Then open the local address printed by Astro (normally http://localhost:4321).

To make a production build:

```bash
npm run build
npm run preview
```

Check TypeScript/Astro code with `npm run check`.

## Publish for free with GitHub Pages

1. Create a **public** repository on GitHub. Two common choices are `YOUR_USERNAME.github.io` for a root site or `academic-website` for a project site.
2. Upload all files from this project to that repository, **including the hidden `.github` directory**. Commit to the `main` branch.
3. Under the repository **Settings → Pages**, choose **GitHub Actions** as the deployment source.
4. Open **Actions**. The `Publish academic website` workflow builds the site and publishes it whenever you push to `main`. You can also run it manually.
5. The result will normally be `https://YOUR_USERNAME.github.io/` for a user-site repository or `https://YOUR_USERNAME.github.io/REPOSITORY/` for a project repository.

The workflow automatically infers `site` and `base` for both standard URL patterns from `GITHUB_REPOSITORY`. All site links and assets use `withBase()` to work beneath a project prefix. **Do not hard-code leading-slash links** without `withBase()`.

### Custom domain

After you configure DNS and the custom domain in GitHub Pages, create two **GitHub repository variables** under Settings → Secrets and variables → Actions → Variables:

- `SITE_URL` = `https://www.yourdomain.com`
- `SITE_BASE` = `/`

Then redeploy. A custom-domain setup may also need the domain configured in Pages settings and the DNS records recommended by GitHub. This is optional; the default URL is free.

## Edit the site

- `src/data/site.ts`: public name, description, optional email, CV availability.
- `src/pages/index.astro`: homepage wording and section order.
- `src/pages/research.astro`: research descriptions and conceptual definitions.
- `src/pages/publications.astro`: verified bibliography.
- `src/pages/teaching.astro`, `about.astro`: academic and teaching biography.
- `src/styles/global.css`: all design tokens and responsive layout. The neutral monochrome palette and the type scale are controlled by the CSS custom properties at the top of this file.
- `src/fonts/`: self-hosted Merriweather Sans (variable, 300-800) for headings and Merriweather (variable, 300-900) for body text, each covering Latin and Latin-Extended, upright and italic, under the SIL Open Font License 1.1; see `src/fonts/OFL-Merriweather.txt` and `src/fonts/OFL-MerriweatherSans.txt`. The fonts live in `src/` rather than `public/` so that Vite fingerprints them and rewrites their URLs for whatever base path the site is deployed under. Referencing them as `/fonts/...` from `public/` would break on a project-page deployment.
- `src/components/`: shared navigation, footer, arrow links, illustration, and page introductions.
- `public/`: favicon, social media image, and any future real CV PDF.

### Typography

Headings are **Merriweather Sans SemiBold (600) in navy `#041E42`**; body text is **Merriweather, the serif, at 18px in `#333333`**. The two families were designed together and share proportions, so they set cleanly side by side while the change of family carries part of the hierarchy on its own.

The scale has seven tiers, documented in the custom properties at the top of `src/styles/global.css`. Tiers 1-3 are the sans headings at 600: display, section and subhead. Tiers 4-7 are the serif: an intentionally Light (300) lead paragraph that separates a page's opening sentence from both the heading above it and the body below; body text at 400; smaller meta text; and uppercase micro labels at 600 with wide tracking. The wordmark, the publication years and the small uppercase labels follow the heading face, so the sans reads as the voice of the site's structure and the serif as the voice of its prose.

Two colour tokens carry the palette: `--ink` for headings and `--ink-body` for body text. Secondary text keeps a neutral grey ramp (`--ink-muted`, `--ink-soft`, `--ink-faint`) so that leads, captions and labels still step back from the body; changing those three is how you would tint the whole page toward the navy.

Both families have a notably larger x-height than the Baskerville-style stack originally used here, so display sizes are smaller and letter-spacing looser than that earlier scale. Uppercase tracking is slightly tighter than a serif label scale would use, because sans capitals are wider to begin with.

### Add a new essay

Create a new Markdown file at `src/content/writing/your-essay-slug.md`:

```md
---
title: 'Essay title'
description: 'A brief description'
date: 2026-10-24
category: Essay
draft: false
---

Your original essay goes here.
```

The Writing index, dedicated permalink, and RSS feed automatically update. The homepage intentionally does not list every essay. A sample draft is included at `src/content/writing/example-draft.md` but it is **not published**.

## Editorial notes to review before launch

- **Academic status:** The doctorate is described as *doctoral work, dissertation defended in 2026*. Update only after the degree is formally conferred.
- **Bibliography:** Titles and permanent publication links have not been invented. The contributions page uses provisional descriptive records and explicitly says it needs verification.
- **Research:** The dissertation is not provided. The public descriptions of latentism and demographic anxiety use concise formulations already shared publicly. Review for intellectual precision and any embargo obligations.
- **Contact / CV:** No email, domain, institutional endorsement, CV, or portrait has been guessed. Add a public address in `src/data/site.ts` and a verified `public/cv.pdf` if desired.
- **Independent books:** *The Human Measure* is expressly presented as an independent work in development through Lumenwell Press, not as a publication already released or a byproduct of the dissertation.

## Notes about this initial handoff

This project was generated in an environment without access to the npm registry; dependencies could not be installed locally here. Therefore, no verified local Astro production build is claimed. The GitHub Actions workflow will install the dependencies and attempt a build upon upload. Commit a generated `package-lock.json` after your first successful `npm install` for reproducible subsequent deployments; you may then switch the workflow from `npm install` to `npm ci`.

All source is provided under the MIT license for your adaptation, except your original writing, academic research, and name, which remain your own.
