import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionTitle } from '@/components/SectionTitle';
import { CTAButtons } from '@/components/CTAButtons';
import { IconCheck, IconSparkles } from '@tabler/icons-react';

export const metadata = {
  title: 'درباره ما',
  description:
    'آشنایی با نمایشگاه کابینت صفی؛ تیم متخصص طراحی و اجرای کابینت در اصفهان با بیش از ۱۵ سال تجربه.',
};

const values = [
  {
    title: 'تعهد به اصالت و دوام',
    description:
      'تمامی متریال‌ها از برندهای معتبر انتخاب می‌شوند و فرآیند تولید در کارگاه اختصاصی زیر نظر مهندسان کنترل کیفیت انجام می‌شود.',
  },
  {
    title: 'شفافیت در ارتباط با مشتری',
    description:
      'از مرحله طراحی تا تحویل، گزارش‌های دقیق زمان‌بندی و هزینه ارائه می‌شود و هر تصمیمی با همراهی شما گرفته می‌شود.',
  },
  {
    title: 'نوآوری در طراحی فضاهای چوبی',
    description:
      'استفاده از نرم‌افزارهای روز دنیا و رصد ترندهای جهانی برای ارائه طرح‌هایی متمایز و کاربردی.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'درباره ما', href: '/about' },
        ]}
      />
      <SectionTitle
        eyebrow="درباره ما"
        subtitle="۱۵ سال تجربه، هزاران متر کابینت موفق و مشتریان وفادار."
        align="start"
      >
        نمایشگاه کابینت صفی؛ روایت ما از هنر چوب
      </SectionTitle>
      <div className="grid gap-10 rounded-3xl bg-white/70 p-10 shadow-xl md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-right text-slate-600">
          <p>
            نمایشگاه کابینت صفی در سال ۱۳۸۸ با هدف ارائه راهکارهای حرفه‌ای در حوزه طراحی و
            اجرای کابینت آشپزخانه، کلوزت روم و دکوراسیون چوبی راه‌اندازی شد. امروز با تکیه
            بر تیمی چابک از طراحان، مهندسان و استادکاران، پروژه‌های لوکس مسکونی و فضاهای
            تجاری معتبر را اجرا می‌کنیم.
          </p>
          <p>
            ما معتقدیم هر فضا داستانی منحصر به فرد دارد. از این رو، فرآیند همکاری را با
            جلسات شناخت سلیقه و نیازهای شما آغاز می‌کنیم، سپس طرح‌های سه‌بعدی اختصاصی و
            نمونه متریال ارائه می‌دهیم تا تصمیم نهایی آگاهانه باشد.
          </p>
          <div className="border-primary/40 bg-primary/5 rounded-2xl border border-dashed p-6 text-right text-slate-700">
            <p className="text-primary font-semibold">
              ۵۰۰+ پروژه کابینت و دکوراسیون موفق در اصفهان و شهرهای اطراف
            </p>
            <p className="mt-2 text-sm">
              همکاری با معماران برجسته و پیمانکاران پروژه‌های لوکس، نقطه تمایز ماست.
            </p>
          </div>
        </div>
        <div className="from-primary/90 to-secondary/80 space-y-5 rounded-3xl bg-gradient-to-br p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold">چرا مشتریان ما را انتخاب می‌کنند؟</h3>
          <ul className="space-y-3 text-sm leading-7">
            <li className="flex items-start gap-3">
              <IconCheck
                size={20}
                className="text-secondary-foreground mt-1 flex-shrink-0"
              />
              <span>مشاوره تخصصی، بازدید و اندازه‌گیری رایگان در اصفهان</span>
            </li>
            <li className="flex items-start gap-3">
              <IconCheck
                size={20}
                className="text-secondary-foreground mt-1 flex-shrink-0"
              />
              <span>ارائه ضمانت‌نامه کتبی و خدمات پس از فروش سریع</span>
            </li>
            <li className="flex items-start gap-3">
              <IconCheck
                size={20}
                className="text-secondary-foreground mt-1 flex-shrink-0"
              />
              <span>تولید در کارگاه اختصاصی با استانداردهای روز</span>
            </li>
          </ul>
          <CTAButtons
            buttons={[
              { href: '/quote', label: 'درخواست پیش‌فاکتور', variant: 'secondary' },
              { href: '/gallery', label: 'مشاهده گالری', variant: 'ghost' },
            ]}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="glass h-full rounded-3xl p-6 text-right shadow-xl"
          >
            <IconSparkles size={28} className="text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{value.title}</h3>
            <p className="mt-2 text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl bg-white/70 p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-slate-900">
          همکاری با معماران و سازندگان
        </h3>
        <p className="mt-3 text-slate-600">
          تیم صفی آماده است تا به عنوان شریک اجرایی کنار دفاتر معماری، شرکت‌های ساختمانی و
          سرمایه‌گذاران پروژه‌های لوکس قرار گیرد. ما قراردادهای مشارکتی و برنامه تولید
          اختصاصی برای پروژه‌های حجمی ارائه می‌دهیم.
        </p>
      </div>
    </div>
  );
}
