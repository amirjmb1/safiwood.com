'use client';

import { motion } from 'framer-motion';
import { IconShieldCheck, IconTool, IconCube, IconGauge } from '@tabler/icons-react';

const features = [
  {
    title: 'گارانتی کیفیت و خدمات پس از فروش',
    description:
      'تمامی پروژه‌ها با ضمانت مکتوب و تیم پشتیبانی حرفه‌ای همراه هستند تا آرامش خاطر شما حفظ شود.',
    icon: IconShieldCheck,
  },
  {
    title: 'طراحی اختصاصی بر اساس سبک زندگی شما',
    description:
      'از نقشه اولیه تا اجرای نهایی، طراحان ما هر جزئیات را با توجه به سلیقه و نیاز شما شخصی‌سازی می‌کنند.',
    icon: IconCube,
  },
  {
    title: 'مدیریت پروژه سریع و شفاف',
    description:
      'برنامه زمانی دقیق، گزارش پیشرفت و انتخاب متریال درجه‌یک باعث کاهش زمان تحویل و هزینه‌های اضافی می‌شود.',
    icon: IconGauge,
  },
  {
    title: 'تیم اجرایی متخصص و کارگاه مجهز',
    description:
      'استادکاران مجرب ما با تجهیزات به‌روز، اجرای دقیق و تمیز را در محل پروژه تضمین می‌کنند.',
    icon: IconTool,
  },
];

export function FeatureCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass flex h-full flex-col justify-between rounded-2xl p-6 text-right shadow-xl"
          >
            <div className="space-y-4">
              <span className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-full">
                <Icon size={26} />
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
