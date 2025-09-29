import type { NextConfig } from 'next';

const cdnBase = process.env.NEXT_PUBLIC_CDN_BASE;
type RemotePatterns = NonNullable<NextConfig['images']>['remotePatterns'];
const remotePatterns: RemotePatterns = [
  {
    protocol: 'https',
    hostname: 'picsum.photos',
    port: '',
    pathname: '/**',
  },
];

if (cdnBase) {
  try {
    const url = new URL(cdnBase);
    remotePatterns.push({
      protocol: (url.protocol.replace(':', '') || 'https') as 'http' | 'https',
      hostname: url.hostname,
      port: url.port,
      pathname: `${url.pathname.replace(/\/$/, '')}/**`,
    });
  } catch (error) {
    console.warn('Invalid NEXT_PUBLIC_CDN_BASE provided', error);
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@tabler/icons-react', 'framer-motion'],
  },
  output: 'export',
};

export default nextConfig;
