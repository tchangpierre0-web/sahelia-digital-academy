import { BookOpen, Users, Clock, Award, ArrowRight, CheckCircle2, Calendar, GraduationCap, Star } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import type { Page } from '@/components/Navbar';

interface RepetitionProps {
  onNavigate: (page: Page) => void;
}

const features = [
  { icon: Users, title: 'Suivi individuel', text: "Un enseignant dédié qui s'adapte au rythme de votre enfant." },
  { icon: BookOpen, title: 'Toutes matières', text: "Mathématiques, français, sciences, langues et plus encore." },
  { icon: GraduationCap, title: 'Tous niveaux', text: "Du primaire au lycée, nous couvrons tous les niveaux scolaires." },
  { icon: Clock, title: 'Horaires flexibles', text: "Sessions en semaine ou le week-end, selon votre disponibilité." },
];

const levels = [
  { name: 'Primaire', desc: 'CP au CM2', icon: '✏️' },
  { name: 'Collège', desc: '6ème à 3ème', icon: '📖' },
  { name: 'Lycée', desc: 'Seconde à Terminale', icon: '🎓' },
];

const howItWorks = [
  { step: '1', title: 'Diagnostic', text: "Évaluation initiale pour identifier les points à travailler." },
  { step: '2', title: 'Plan de soutien', text: "Élaboration d'un programme adapté au niveau et aux objectifs." },
  { step: '3', title: 'Sessions régulières', text: "Cours hebdomadaires avec exercices et suivi de progression." },
  { step: '4', title: 'Évaluations', text: "Bilans périodiques pour mesurer les progrès et ajuster." },
];

export default function Repetition({ onNavigate }: RepetitionProps) {
  return (
    <>
      <PageHeader
        title="Répétition"
        subtitle="Soutien scolaire personnalisé pour tous les niveaux, du primaire au lycée."
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
                    src="https://images.pexels.com/photos/6147069/pexels-photo-6147069.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Cours de répétition Sahelia"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-primary-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-ink-900">1-on-1</p>
                      <p className="text-xs text-ink-400 font-medium">Suivi personnalisé</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 border border-secondary-200 text-secondary-700 text-sm font-bold mb-5">
                <BookOpen className="w-4 h-4" />
                Soutien scolaire
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900 mb-5 leading-tight">
                Des cours de <span className="text-gradient-warm">répétition</span> qui font la différence
              </h2>
              <p className="text-lg text-ink-500 leading-relaxed mb-4">
                Nos enseignants s'adaptent au rythme de chaque élève pour combler les lacunes,
                renforcer les acquis et gagner en confiance.
              </p>
              <p className="text-ink-500 leading-relaxed mb-6">
                Que ce soit pour une matière spécifique, une préparation d'examen ou un soutien
                régulier, nous proposons un accompagnement sur-mesure adapté à chaque situation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => onNavigate('rejoindre')} className="btn-primary">
                  Nous rejoindre
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => onNavigate('tarifs')} className="btn-outline">
                  Voir les tarifs
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              Ce que nous <span className="text-gradient">offrons</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">Un accompagnement complet et bienveillant.</em>
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-warm p-7 h-full group hover:-translate-y-2 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mx-auto mb-4 shadow-lg shadow-primary-400/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
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

      {/* Levels */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-padding max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              Tous les <span className="text-gradient-warm">niveaux</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400">
              <em className="font-serif">Du primaire au lycée.</em>
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {levels.map((level, i) => (
              <Reveal key={level.name} delay={i * 100}>
                <div className="card p-8 text-center group hover:-translate-y-2">
                  <div className="text-4xl mb-3">{level.icon}</div>
                  <h3 className="text-xl font-extrabold text-ink-900 mb-1">{level.name}</h3>
                  <p className="text-sm text-ink-500">{level.desc}</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-dark opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />

        <div className="relative section-padding max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Comment ça <span className="shimmer-text">marche</span> ?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">Un processus simple et efficace en 4 étapes.</em>
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-dark p-7 h-full group hover:-translate-y-2 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 font-extrabold text-xl mx-auto mb-4 shadow-lg shadow-primary-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400} className="text-center mt-12">
            <button onClick={() => onNavigate('rejoindre')} className="btn-primary text-base">
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Testimonial-style banner */}
      <section className="py-16 bg-primary-50/40">
        <div className="section-padding max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center shadow-xl">
                <Star className="w-10 h-10 text-ink-900 fill-ink-900" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-serif italic text-ink-700 leading-relaxed">
                  "Grâce aux cours de répétition de Sahelia, ma fille a gagné en confiance et ses notes
                  ont considérablement amélioré. Un accompagnement vraiment personnalisé."
                </p>
                <p className="mt-3 font-bold text-ink-900">— Parent d'élève, 4ème</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
