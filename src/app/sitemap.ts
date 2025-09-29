import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://safiwood.com';
  const pages = [
    '',
    '/about',
    '/gallery',
    '/quote',
    '/ai-preview',
    '/contact',
    '/privacy',
    '/terms',
  ];
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
