import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionTitle } from '@/components/SectionTitle';
import { QuoteForm } from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'دریافت پیش‌فاکتور',
  description:
    'فرم آنلاین دریافت پیش‌فاکتور از نمایشگاه کابینت صفی. اطلاعات پروژه خود را ارسال کنید تا کارشناسان ما با شما تماس بگیرند.',
};

export default function QuotePage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'دریافت پیش‌فاکتور', href: '/quote' },
        ]}
      />
      <SectionTitle eyebrow="پیش‌فاکتور آنلاین" align="start">
        چند دقیقه تا دریافت مشاوره تخصصی
      </SectionTitle>
      <div className="grid gap-10 rounded-3xl bg-white/70 p-10 shadow-xl md:grid-cols-[1.3fr_1fr]">
        <QuoteForm />
        <div className="bg-primary/5 space-y-4 rounded-3xl p-6 text-right text-slate-600">
          <h3 className="text-xl font-bold text-slate-900">چگونه کار می‌کنیم؟</h3>
          <ol className="list-decimal space-y-3 pe-5">
            <li>بررسی اطلاعات ارسالی و تماس کارشناسان در کمتر از ۲۴ ساعت کاری.</li>
            <li>برگزاری جلسه مشاوره حضوری یا آنلاین و ارائه طرح سه‌بعدی اولیه.</li>
            <li>اعلام زمان‌بندی دقیق، قرارداد شفاف و شروع تولید در کارگاه اختصاصی.</li>
          </ol>
          <p className="text-sm">همراه شما هستیم تا کابینت رؤیایی‌تان را بسازید.</p>
        </div>
      </div>
    </div>
  );
}
