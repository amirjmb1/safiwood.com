import manifest from '../../public/gallery.json';
import type { GalleryItem } from '@/components/GalleryGrid';

interface Manifest {
  items: GalleryItem[];
}

const typedManifest = manifest as Manifest;

export async function fetchGalleryItems(): Promise<GalleryItem[]> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    try {
      const response = await fetch(`${siteUrl}/api/gallery`, {
        next: { revalidate: 120 },
      });
      if (response.ok) {
        const data = (await response.json()) as Manifest;
        if (Array.isArray(data.items)) {
          return data.items;
        }
      }
    } catch (error) {
      console.warn('Gallery API unavailable, falling back to manifest.', error);
    }
  }
  return typedManifest.items;
}

export type { GalleryItem };
