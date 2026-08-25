import { useEffect, useRef, useState } from 'react';
import { User, Mail, Phone, Facebook, Sparkles, CheckCircle2, ArrowRight, Star, TrendingUp } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';
import { CONTACT } from '@/data/concours';

interface HeroProps {
  onNavigate: (page: 'home' | 'centre-formation' | 'prepa-concours' | 'repetition' | 'tarifs' | 'protocole' | 'rejoindre' | 'contact') => void;
}

const socialLinks = [
  { name: 'TikTok', href: CONTACT.tiktok, icon: TikTokIcon, hoverClass: 'hover:bg-ink-900 hover:text-primary-300' },
  { name: 'Facebook', href: CONTACT.facebook, icon: Facebook, hoverClass: 'hover:bg-blue-600 hover:text-white' },
  { name: 'E-mail', href: `mailto:${CONTACT.email}`, icon: Mail, hoverClass: 'hover:bg-primary-400 hover:text-ink-900' },
  { name: 'Téléphone', href: `tel:${CONTACT.phoneRaw}`, icon: Phone, hoverClass: 'hover:bg-secondary-400 hover:text-white' },
  { name: 'WhatsApp', href: CONTACT.whatsapp, icon: WhatsAppIcon, hoverClass: 'hover:bg-green-500 hover:text-white' },
];

const highlights = ['Répétition & soutien', 'Cours en ligne', 'Prépa concours', 'Suivi personnalisé'];

export default function Hero({ onNavigate }: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    const el = parallaxRef.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={parallaxRef} className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50/40" />
      <div className="absolute inset-0 bg-mesh-warm" />

      {/* Floating decorative shapes with parallax */}
      <div
        className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-primary-300/25 rounded-full blur-[120px] animate-pulse-slow"
        style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-400/15 rounded-full blur-[100px] animate-pulse-slow"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`, animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-secondary-300/15 rounded-full blur-[80px] animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative section-padding py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: content */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 border border-primary-200 text-primary-700 text-sm font-bold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-accent-500" />
                <span>Bien plus qu'une simple prépa</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-ink-900 leading-[1.05]">
                Sahelia,<br />
                <span className="shimmer-text">l'éducation</span> qui<br />
                <span className="text-gradient-warm">transforme</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg lg:text-xl text-ink-500 max-w-xl leading-relaxed">
                Bien plus qu'un centre de prépa concours : <strong className="text-ink-700">répétition</strong>,{' '}
                <strong className="text-ink-700">cours en ligne</strong>,{' '}
                <strong className="text-ink-700">préparation aux concours</strong> et accompagnement scolaire
                sur-mesure.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <span key={item} className="chip bg-white/70 backdrop-blur-sm text-ink-700 border border-primary-200/60 shadow-sm hover:bg-primary-50 hover:border-primary-300 hover:scale-105">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-4">
                <button onClick={() => onNavigate('rejoindre')} className="btn-primary text-base">
                  Nous rejoindre
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => onNavigate('centre-formation')} className="btn-outline text-base">
                  Découvrir nos services
                </button>
              </div>
            </Reveal>

            {/* Social icons */}
            <Reveal delay={400}>
              <div className="mt-10">
                <p className="text-sm font-bold text-ink-400 uppercase tracking-wider mb-3">
                  Suivez-nous
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`w-12 h-12 rounded-2xl bg-white border border-primary-200 shadow-md
                                    flex items-center justify-center text-ink-600
                                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.hoverClass}`}
                        aria-label={link.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: visual */}
          <Reveal delay={200} className="hidden lg:block">
            <div className="relative" style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}>
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-[2.5rem] blur-3xl" />

              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="suivie de Sahelia Digital Academy"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-primary-500/10" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-primary-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-400/30">
                    <TrendingUp className="w-6 h-6 text-ink-900" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-ink-900">92%</p>
                    <p className="text-xs text-ink-400 font-medium">Taux de réussite</p>
                  </div>
                </div>
              </div>

              {/* Floating badge top */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl shadow-xl px-5 py-3 animate-bounce-subtle">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-ink-900 fill-ink-900" />
                  <p className="text-sm font-extrabold text-ink-900">+200 élèves</p>
                </div>
              </div>

              {/* Floating mini card */}
              <div className="absolute top-1/3 -right-8 bg-ink-900 rounded-xl shadow-xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2 text-primary-300">
                  <User className="w-4 h-4" />
                  <p className="text-xs font-bold">5+ professeurs</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
