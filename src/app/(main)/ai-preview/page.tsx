import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionTitle } from '@/components/SectionTitle';
import { AIPreviewForm } from '@/components/forms/AIPreviewForm';
import Link from 'next/link';

export const metadata = {
  title: 'پیش‌نمایش مجازی (به‌زودی)',
  description:
    'قابلیت پیش‌نمایش مجازی با هوش مصنوعی به‌زودی در نمایشگاه کابینت صفی فعال خواهد شد. در حال حاضر می‌توانید روند اتصال را بررسی کنید.',
};

export default function AIPreviewPage() {
  const isDisabled = process.env.AI_DISABLED !== 'false';
  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'پیش‌نمایش مجازی', href: '/ai-preview' },
        ]}
      />
      <SectionTitle
        eyebrow="هوش مصنوعی"
        subtitle="قابلیت پیش‌نمایش تصاویر کابینت با مدل‌های مولد در حال توسعه است."
        align="start"
      >
        پیش‌نمایش مجازی کابینت (به‌زودی)
      </SectionTitle>
      <div className="grid gap-10 rounded-3xl bg-white/70 p-10 shadow-xl md:grid-cols-[1.4fr_1fr]">
        <AIPreviewForm disabled={isDisabled} />
        <div className="bg-primary/5 space-y-4 rounded-3xl p-6 text-right text-slate-600">
          <h3 className="text-xl font-bold text-slate-900">در حال آماده‌سازی</h3>
          <p>
            در نسخه بعدی، کاربران قادر خواهند بود تصویر فضای فعلی خود را بارگذاری کرده و
            با انتخاب سبک دلخواه، پیش‌نمایش کابینت پیشنهادی را مشاهده کنند.
          </p>
          <div className="border-primary/50 rounded-2xl border border-dashed bg-white/80 p-4 text-sm text-slate-600">
            <p>اتصال آینده با APIهای مورد نظر:</p>
            <ul className="mt-2 space-y-1 pe-5">
              <li>AI_API_URL</li>
              <li>AI_API_KEY</li>
              <li>AI_DISABLED</li>
            </ul>
          </div>
          <p className="text-sm">
            برای همکاری یا تست نسخه اولیه، از طریق صفحه{' '}
            <Link className="text-primary" href="/contact">
              ارتباط با ما
            </Link>{' '}
            پیام ارسال کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
