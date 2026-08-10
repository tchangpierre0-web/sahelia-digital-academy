import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

interface CtaBannerProps {
  onNavigate: (page: 'home' | 'centre-formation' | 'prepa-concours' | 'repetition' | 'tarifs' | 'protocole' | 'rejoindre' | 'contact') => void;
}

export default function CtaBanner({ onNavigate }: CtaBannerProps) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="section-padding max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 md:p-14 lg:p-20 text-center shadow-2xl">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
            <div className="absolute inset-0 bg-mesh-dark opacity-50" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                Rejoignez l'aventure Sahelia
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-shadow-glow">
                Prêt à transformer <br />votre parcours ?
              </h2>
              <p className="mt-5 text-lg text-primary-200/70 max-w-2xl mx-auto">
                <em className="font-serif">
                  Rejoignez nos programmes et bénéficiez d'un accompagnement d'exception.
                </em>
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate('rejoindre')}
                  className="btn-primary text-base"
                >
                  Nous rejoindre
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
