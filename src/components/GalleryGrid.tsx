'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const [activeCategory, setActiveCategory] = useState<string>('همه');
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === 'همه'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        {['همه', ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={clsx(
              'focus-outline rounded-full border px-5 py-2 text-sm font-medium transition',
              activeCategory === category
                ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                : 'border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300',
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group mb-5 overflow-hidden rounded-3xl bg-white shadow-xl"
          >
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="focus-outline block w-full text-right"
              aria-label={`مشاهده نمونه ${item.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-2 px-5 py-4">
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="glass relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white text-right"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="focus-outline absolute top-4 left-4 z-10 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white"
              >
                بستن
              </button>
              <div className="relative h-80 w-full sm:h-[28rem]">
                <Image
                  src={selected.imageUrl}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-bold text-slate-900">{selected.title}</h3>
                <p className="text-slate-600">{selected.description}</p>
                <span className="bg-primary/10 text-primary inline-flex items-center rounded-full px-4 py-1 text-sm font-medium">
                  {selected.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
