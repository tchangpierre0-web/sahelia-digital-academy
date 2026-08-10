import { BookOpen, Laptop, Target, ArrowRight, GraduationCap, Landmark, Calculator, Briefcase, HeartPulse, ShieldCheck } from 'lucide-react';
import { services, concoursItems } from '@/data/concours';
import Reveal from './Reveal';

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Laptop, Target,
};

const concoursIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark, Calculator, Briefcase, HeartPulse, GraduationCap, ShieldCheck,
};

interface ServicesOverviewProps {
  onNavigate: (page: 'home' | 'centre-formation' | 'prepa-concours' | 'repetition' | 'tarifs' | 'protocole' | 'rejoindre' | 'contact') => void;
}

export default function ServicesOverview({ onNavigate }: ServicesOverviewProps) {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary-50/60 rounded-full blur-[140px]" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[300px] bg-secondary-50/40 rounded-full blur-[120px]" />

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Services */}
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 border border-secondary-200 text-secondary-700 text-sm font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
            Nos services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900">
            Tout pour <span className="text-gradient-warm">réussir</span>
          </h2>
          <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
            <em className="font-serif">Trois services complémentaires pour un accompagnement complet de votre parcours éducatif.</em>
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon] ?? Target;
            const colorClass = service.color === 'primary'
              ? 'from-primary-400 to-primary-500 text-ink-900 shadow-primary-400/30'
              : service.color === 'secondary'
              ? 'from-secondary-400 to-secondary-500 text-white shadow-secondary-400/30'
              : 'from-accent-400 to-accent-500 text-white shadow-accent-400/30';

            return (
              <Reveal key={service.id} delay={i * 120}>
                <div className="card-warm p-8 h-full group hover:-translate-y-2 cursor-pointer" onClick={() => onNavigate(service.id as 'repetition' | 'prepa-concours' | 'centre-formation')}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-5 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-primary-200 text-ink-600">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate(service.id as 'repetition' | 'prepa-concours' | 'centre-formation'); }}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group/btn"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Concours prepared */}
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-bold mb-4">
            <Target className="w-4 h-4" />
            Concours préparés
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-ink-900">
            Une préparation pour <span className="text-gradient">chaque concours</span>
          </h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {concoursItems.map((item, i) => {
            const Icon = concoursIconMap[item.icon] ?? GraduationCap;
            return (
              <Reveal key={item.id} delay={(i % 3) * 80}>
                <div className="card p-6 group hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 transition-all duration-300 group-hover:from-primary-400 group-hover:to-primary-500 group-hover:text-ink-900 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink-900 mb-1 group-hover:text-primary-700 transition-colors">{item.name}</h4>
                      <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="text-center mt-10">
          <button onClick={() => onNavigate('prepa-concours')} className="btn-primary">
            Voir la prépa concours
            <ArrowRight className="w-5 h-5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
