import { Check, Star, Sparkles, ArrowRight, BookOpen, Target, Laptop } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { tarifPlans } from '@/data/concours';
import type { Page } from '@/components/Navbar';

interface TarifsProps {
  onNavigate: (page: Page) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Target, Laptop,
};

export default function Tarifs({ onNavigate }: TarifsProps) {
  return (
    <>
      <PageHeader title="Nos tarifs" subtitle="Des formules adaptées à chaque service et à chaque budget." />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/20 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tarifPlans.map((plan, i) => {
              const Icon = iconMap[plan.icon] ?? Target;
              const colorBg = plan.color === 'primary'
                ? 'from-primary-400 to-primary-500 text-ink-900 shadow-primary-400/30'
                : plan.color === 'secondary'
                ? 'from-secondary-400 to-secondary-500 text-white shadow-secondary-400/30'
                : 'from-accent-400 to-accent-500 text-white shadow-accent-400/30';

              return (
                <Reveal key={plan.id} delay={i * 120}>
                  <div className={`relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-ink-900 to-ink-800 text-white shadow-2xl lg:scale-105 border-2 border-primary-400/30'
                      : 'bg-white text-ink-800 shadow-card border border-primary-100 hover:shadow-golden hover:border-primary-300'
                  }`}>
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 text-ink-900 text-sm font-extrabold shadow-lg">
                          <Star className="w-4 h-4 fill-ink-900" />
                          Le plus choisi
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorBg} flex items-center justify-center mb-5 shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="mb-6">
                      <h3 className={`text-xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-ink-900'}`}>{plan.name}</h3>
                      <p className={`text-sm ${plan.highlight ? 'text-primary-300/70' : 'text-ink-400'}`}>{plan.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-end gap-1">
                        <span className={`text-3xl font-extrabold ${plan.highlight ? 'shimmer-text' : 'text-gradient-warm'}`}>{plan.price}</span>
                        <span className={`text-sm pb-1 ${plan.highlight ? 'text-primary-300/60' : 'text-ink-400'}`}>{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.highlight ? 'bg-primary-500/20' : 'bg-primary-100'
                          }`}>
                            <Check className={`w-3 h-3 ${plan.highlight ? 'text-primary-400' : 'text-primary-600'}`} />
                          </div>
                          <span className={`text-sm ${plan.highlight ? 'text-primary-200/90' : 'text-ink-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => onNavigate('rejoindre')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-ink-900 hover:from-primary-300 hover:to-primary-400 shadow-lg shadow-primary-400/30'
                          : 'bg-gradient-to-r from-primary-400 to-primary-500 text-ink-900 hover:from-primary-300 hover:to-primary-400 shadow-lg shadow-primary-400/25 hover:shadow-xl'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-100 to-secondary-100 border border-primary-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-accent-500" />
                <p className="text-sm text-ink-700">
                  <span className="font-bold">Paiement en tranche possible</span> – Annulez à tout moment, sans engagement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
