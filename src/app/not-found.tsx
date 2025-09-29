import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="from-primary/10 to-secondary/10 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br p-8 text-right">
      <div className="max-w-xl space-y-6 rounded-3xl bg-white/80 p-10 text-slate-700 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900">صفحه مورد نظر پیدا نشد</h1>
        <p>
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است به‌روز شده باشد.
          می‌توانید به صفحه اصلی بازگردید یا نمونه‌کارهای ما را مشاهده کنید.
        </p>
        <div className="flex flex-wrap justify-end gap-4">
          <Link
            href="/"
            className="focus-outline bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold"
          >
            صفحه اصلی
          </Link>
          <Link
            href="/contact"
            className="focus-outline text-primary rounded-full bg-white px-6 py-3 text-sm font-semibold shadow"
          >
            ارتباط با ما
          </Link>
        </div>
      </div>
    </div>
  );
}
