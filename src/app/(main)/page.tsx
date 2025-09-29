import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactBlock } from '@/components/ContactBlock';
import { CTAButtons } from '@/components/CTAButtons';
import { siteConfig } from '@/content/site';
import { fetchGalleryItems } from '@/lib/gallery';
import Link from 'next/link';
import Image from 'next/image';
import { IconPhoneCall, IconPlayerPlay, IconPhoto } from '@tabler/icons-react';

export default async function HomePage() {
  const galleryItems = await fetchGalleryItems();
  const previewItems = galleryItems.slice(0, 6);

  return (
    <div className="space-y-16">
      <Hero />

      <section className="glass rounded-3xl p-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <IconPhoneCall size={18} className="text-primary" />
            <span>
              برای مشاوره فوری با ما تماس بگیرید:
              <Link
                href={`tel:${siteConfig.phones.mobile}`}
                className="ms-2 font-semibold text-slate-900"
              >
                {siteConfig.phones.mobile}
              </Link>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1">
              تحویل به‌موقع
            </span>
            <span className="bg-secondary/10 text-secondary rounded-full px-4 py-1">
              طراحی اختصاصی
            </span>
            <span className="rounded-full bg-slate-200/70 px-4 py-1 text-slate-600">
              گارانتی کیفیت
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="چرا صفی؟"
          subtitle="ترکیب طراحی دقیق، اجرای استادانه و نظارت مرحله‌به‌مرحله."
          align="center"
        >
          تجربه‌ای متفاوت از کابینت و دکوراسیون چوبی در اصفهان
        </SectionTitle>
        <FeatureCards />
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="نمونه‌کارهای منتخب"
          subtitle="برای مشاهده گالری کامل، وارد صفحه نمونه‌کارها شوید."
          align="center"
        >
          کیفیت را از نزدیک ببینید
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {previewItems.map((item) => (
            <div key={item.id} className="glass overflow-hidden rounded-3xl shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-2 px-5 py-4 text-right">
                <span className="text-primary text-xs font-semibold">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <CTAButtons
            buttons={[
              {
                href: '/gallery',
                label: 'مشاهده گالری کامل',
                variant: 'secondary',
                icon: <IconPhoto size={20} />,
              },
            ]}
          />
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl bg-white/70 p-10 shadow-xl md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 text-right">
          <SectionTitle eyebrow="همراه شما از ایده تا اجرا">
            فرآیند همکاری با نمایشگاه کابینت صفی
          </SectionTitle>
          <ol className="space-y-4 text-slate-600">
            <li>
              <strong className="text-slate-900">۱. مشاوره و بازدید رایگان:</strong> ثبت
              درخواست پیش‌فاکتور و تحلیل دقیق نیازها و ابعاد فضا.
            </li>
            <li>
              <strong className="text-slate-900">
                ۲. طراحی سه‌بعدی و انتخاب متریال:
              </strong>{' '}
              ارائه کانسپت‌های متنوع، نمونه رنگ و متریال با امکان اصلاح نامحدود.
            </li>
            <li>
              <strong className="text-slate-900">۳. تولید و نصب حرفه‌ای:</strong> ساخت در
              کارگاه مجهز، کنترل کیفیت و نصب تمیز در کوتاه‌ترین زمان.
            </li>
          </ol>
          <CTAButtons
            buttons={[
              {
                href: '/quote',
                label: 'شروع فرآیند سفارش',
                icon: <IconPlayerPlay size={20} />,
              },
              {
                href: '/contact',
                label: 'در تماس باشید',
                variant: 'ghost',
              },
            ]}
          />
        </div>
        <div className="glass flex flex-col justify-between rounded-3xl p-8 text-right shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900">تعهد ما به شما</h3>
          <p className="mt-3 text-slate-600">
            هر پروژه با قرارداد شفاف، برنامه زمان‌بندی مشخص و گزارش پیشرفت منظم اجرا
            می‌شود. تیم ما تا استقرار کامل و آموزش نگهداری همراه شماست.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>• استفاده از متریال برندهای معتبر داخلی و خارجی</p>
            <p>• کنترل کیفیت مرحله‌ای در کارگاه اختصاصی</p>
            <p>• نصب تمیز و تحویل نهایی با ضمانت کتبی</p>
          </div>
        </div>
      </section>

      <ContactBlock />
    </div>
  );
}
