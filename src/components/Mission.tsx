import { Target, Globe, Heart, Smartphone, Wifi, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { values } from '@/data/concours';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, Globe, Heart,
};

export default function Mission() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-100/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-secondary-100/30 rounded-full blur-[100px]" />

      <div className="relative section-padding max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Qui sommes-nous
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900">
            Notre engagement envers <span className="text-gradient-warm">votre réussite</span>
          </h2>
          <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
            <em className="font-serif">Sahelia n'est pas qu'un centre de formation. C'est un écosystème d'accompagnement éducatif.</em>
          </p>
        </Reveal>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {values.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Target;
            return (
              <Reveal key={item.id} delay={i * 120}>
                <div className="card-warm p-8 h-full group hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mb-5 shadow-lg shadow-primary-400/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-ink-900 mb-3">{item.title}</h3>
                  <p className="text-ink-500 leading-relaxed">{item.text}</p>
                  <div className="mt-5 h-1 w-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Digitalization highlight */}
        <Reveal delay={200}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 lg:p-14 shadow-2xl">
            <div className="absolute inset-0 bg-mesh-dark opacity-40" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-bold mb-5">
                  <Smartphone className="w-4 h-4" />
                  Digitalisation de l'éducation
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                  Notre objectif : <span className="shimmer-text">digitaliser l'éducation</span> au Cameroun
                </h3>
                <p className="text-primary-200/70 leading-relaxed mb-4">
                  Depuis <strong className="text-white">Garoua</strong>, Sahelia œuvre pour rendre l'éducation
                  accessible à tous grâce au numérique. Notre mission est de briser les barrières géographiques
                  et de proposer un apprentissage de qualité, où que vous soyez.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="chip bg-white/10 backdrop-blur-sm text-primary-200 border border-primary-400/20">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    Garoua, Cameroun
                  </span>
                  <span className="chip bg-white/10 backdrop-blur-sm text-secondary-200 border border-secondary-400/20">
                    <Wifi className="w-4 h-4 text-secondary-400" />
                    Apprentissage en ligne
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-dark p-6 text-center group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mx-auto mb-3 shadow-lg shadow-primary-400/20 transition-all duration-300 group-hover:scale-110">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <p className="text-white font-bold text-sm">100% Numérique</p>
                  <p className="text-ink-400 text-xs mt-1">Plateforme en ligne accessible 24/7</p>
                </div>
                <div className="card-dark p-6 text-center group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-secondary-400/20 transition-all duration-300 group-hover:scale-110">
                    <Globe className="w-6 h-6" />
                  </div>
                  <p className="text-white font-bold text-sm">Partout au Cameroun</p>
                  <p className="text-ink-400 text-xs mt-1">De Garoua à toutes les régions</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
