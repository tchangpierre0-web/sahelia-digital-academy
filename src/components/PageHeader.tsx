import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-soft">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={100}>
            <p className="mt-4 text-lg md:text-xl text-primary-200/80 max-w-2xl italic font-serif">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={200}>
            <div className="mt-6">{children}</div>
          </Reveal>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-ink-50 to-transparent" />
    </div>
  );
}
