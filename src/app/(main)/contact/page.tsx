import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactBlock } from '@/components/ContactBlock';
import { MapClient } from '@/components/MapClient';
import { siteConfig } from '@/content/site';
import Link from 'next/link';

export const metadata = {
  title: 'ارتباط با ما',
  description:
    'راه‌های ارتباطی با نمایشگاه کابینت صفی؛ تلفن، آدرس، واتس‌اپ و موقعیت روی نقشه.',
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'ارتباط با ما', href: '/contact' },
        ]}
      />
      <SectionTitle
        eyebrow="ارتباط مستقیم"
        subtitle="با ما تماس بگیرید تا پروژه شما را بررسی کنیم."
        align="start"
      >
        نمایشگاه کابینت صفی در دسترس شماست
      </SectionTitle>
      <ContactBlock />
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="h-[420px] overflow-hidden rounded-3xl shadow-xl">
          <MapClient position={[32.661343, 51.680374]} title={siteConfig.address} />
        </div>
        <div className="space-y-4 rounded-3xl bg-white/70 p-8 text-right text-slate-600 shadow-xl">
          <h3 className="text-xl font-bold text-slate-900">در تماس باشید</h3>
          <p>
            برای رزرو وقت مشاوره حضوری یا درخواست بازدید در محل، از راه‌های زیر اقدام
            کنید:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              ایمیل:
              <Link
                href={`mailto:${siteConfig.email}`}
                className="ms-2 font-semibold text-slate-900"
              >
                {siteConfig.email}
              </Link>
            </li>
            <li>
              واتس‌اپ:
              <Link
                href={siteConfig.social.whatsapp}
                className="ms-2 font-semibold text-slate-900"
              >
                پیام در واتس‌اپ
              </Link>
            </li>
            <li>
              اینستاگرام:
              <Link
                href={siteConfig.social.instagram}
                className="ms-2 font-semibold text-slate-900"
              >
                safiwood.esf
              </Link>
            </li>
          </ul>
          <p className="text-sm text-slate-500">ساعات پاسخگویی: {siteConfig.hours}</p>
        </div>
      </div>
    </div>
  );
}
