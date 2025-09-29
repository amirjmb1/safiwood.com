'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface SectionTitleProps extends PropsWithChildren {
  eyebrow?: string;
  subtitle?: string;
  align?: 'start' | 'center';
}

export function SectionTitle({
  eyebrow,
  children,
  subtitle,
  align = 'start',
}: SectionTitleProps) {
  return (
    <div
      className={clsx('space-y-3', align === 'center' && 'mx-auto max-w-3xl text-center')}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="bg-primary/10 text-primary inline-flex items-center rounded-full px-4 py-1 text-sm font-medium"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-3xl leading-tight font-bold text-slate-900 sm:text-4xl"
      >
        {children}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
