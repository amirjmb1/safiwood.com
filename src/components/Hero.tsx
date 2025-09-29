'use client';

import { motion } from 'framer-motion';
import { CTAButtons } from './CTAButtons';
import { siteConfig } from '@/content/site';
import { IconArrowLeft, IconFileDescription } from '@tabler/icons-react';

export function Hero() {
  return (
    <section className="from-primary/90 via-primary to-secondary/90 relative overflow-hidden rounded-3xl bg-gradient-to-br p-12 text-white shadow-2xl">
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M345 73c48 20 103 65 120 124s-3 133-33 189-73 92-122 99-101-16-158-43-120-61-140-118 9-134 50-184 93-77 156-96 119-11 169 29z"
            fill="url(#grad)"
          />
        </svg>
      </motion.div>
      <div className="relative z-10 space-y-6 text-right">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm"
        >
          <span className="font-semibold">نمایشگاه کابینت صفی</span>
          <span className="opacity-80">اجرای تخصصی کابینت و دکوراسیون چوبی</span>
        </motion.span>
        <motion.h1
          className="max-w-3xl text-4xl leading-tight font-black sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          طراحی و اجرای کابینت مدرن و کلاسیک با متریال درجه یک و گارانتی کیفیت
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-white/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-end gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CTAButtons
            buttons={[
              {
                href: '/gallery',
                label: 'مشاهده نمونه‌کارها',
                variant: 'secondary',
                icon: <IconArrowLeft size={20} />,
              },
              {
                href: '/quote',
                label: 'دریافت پیش‌فاکتور',
                variant: 'primary',
                icon: <IconFileDescription size={20} />,
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
