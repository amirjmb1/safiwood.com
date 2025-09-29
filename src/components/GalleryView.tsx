'use client';

import useSWR from 'swr';
import type { GalleryItem } from './GalleryGrid';
import { GalleryGrid } from './GalleryGrid';

interface GalleryViewProps {
  initialItems: GalleryItem[];
}

const fetcher = async (url: string): Promise<{ items: GalleryItem[] } | null> => {
  const response = await fetch(url);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error('Failed to load gallery');
  }
  return (await response.json()) as { items: GalleryItem[] };
};

export function GalleryView({ initialItems }: GalleryViewProps) {
  const { data } = useSWR<{ items: GalleryItem[] } | null>('/api/gallery', fetcher, {
    fallbackData: { items: initialItems },
    revalidateOnFocus: false,
  });

  const items = data?.items && data.items.length > 0 ? data.items : initialItems;

  return <GalleryGrid items={items} />;
}
