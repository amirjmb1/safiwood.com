import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-gutter mt-12 space-y-16 pb-20">{children}</main>
      <Footer />
    </div>
  );
}
