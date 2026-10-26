import { getCollection } from 'astro:content';
import { withBase } from '../utils/paths';
import type { APIRoute } from 'astro';
const xmlEscape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
export const GET: APIRoute = async ({ site }) => {
  const root = site ?? new URL('https://example.org');
  const articles = (await getCollection('writing', ({ data }) => !data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const channel = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Writing — J. Bladimir García</title><link>${xmlEscape(new URL(withBase('/writing/'), root).href)}</link><description>Independent philosophical writing by J. Bladimir García</description><language>en</language>${articles.map((entry) => `<item><title>${xmlEscape(entry.data.title)}</title><link>${xmlEscape(new URL(withBase(`/writing/${entry.id}/`), root).href)}</link><guid>${xmlEscape(new URL(withBase(`/writing/${entry.id}/`), root).href)}</guid><pubDate>${entry.data.date.toUTCString()}</pubDate><description>${xmlEscape(entry.data.description)}</description></item>`).join('')}</channel></rss>`;
  return new Response(channel, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
