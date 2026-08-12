import { useState } from 'react';
import { ClipboardCheck, BookOpen, Dumbbell, Trophy, MapPin, Phone, Mail, FileText, CheckCircle2, ArrowRight, Target, CreditCard, Info, Clock, CalendarDays, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { programs, concoursItems, CONTACT, schedule } from '@/data/concours';
import type { Page } from '@/components/Navbar';

const programIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck, BookOpen, Dumbbell, Trophy,
};

const concoursIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark: Target,
  Calculator: Target,
  Briefcase: Target,
  HeartPulse: Target,
  GraduationCap: Target,
  ShieldCheck: Target,
};

interface PrepaConcoursProps {
  onNavigate: (page: Page) => void;
}

const fraisDossier = [
  { label: 'Frais d\'inscription', value: '2500FCFA', note: 'Unique, non remboursable' },
  { label: 'Frais de dossier', value: '42000FCFA', note: 'Couvre l\'évaluation et le placement' },
  { label: 'Accompte', value: '30%', note: 'À verser avant le début des cours' },
];

const demarche = [
  { step: '1', title: 'Inscription', text: 'Remplissez le formulaire "Nous rejoindre".' },
  { step: '2', title: 'Évaluation', text: 'Test de niveau pour cibler vos besoins.' },
  { step: 3, title: 'Plan personnalisé', text: 'Élaboration de votre programme sur-mesure.' },
  { step: '4', title: 'Début des cours', text: 'Accès aux cours, annales et simulations.' },
];

export default function PrepaConcours({ onNavigate }: PrepaConcoursProps) {
  return (
    <>
      <PageHeader
        title="Prépa concours"
        subtitle="Une préparation intensive, structurée et ciblée pour maximiser vos chances de réussite."
      />

      {/* Programs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-bold mb-4">
              <Target className="w-4 h-4" />
              Notre programme
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900">
              La <span className="text-gradient-warm">démarche</span> en 4 phases
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">De l'évaluation au concours, chaque étape est structurée.</em>
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => {
              const Icon = programIconMap[prog.icon] ?? Target;
              return (
                <Reveal key={prog.id} delay={i * 100}>
                  <div className="card-warm p-7 h-full group hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-200/30 rounded-full blur-2xl group-hover:bg-primary-300/40 transition-all duration-500" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 shadow-lg shadow-primary-400/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {prog.phase}
                        </span>
                      </div>
                      <h3 className="font-bold text-ink-900 mb-2">{prog.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed mb-3">{prog.description}</p>
                      <p className="text-xs font-bold text-secondary-600 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {prog.duration}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concours list */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              Concours <span className="text-gradient">préparés</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400">
              <em className="font-serif">Une expertise pour chaque type de concours.</em>
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {concoursItems.map((item, i) => {
              const Icon = concoursIconMap[item.icon] ?? Target;
              return (
                <Reveal key={item.id} delay={(i % 3) * 80}>
                  <div className="card p-6 group hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 transition-all duration-300 group-hover:from-primary-400 group-hover:to-primary-500 group-hover:text-ink-900 group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ink-900 mb-1 group-hover:text-primary-700 transition-colors">{item.name}</h3>
                        <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-dark opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-bold mb-4">
              <CalendarDays className="w-4 h-4" />
              Programme hebdomadaire
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Horaires & <span className="shimmer-text">matières</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">Un planning structuré pour une préparation complète.</em>
            </p>
          </Reveal>

          {/* Days tabs */}
          <ScheduleGrid />
        </div>
      </section>

      {/* Frais de dossier bloc */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-padding max-w-5xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50/40 border-2 border-primary-200 p-8 lg:p-12 shadow-golden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-300/30 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 shadow-lg shadow-primary-400/30">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-ink-900">Frais de dossier</h2>
                    <p className="text-sm text-ink-500">Tarifs transparents, sans surprise</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  {fraisDossier.map((frais, i) => (
                    <Reveal key={frais.label} delay={i * 100}>
                      <div className="bg-white rounded-2xl p-6 border border-primary-100 shadow-card text-center group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                        <p className="text-3xl font-extrabold text-gradient-warm mb-1">{frais.value}</p>
                        <p className="font-bold text-ink-800 text-sm mb-1">{frais.label}</p>
                        <p className="text-xs text-ink-400">{frais.note}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-3 bg-primary-100/50 rounded-xl p-4">
                  <Info className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-ink-600">
                    <strong>Bon à savoir :</strong> Les frais de dossier couvrent l'évaluation de niveau, l'élaboration
                    du plan personnalisé et l'accès à notre plateforme de ressources. Ils sont dus lors de l'inscription.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button onClick={() => onNavigate('rejoindre')} className="btn-primary">
                    S'inscrire
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => onNavigate('tarifs')} className="btn-outline">
                    Voir tous les tarifs
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Démarche steps */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-primary-50/30">
        <div className="section-padding max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 border border-secondary-200 text-secondary-700 text-sm font-bold mb-4">
              <FileText className="w-4 h-4" />
              Comment s'inscrire
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              La <span className="text-gradient">démarche</span>
            </h2>
          </Reveal>

          <div className="space-y-4">
            {demarche.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-5 card p-6 group hover:-translate-y-0.5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 font-extrabold text-lg shadow-lg shadow-primary-400/30 transition-all duration-300 group-hover:scale-110">
                    {step.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-ink-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-ink-500">{step.text}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-primary-400 ml-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900">
              Notre <span className="text-gradient-warm">localisation</span>
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              <em className="font-serif">Venez nous rendre visite ou contactez-nous.</em>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src={CONTACT.mapsEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Sahelia"
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              <div className="card p-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-ink-900 text-sm">Adresse</p>
                  <p className="text-xs text-ink-500">{CONTACT.address}</p>
                </div>
              </div>
              <div className="card p-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-ink-900 text-sm">Téléphone</p>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="text-xs text-ink-500 hover:text-primary-600 transition-colors">{CONTACT.phone}</a>
                </div>
              </div>
              <div className="card p-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center text-accent-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-ink-900 text-sm">E-mail</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-xs text-ink-500 hover:text-primary-600 transition-colors break-words">{CONTACT.email}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ScheduleGrid() {
  const [activeDay, setActiveDay] = useState('Lundi');
  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const daySlots = schedule.filter((s) => s.day === activeDay);

  const typeColors: Record<string, string> = {
    'Cours': 'bg-primary-500/20 text-primary-300 border-primary-400/30',
    'Révision': 'bg-secondary-500/20 text-secondary-300 border-secondary-400/30',
    'Simulation': 'bg-accent-500/20 text-accent-300 border-accent-400/30',
    'Évaluation': 'bg-red-500/20 text-red-300 border-red-400/30',
  };

  return (
    <div>
      {/* Day tabs */}
      <Reveal>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeDay === day
                  ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-ink-900 shadow-lg shadow-primary-400/30 scale-105'
                  : 'bg-ink-800/60 text-ink-300 border border-ink-700/50 hover:bg-ink-700/60 hover:text-primary-300'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Slots */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {daySlots.map((slot, i) => (
          <Reveal key={slot.id} delay={i * 60}>
            <div className="card-dark p-5 group hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-primary-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-bold">{slot.time}</span>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${typeColors[slot.type]}`}>
                  {slot.type}
                </span>
              </div>
              <h4 className="text-white font-bold text-lg group-hover:text-primary-300 transition-colors">
                {slot.subject}
              </h4>
              <div className="flex items-center gap-1.5 mt-2 text-ink-400 text-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                {slot.level}
              </div>
              <div className="mt-3 h-0.5 w-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
