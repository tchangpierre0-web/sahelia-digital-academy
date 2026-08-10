import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/concours';
import Reveal from './Reveal';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-shadow-glow">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 100} className="text-center group">
              <div className="inline-block transition-transform duration-300 group-hover:scale-110">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-primary-300/70 text-sm md:text-base font-semibold uppercase tracking-wide">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
