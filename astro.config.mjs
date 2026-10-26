import { defineConfig } from 'astro/config';

// CI automatically detects whether this is a user/organization page or a project page.
// Optional GitHub repository variables SITE_URL and SITE_BASE override these defaults.
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const repository = (process.env.GITHUB_REPOSITORY ?? '').split('/')[1] ?? '';
const isUserPage = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const inferredBase = process.env.GITHUB_ACTIONS && repository && !isUserPage
  ? `/${repository}`
  : '/';
const inferredSite = owner ? `https://${owner.toLowerCase()}.github.io` : 'https://example.org';

// On Vercel, the production URL is provided at build time (no protocol).
const vercelSite = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : '';

export default defineConfig({
  site: process.env.SITE_URL || vercelSite || inferredSite,
  base: process.env.SITE_BASE || inferredBase,
  trailingSlash: 'always',
  output: 'static',
});
