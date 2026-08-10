import { ClipboardList, Users, BookOpen, Award, Calendar, MessageSquareText, Clock, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import type { Page } from '@/components/Navbar';

interface ProtocoleProps {
  onNavigate: (page: Page) => void;
}

const steps = [
  { icon: ClipboardList, title: '1. Inscription', description: "Remplissez le formulaire « Nous rejoindre » avec vos informations et le service souhaité." },
  { icon: MessageSquareText, title: '2. Entretien', description: "Nous vous contactons pour un entretien d'évaluation afin de mieux comprendre vos besoins." },
  { icon: Users, title: '3. Placement', description: "Vous êtes placé dans un groupe ou en suivi individuel adapté à votre niveau et à vos objectifs." },
  { icon: BookOpen, title: '4. Formation', description: "Débutez vos cours avec nos professeurs expérimentés et bénéficiez d'un suivi régulier." },
  { icon: Calendar, title: '5. Évaluations', description: "Des évaluations périodiques mesurent votre progression et identifient les points à améliorer." },
  { icon: Award, title: '6. Réussite', description: "Préparez-vous sereinement à votre concours ou examen avec confiance et des annales corrigées." },
];

export default function Protocole({ onNavigate }: ProtocoleProps) {
  return (
    <>
      <PageHeader title="Protocole d'accompagnement" subtitle="Découvrez notre méthode pas à pas pour vous accompagner vers la réussite." />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/20 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          {/* Intro */}
          <Reveal className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-lg text-ink-600 leading-relaxed">
              <em className="font-serif">
                Notre protocole d'accompagnement est conçu pour maximiser vos chances de réussite.
                De l'inscription à la passation du concours, chaque étape est structurée pour vous offrir
                un parcours clair et efficace.
              </em>
            </p>
          </Reveal>

          {/* Steps timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-secondary-300 hidden lg:block rounded-full" />

            <div className="space-y-6 lg:space-y-0">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <div className={`relative lg:flex items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    <div className="lg:w-1/2">
                      <div className="card-warm p-7 group hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 shadow-lg shadow-primary-400/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                            <step.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-extrabold text-ink-900 mb-1.5">{step.title}</h3>
                            <p className="text-ink-500 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center w-0">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-primary-500 shadow-md z-10" />
                    </div>

                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal delay={300} className="text-center mt-14">
            <button onClick={() => onNavigate('rejoindre')} className="btn-primary text-base">
              Nous rejoindre
              <ArrowRight className="w-5 h-5" />
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
