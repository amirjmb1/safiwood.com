import Script from 'next/script';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://safiwood.com'}${item.href}`,
    })),
  };

  return (
    <div className="space-y-4">
      <nav aria-label="مسیر پیمایش" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span className="text-slate-400">/</span> : null}
              <Link href={item.href} className="hover:text-primary transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <Script
        id={`breadcrumb-${items.map((i) => i.href).join('-')}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
