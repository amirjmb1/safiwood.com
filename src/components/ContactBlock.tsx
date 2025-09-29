'use client';

import { motion } from 'framer-motion';
import { IconPhoneCall, IconMapPin, IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';

export function ContactBlock() {
  return (
    <motion.div
      className="glass rounded-3xl p-8 text-right shadow-xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-full">
            <IconPhoneCall size={26} />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">تماس فوری</h3>
          <div className="space-y-1 text-slate-600">
            <p>
              موبایل:
              <Link
                href={`tel:${siteConfig.phones.mobile}`}
                className="ms-2 font-semibold text-slate-900"
              >
                {siteConfig.phones.mobile}
              </Link>
            </p>
            <p>
              فروشگاه:
              <Link
                href={`tel:${siteConfig.phones.store}`}
                className="ms-2 font-semibold text-slate-900"
              >
                {siteConfig.phones.store}
              </Link>
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-full">
            <IconMapPin size={26} />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">آدرس نمایشگاه</h3>
          <p className="text-slate-600">{siteConfig.address}</p>
        </div>
        <div className="space-y-3">
          <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-full">
            <IconBrandWhatsapp size={26} />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">گفتگوی آنلاین</h3>
          <Link
            href={siteConfig.social.whatsapp}
            className="focus-outline bg-secondary text-secondary-foreground inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold"
          >
            شروع گفتگو در واتس‌اپ
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
