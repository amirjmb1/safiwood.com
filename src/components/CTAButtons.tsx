import Link from 'next/link';
import type { ReactNode } from 'react';

interface CTAButton {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
}

interface CTAButtonsProps {
  buttons: CTAButton[];
}

const variantClasses: Record<NonNullable<CTAButton['variant']>, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-[#b45309]',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-[#0d9488]',
  ghost:
    'border border-slate-300/70 text-slate-800 hover:bg-white focus-visible:ring-[#b45309]',
};

export function CTAButtons({ buttons }: CTAButtonsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {buttons.map((button) => {
        const variant = button.variant ?? 'primary';
        return (
          <Link
            key={button.href}
            href={button.href}
            className={`focus-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition ${variantClasses[variant]}`}
          >
            {button.icon}
            <span>{button.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
