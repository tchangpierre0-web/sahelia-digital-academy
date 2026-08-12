import { BookOpen, Laptop, Target, Users, Award, Clock, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { services, stats } from '@/data/concours';
import type { Page } from '@/components/Navbar';

interface CentreFormationProps {
  onNavigate: (page: Page) => void;
}

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Laptop, Target,
};

const whyChoose = [
  { icon: Users, title: 'Profs expérimentés', text: 'Une équipe de 5+ enseignants passionnés et qualifiés.' },
  { icon: Award, title: '92% de réussite', text: 'Un taux de réussite exceptionnel aux concours.' },
  { icon: Clock, title: 'Flexible', text: 'Cours en présentiel et en ligne, à votre rythme.' },
  { icon: Heart, title: 'Suivi personnalisé', text: 'Un accompagnement sur-mesure pour chaque élève.' },
];

const approach = [
  { icon: Lightbulb, title: 'Pédagogie active', text: "Méthodes interactives et participatives pour maintenir l'engagement." },
  { icon: TrendingUp, title: 'Progression mesurée', text: "Évaluations régulières et suivi détaillé de chaque élève." },
  { icon: Sparkles, title: 'Environnement inspirant', text: "Des salles modernes et équipées pour apprendre dans les meilleures conditions." },
];

export default function CentreFormation({ onNavigate }: CentreFormationProps) {
  return (
    <>
      <PageHeader
        title="Centre de formation"
        subtitle="Sahelia, une organisation dédiée à l'accompagnement éducatif sous toutes ses formes."
      />

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-secondary-300/30 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Centre de formation Sahelia Digital Academy"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl shadow-xl p-5 animate-float">
                  <p className="text-3xl font-extrabold text-ink-900">5+</p>
                  <p className="text-xs font-bold text-ink-800">ans d'expérience</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-bold mb-5">
                <Sparkles className="w-4 h-4 text-accent-500" />
                À propos de Sahelia
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900 mb-5 leading-tight">
                Bien plus qu'une simple <span className="text-gradient-warm">prépa concours</span>
              </h2>
              <p className="text-lg text-ink-500 leading-relaxed mb-4">
                Sahelia est une organisation qui propose une gamme complète de services éducatifs :
                <strong className="text-ink-700"> répétition</strong>,
                <strong className="text-ink-700"> cours en ligne</strong> et
                <strong className="text-ink-700"> préparation aux concours</strong>.
              </p>
              <p className="text-ink-500 leading-relaxed mb-6">
                Notre mission est d'accompagner chaque élève, du primaire au supérieur, avec un suivi
                personnalisé et des méthodes pédagogiques éprouvées. Nous croyons que chaque élève mérite
                une éducation de qualité, adaptée à son rythme et à ses ambitions.
              </p>
              <button onClick={() => onNavigate('rejoindre')} className="btn-primary">
                Nous rejoindre
                <ArrowRight className="w-5 h-5" />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              Nos <span className="text-gradient-warm">services</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">Trois piliers pour un accompagnement complet.</em>
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = serviceIconMap[service.icon] ?? Target;
              const colorClass = service.color === 'primary'
                ? 'from-primary-400 to-primary-500 text-ink-900'
                : service.color === 'secondary'
                ? 'from-secondary-400 to-secondary-500 text-white'
                : 'from-accent-400 to-accent-500 text-white';
              return (
                <Reveal key={service.id} delay={i * 120}>
                  <div className="card-warm p-8 h-full group hover:-translate-y-2 cursor-pointer" onClick={() => onNavigate(service.id as Page)}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-5 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-extrabold text-ink-900 mb-2">{service.name}</h3>
                    <p className="text-ink-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                    <div className="space-y-2 mb-5">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-ink-600">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); onNavigate(service.id as Page); }}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group/btn"
                    >
                      Découvrir
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              Pourquoi <span className="text-gradient">nous choisir</span> ?
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card p-7 text-center group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 mx-auto mb-4 transition-all duration-300 group-hover:from-primary-400 group-hover:to-primary-500 group-hover:text-ink-900 group-hover:scale-110">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-dark opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />

        <div className="relative section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Notre <span className="shimmer-text">approche</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">Une pédagogie pensée pour chaque élève.</em>
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="card-dark p-8 h-full group hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mb-5 shadow-lg shadow-primary-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-ink-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats inline */}
          <Reveal delay={300} className="mt-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-ink-700/50">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold shimmer-text">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs text-ink-400 font-semibold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
