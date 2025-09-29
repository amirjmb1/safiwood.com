import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionTitle } from '@/components/SectionTitle';
import { GalleryView } from '@/components/GalleryView';
import manifest from '@/../public/gallery.json';
import type { GalleryItem } from '@/components/GalleryGrid';

export const metadata = {
  title: 'نمونه‌کارها',
  description:
    'گالری کابینت و دکوراسیون چوبی اجرا شده توسط نمایشگاه کابینت صفی در سبک‌های مختلف.',
};

const manifestItems = manifest as { items: GalleryItem[] };

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'نمونه‌کارها', href: '/gallery' },
        ]}
      />
      <SectionTitle
        eyebrow="گالری پروژه‌ها"
        subtitle="برای هر پروژه، طراحی سه‌بعدی اختصاصی و اجرای دقیق ارائه شده است."
        align="start"
      >
        نمونه‌کارهای نمایشگاه کابینت صفی
      </SectionTitle>
      <GalleryView initialItems={manifestItems.items} />
    </div>
  );
}
