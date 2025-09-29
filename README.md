# نمایشگاه کابینت صفی – وب‌سایت رسمی

وب‌سایت رسمی نمایشگاه کابینت صفی با استفاده از Next.js 14، TypeScript و TailwindCSS توسعه داده شده است. این پروژه شامل صفحات کامل شرکتی، گالری نمونه‌کارها، فرم دریافت پیش‌فاکتور، اسکلت اتصال به پیش‌نمایش مجازی مبتنی بر هوش مصنوعی، و پیاده‌سازی کامل تست‌های واحد و E2E است.

## فهرست مطالب

- [پیش‌نیازها](#پیشنیازها)
- [راه‌اندازی محلی](#راهاندازی-محلی)
- [متغیرهای محیطی](#متغیرهای-محیطی)
- [ساختار پروژه](#ساختار-پروژه)
- [اجرای تست‌ها و آنالیز کد](#اجرای-تستها-و-آنالیز-کد)
- [کیفیت کد و استانداردها](#کیفیت-کد-و-استانداردها)
- [فرآیند CI/CD](#فرآیند-cicd)
- [دیپلوی روی ابر آروان](#دیپلوی-روی-ابر-آروان)
- [مدیریت گالری تصاویر](#مدیریت-گالری-تصاویر)
- [آنالیتیکس و توسعه آتی](#آنالیتیکس-و-توسعه-آتی)

## پیش‌نیازها

- **Node.js 20.18.0** (مطابق فایل `.nvmrc`)
- **pnpm** (پروژه با pnpm مدیریت می‌شود)
- دسترسی به سرویس فرم (Formspree یا سرویس مشابه)
- حساب فعال در Object Storage ابر آروان برای میزبانی فایل‌های گالری و خروجی استاتیک

## راه‌اندازی محلی

```bash
pnpm install
pnpm prepare  # نصب هوک‌های Husky
pnpm dev
```

سپس در مرورگر به آدرس `http://localhost:3000` مراجعه کنید.

## متغیرهای محیطی

تمام متغیرها در فایل `.env.example` فهرست شده‌اند. برای توسعه یک فایل `.env.local` بسازید و مقداردهی کنید.

```env
NEXT_PUBLIC_SITE_NAME=نمایشگاه کابینت صفی
NEXT_PUBLIC_CDN_BASE=https://cdn.safiwood.com
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXXXXX
NEXT_PUBLIC_AI_DISABLED=true

FORM_ENDPOINT=https://formspree.io/f/XXXXXXXX
AI_API_URL=https://api.example.com/generate
AI_API_KEY=REPLACE_ME
AI_DISABLED=true

AOS_ENDPOINT=https://s3.ir-thr-at1.arvanstorage.com
AOS_BUCKET=safiwood-gallery
AOS_ACCESS_KEY=REPLACE_ME
AOS_SECRET_KEY=REPLACE_ME
```

> نکته: در زمان اجرای تست‌های E2E مقدار `NEXT_PUBLIC_FORM_ENDPOINT` به صورت خودکار به `/api/mock` تنظیم می‌شود تا پاسخ ساختگی برگردد.

## ساختار پروژه

- `src/app` – صفحات App Router شامل بخش‌های اصلی سایت، صفحات سیستمی (Privacy/Terms) و API ها (`/api/gallery`, `/api/mock`).
- `src/components` – اجزای رابط کاربری مثل Header، Footer، گالری، فرم‌ها و نقشه.
- `src/content` – داده‌های ثابت سایت (اطلاعات تماس، ناوبری و ...).
- `public/gallery.json` – مانیفست اولیه تصاویر گالری در صورت عدم اتصال به AOS.
- `public/og-image.svg` – تصویر OpenGraph سفارشی.
- `src/components/forms/QuoteForm.tsx` – فرم چندمرحله‌ای دریافت پیش‌فاکتور با Zod و React Hook Form.
- `src/components/forms/AIPreviewForm.tsx` – اسکلت رابط هوش مصنوعی (غیرفعال تا زمان اتصال API).
- `tailwind.config.ts` – تنظیمات Tailwind با پشتیبانی RTL و رنگ‌بندی برند.

## اجرای تست‌ها و آنالیز کد

```bash
pnpm lint        # اجرای ESLint
pnpm format      # بررسی فرمت توسط Prettier
pnpm test        # تست‌های واحد با Vitest + Testing Library
pnpm test:ui     # اجرای Vitest در حالت UI
pnpm e2e         # تست‌های Playwright (نیازمند اجرای سرور dev)
pnpm typecheck   # بررسی TypeScript
```

## کیفیت کد و استانداردها

- **ESLint** بر پایه `next/core-web-vitals` با پشتیبانی از تست‌های Vitest.
- **Prettier** به همراه پلاگین `prettier-plugin-tailwindcss` برای مرتب‌سازی کلاس‌ها.
- **Husky + lint-staged** برای جلوگیری از ورود کد ناسازگار به مخزن.
- **Commitlint** برای رعایت استاندارد Conventional Commits.

## فرآیند CI/CD

دو گردش‌کار در GitHub Actions پیشنهاد شده است:

1. **ci.yml** (باید در `.github/workflows` ایجاد شود)
   - نصب وابستگی‌ها با pnpm
   - اجرای `pnpm lint`, `pnpm test`, `pnpm e2e`, `pnpm build`

2. **deploy.yml**
   - اجرای `pnpm build` و `next export` (خروجی در `out/`)
   - همگام‌سازی `out/` با باکت AOS از طریق AWS CLI
   - (اختیاری) پاک‌سازی کش CDN

> برای استفاده از اسکریپت‌های بالا باید متغیرهای `AOS_ENDPOINT`, `AOS_BUCKET`, `AOS_ACCESS_KEY`, `AOS_SECRET_KEY` به عنوان Secrets مخزن تنظیم شوند.

## دیپلوی روی ابر آروان

1. **تنظیم DNS**
   - در رجیسترار دامنه، NS ها را روی `l.ns.arvancdn.ir` و `x.ns.arvancdn.ir` قرار دهید.
   - در پنل ابر آروان یک سایت CDN با دامنه اصلی `safiwood.com` و دامنه `cdn.safiwood.com` بسازید.

2. **Object Storage**
   - باکت `AOS_BUCKET` را ایجاد کنید و فولدر `site/` برای خروجی استاتیک در نظر بگیرید.
   - در بخش Origin، نوع `Object Storage` را انتخاب و به باکت اشاره کنید.

3. **ساخت و انتشار**
   - فرمان `pnpm build && pnpm next export` (یا اسکریپت CI آماده) را اجرا کنید.
   - خروجی `out/` را با فرمان زیر همگام کنید:

     ```bash
     aws configure set aws_access_key_id "$AOS_ACCESS_KEY"
     aws configure set aws_secret_access_key "$AOS_SECRET_KEY"
     aws s3 sync ./out s3://$AOS_BUCKET/site --endpoint-url $AOS_ENDPOINT --acl public-read --delete
     ```

4. **بهینه‌سازی CDN**
   - SSL/TLS خودکار، فشرده‌سازی Brotli/Gzip و کش طولانی‌مدت فایل‌های استاتیک را فعال کنید.
   - در صورت نیاز از API پاک‌سازی کش ابر آروان برای انتشار سریع نسخه جدید استفاده کنید.

## مدیریت گالری تصاویر

- **روش پیشنهادی:** تصاویر واقعی را در باکت Object Storage در مسیر `gallery/` بارگذاری کنید. در این حالت با تنظیم متغیرهای `AOS_*`، API `/api/gallery` به صورت خودکار لیست فایل‌ها را بازمی‌گرداند و گالری به‌روزرسانی می‌شود.
- **حالت آفلاین:** اگر متغیرهای `AOS_*` تنظیم نشوند، صفحه گالری از فایل `public/gallery.json` استفاده می‌کند. برای افزودن مورد جدید، فقط رکورد جدیدی به این فایل اضافه کنید.
- **نکته مهم:** به‌دلیل محدودیت پذیرش فایل‌های دودویی در فرآیند کدنویسی خودکار، هرگونه تصویر واقعی را پس از مرج نهایی و به‌صورت دستی (خارج از Codex) به مخزن اضافه کنید.
- **CDN:** مطمئن شوید دامنه CDN (`NEXT_PUBLIC_CDN_BASE`) به فولدر `gallery/` اشاره می‌کند تا تصاویر با سرعت بالا بارگذاری شوند.

## آنالیتیکس و توسعه آتی

- می‌توانید شناسه سرویس‌های سبک مثل Umami را با افزودن متغیر `NEXT_PUBLIC_UMAMI_WEBSITE_ID` و اسکریپت سفارشی در Layout فعال کنید.
- برای فعال‌سازی واقعی پیش‌نمایش هوش مصنوعی، API های ذکرشده (`AI_API_URL`, `AI_API_KEY`) را مقداردهی کنید و دکمه «تولید پیش‌نمایش» را از حالت غیرفعال خارج کنید.

---

© تمامی حقوق برای نمایشگاه کابینت صفی محفوظ است.
