'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="to-primary/10 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-rose-100 p-8 text-right">
      <div className="max-w-xl space-y-6 rounded-3xl bg-white/90 p-10 text-slate-700 shadow-xl">
        <h1 className="text-3xl font-bold text-slate-900">مشکلی پیش آمده است</h1>
        <p>لطفاً دوباره تلاش کنید یا از طریق صفحه تماس با ما در میان بگذارید.</p>
        <div className="flex flex-wrap justify-end gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="focus-outline bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold"
          >
            تلاش دوباره
          </button>
          <Link
            href="/"
            className="focus-outline text-primary rounded-full bg-white px-6 py-3 text-sm font-semibold shadow"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </div>
  );
}
