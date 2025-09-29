'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/content/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      <motion.nav
        className="mx-auto mt-4 w-[calc(100%-1.5rem)] rounded-full border border-white/30 bg-white/70 px-6 py-4 shadow-xl backdrop-blur-2xl transition md:max-w-6xl"
        animate={{ paddingBlock: isScrolled ? '0.6rem' : '1rem' }}
      >
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex flex-col text-right">
            <span className="text-lg font-bold text-slate-900">{siteConfig.name}</span>
            <span className="text-xs text-slate-500">هنر چوب، امضای کیفیت</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-outline hover:text-primary text-sm font-semibold transition ${
                  pathname === item.href ? 'text-primary' : 'text-slate-700'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="tel:09131012292"
              className="focus-outline bg-primary text-primary-foreground inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
            >
              تماس سریع
            </Link>
          </div>
          <button
            type="button"
            className="focus-outline inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="منو"
            aria-expanded={open}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 flex flex-col gap-3 md:hidden"
            >
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-outline rounded-full px-4 py-2 text-sm font-semibold transition ${
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/70 text-slate-700'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="tel:09131012292"
                className="focus-outline bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow"
              >
                تماس سریع
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
