'use client';

import {
  cloneElement,
  isValidElement,
  useId,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const quoteSchema = z.object({
  fullName: z.string().min(3, 'لطفاً نام و نام خانوادگی را وارد کنید.'),
  phone: z
    .string()
    .min(8, 'شماره تماس معتبر وارد کنید.')
    .regex(/^[0-9+\-\s]+$/, 'شماره تماس تنها می‌تواند شامل اعداد باشد.'),
  area: z
    .number()
    .refine((value) => !Number.isNaN(value), 'متراژ باید عدد باشد.')
    .positive('متراژ معتبر نیست.')
    .min(5, 'متراژ وارد شده خیلی کم است.'),
  style: z.string().min(2, 'سبک مورد نظر را انتخاب کنید.'),
  budget: z.string().min(2, 'محدوده بودجه را مشخص کنید.'),
  materials: z.string().optional(),
  notes: z.string().optional(),
  referenceImage: z.string().url('لینک تصویر معتبر نیست.').optional().or(z.literal('')),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

const steps = [
  { title: 'مشخصات فردی', fields: ['fullName', 'phone'] as const },
  { title: 'جزئیات پروژه', fields: ['area', 'style', 'budget', 'materials'] as const },
  { title: 'توضیحات تکمیلی', fields: ['notes', 'referenceImage'] as const },
];

export function QuoteForm() {
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      area: 20,
      style: 'مدرن',
      budget: '۵۰۰ تا ۸۰۰ میلیون تومان',
      materials: '',
      notes: '',
      referenceImage: '',
    },
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNext = async () => {
    const step = steps[currentStep];
    const valid = await form.trigger(step.fields);
    if (valid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('loading');
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? process.env.FORM_ENDPOINT;
    if (!endpoint) {
      setStatus('error');
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('در ارسال اطلاعات مشکلی پیش آمد.');
      }
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form
      className="space-y-8"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      aria-live="polite"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">{steps[currentStep].title}</h3>
        <span className="text-sm text-slate-500">
          مرحله {currentStep + 1} از {steps.length}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {currentStep === 0 && (
          <>
            <Field
              name="fullName"
              label="نام و نام خانوادگی"
              error={form.formState.errors.fullName?.message}
            >
              <input
                type="text"
                {...form.register('fullName')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
                placeholder="مثال: علیرضا صفی"
              />
            </Field>
            <Field
              name="phone"
              label="شماره تماس"
              error={form.formState.errors.phone?.message}
            >
              <input
                type="tel"
                {...form.register('phone')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
                placeholder="مثال: 0913xxxxxxx"
              />
            </Field>
          </>
        )}
        {currentStep === 1 && (
          <>
            <Field
              name="area"
              label="متراژ فضا (متر مربع)"
              error={form.formState.errors.area?.message}
            >
              <input
                type="number"
                step="1"
                {...form.register('area', { valueAsNumber: true })}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
              />
            </Field>
            <Field
              name="style"
              label="سبک مورد نظر"
              error={form.formState.errors.style?.message}
            >
              <select
                {...form.register('style')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
              >
                <option value="مدرن">مدرن</option>
                <option value="کلاسیک">کلاسیک</option>
                <option value="لوکس">لوکس</option>
                <option value="مینیمال">مینیمال</option>
              </select>
            </Field>
            <Field
              name="budget"
              label="بودجه تقریبی"
              error={form.formState.errors.budget?.message}
            >
              <select
                {...form.register('budget')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
              >
                <option value="۳۰۰ تا ۵۰۰ میلیون تومان">۳۰۰ تا ۵۰۰ میلیون تومان</option>
                <option value="۵۰۰ تا ۸۰۰ میلیون تومان">۵۰۰ تا ۸۰۰ میلیون تومان</option>
                <option value="بیش از ۸۰۰ میلیون تومان">بیش از ۸۰۰ میلیون تومان</option>
              </select>
            </Field>
            <Field
              name="materials"
              label="متریال دلخواه"
              error={form.formState.errors.materials?.message}
            >
              <input
                type="text"
                {...form.register('materials')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
                placeholder="مثال: چوب گردو، های‌گلاس، سنگ کوارتز"
              />
            </Field>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Field
              name="notes"
              label="توضیحات تکمیلی"
              error={form.formState.errors.notes?.message}
              span={2}
            >
              <textarea
                {...form.register('notes')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
                rows={4}
                placeholder="نیازهای ویژه، رنگ دلخواه یا زمان تحویل"
              />
            </Field>
            <Field
              name="referenceImage"
              label="لینک تصویر یا طرح الهام‌بخش"
              error={form.formState.errors.referenceImage?.message}
              span={2}
            >
              <input
                type="url"
                {...form.register('referenceImage')}
                className="focus-outline w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right text-sm"
                placeholder="https://..."
              />
            </Field>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-slate-500">
          {status === 'success'
            ? 'درخواست شما با موفقیت ارسال شد. همکاران ما در سریع‌ترین زمان تماس می‌گیرند.'
            : status === 'error'
              ? 'در ارسال اطلاعات خطایی رخ داد. لطفاً مجدداً تلاش کنید.'
              : 'اطلاعات شما کاملاً محرمانه نزد ما محفوظ است.'}
        </div>
        <div className="flex gap-3">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="focus-outline rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-600"
            >
              مرحله قبل
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="focus-outline bg-secondary text-secondary-foreground rounded-full px-6 py-3 text-sm font-semibold"
            >
              مرحله بعد
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === 'loading'}
              className="focus-outline bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-semibold disabled:opacity-60"
            >
              {status === 'loading' ? 'در حال ارسال...' : 'ارسال درخواست'}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  error,
  children,
  span,
}: {
  name: string;
  label: string;
  error?: string;
  children: ReactElement;
  span?: number;
}) {
  const generatedId = useId();
  let childId = `${name}-${generatedId}`;
  let childWithProps: ReactElement | ReactNode = children;

  if (isValidElement(children)) {
    const existingId = (children.props as { id?: string }).id;
    childId = existingId ?? childId;
    childWithProps = cloneElement(children, {
      id: childId,
      'aria-invalid': error ? 'true' : undefined,
      'aria-describedby': error ? `${childId}-error` : undefined,
    } as Record<string, unknown>);
  }

  return (
    <div className={span === 2 ? 'md:col-span-2' : undefined}>
      <label
        htmlFor={childId}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>
      {childWithProps}
      {error ? (
        <p id={`${childId}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
