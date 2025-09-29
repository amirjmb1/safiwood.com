import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/content/site';
import Script from 'next/script';

const vazirmatn = Vazirmatn({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const siteUrl = 'https://safiwood.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | طراحی و اجرای کابینت مدرن و کلاسیک در اصفهان`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'کابینت اصفهان',
    'نمایشگاه کابینت صفی',
    'طراحی کابینت مدرن',
    'کابینت کلاسیک',
    'طراحی داخلی',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | طراحی و اجرای کابینت حرفه‌ای`,
    description: siteConfig.description,
    url: siteUrl,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | طراحی کابینت مدرن و کلاسیک`,
    description: siteConfig.description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: siteConfig.name, url: siteUrl }],
  category: 'HomeAndGarden',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/og-image.svg`,
  description: siteConfig.description,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phones.mobile,
    contactType: 'customer service',
    areaServed: 'IR',
    availableLanguage: ['fa'],
  },
  sameAs: [siteConfig.social.instagram],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.name,
  image: `${siteUrl}/og-image.svg`,
  telephone: siteConfig.phones.mobile,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: 'اصفهان',
    addressCountry: 'IR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.661343,
    longitude: 51.680374,
  },
  priceRange: 'متناسب با پروژه',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cdnBase = process.env.NEXT_PUBLIC_CDN_BASE;
  return (
    <html lang="fa" dir="rtl">
      <head>
        {cdnBase ? <link rel="preconnect" href={cdnBase} /> : null}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${vazirmatn.variable} font-[family-name:var(--font-vazirmatn)] antialiased`}
      >
        {children}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
