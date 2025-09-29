'use client';

import { useState } from 'react';
import { IconCloudUpload, IconPlayerPlay } from '@tabler/icons-react';

interface Props {
  disabled?: boolean;
}

export function AIPreviewForm({ disabled }: Props) {
  const [style, setStyle] = useState('مدرن');
  const [image, setImage] = useState<File | null>(null);
  const envDisabled =
    process.env.NEXT_PUBLIC_AI_DISABLED === 'true' || process.env.AI_DISABLED === 'true';
  const isDisabled = disabled ?? envDisabled;

  return (
    <div className="space-y-6">
      <div className="border-primary/40 rounded-3xl border border-dashed bg-white/80 p-8 text-center text-slate-600">
        <IconCloudUpload size={42} className="text-primary mx-auto" />
        <p className="mt-3 text-sm">
          آپلود تصویر آشپزخانه برای ایجاد پیش‌نمایش هوشمند به‌زودی فعال می‌شود.
        </p>
        <label className="focus-outline mt-4 inline-flex cursor-pointer items-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700">
          انتخاب تصویر
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => setImage(event.target.files?.[0] ?? null)}
            disabled={isDisabled}
          />
        </label>
        {image ? <p className="mt-2 text-xs text-slate-500">{image.name}</p> : null}
      </div>
      <div className="space-y-3 text-right">
        <label className="text-sm font-semibold text-slate-800">سبک مورد علاقه</label>
        <select
          className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
          value={style}
          onChange={(event) => setStyle(event.target.value)}
          disabled={isDisabled}
        >
          <option value="مدرن">مدرن</option>
          <option value="کلاسیک">کلاسیک</option>
          <option value="بوهمیان">بوهمیان</option>
          <option value="مینیمال">مینیمال</option>
        </select>
      </div>
      <button
        type="button"
        disabled={isDisabled}
        className="focus-outline bg-primary text-primary-foreground inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold opacity-60"
      >
        <IconPlayerPlay size={18} />
        تولید پیش‌نمایش (به‌زودی)
      </button>
      {isDisabled ? (
        <p className="text-sm text-slate-500">
          اتصال به سرویس هوش مصنوعی در حال توسعه است. به‌محض فعال‌سازی، امکان بارگذاری
          تصویر و دریافت پیش‌نمایش هوشمند فراهم خواهد شد.
        </p>
      ) : (
        <p className="text-sm text-slate-500">
          پس از فعال‌سازی، پیش‌نمایش‌ها از طریق API اختصاصی با استفاده از متغیرهای محیطی
          `AI_API_URL` و `AI_API_KEY` تولید می‌شوند.
        </p>
      )}
    </div>
  );
}
