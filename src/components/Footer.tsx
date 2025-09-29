import Link from 'next/link';
import { siteConfig } from '@/content/site';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/40 bg-white/60 py-10 text-right">
      <div className="container-gutter grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-slate-900">{siteConfig.name}</h4>
          <p className="text-sm text-slate-600">{siteConfig.shortDescription}</p>
          <div className="space-y-1 text-sm text-slate-600">
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
        <div>
          <h5 className="mb-3 text-lg font-semibold text-slate-900">مسیرهای سریع</h5>
          <ul className="space-y-2 text-sm text-slate-600">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-primary transition" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-3 text-lg font-semibold text-slate-900">اطلاعات تماس</h5>
          <p className="text-sm text-slate-600">{siteConfig.address}</p>
          <div className="mt-2 space-y-1 text-sm text-slate-600">
            <p>
              اینستاگرام:
              <Link
                href={siteConfig.social.instagram}
                className="ms-2 font-semibold text-slate-900"
              >
                safiwood.esf
              </Link>
            </p>
            <p>
              ایمیل:
              <Link
                href={`mailto:${siteConfig.email}`}
                className="ms-2 font-semibold text-slate-900"
              >
                {siteConfig.email}
              </Link>
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h5 className="text-lg font-semibold text-slate-900">ساعات کاری</h5>
          <p className="text-sm text-slate-600">{siteConfig.hours}</p>
          <Link
            href="/quote"
            className="focus-outline bg-secondary text-secondary-foreground inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold shadow"
          >
            ثبت درخواست مشاوره
          </Link>
        </div>
      </div>
      <div className="mt-10 border-t border-white/40 pt-6 text-sm text-slate-500">
        <div className="container-gutter flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>
            © {new Date().getFullYear()} تمامی حقوق برای نمایشگاه کابینت صفی محفوظ است.
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-primary" href="/privacy">
              حریم خصوصی
            </Link>
            <Link className="hover:text-primary" href="/terms">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
