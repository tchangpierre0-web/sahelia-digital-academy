import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import Logo from './Logo';
import type { Page } from './Navbar';
import { CONTACT } from '@/data/concours';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'centre-formation', label: 'Centre de formation' },
    { id: 'prepa-concours', label: 'Prépa concours' },
    { id: 'repetition', label: 'Répétition' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'protocole', label: 'Protocole' },
    { id: 'rejoindre', label: 'Nous rejoindre' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-ink-900 text-ink-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark opacity-40" />
      <div className="absolute top-0 left-0 w-96 h-48 bg-primary-500/8 rounded-full blur-3xl" />

      <div className="relative section-padding py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo className="w-11 h-11" variant="light" />
              <div className="leading-tight">
                <span className="font-display font-extrabold text-lg text-white block">Sahelia</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-500 font-bold">Centre de formation</span>
              </div>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed">
              <em className="font-serif">
                Bien plus qu'un centre de prépa : un écosystème d'accompagnement éducatif dédié à votre réussite.
              </em>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-ink-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-ink-400 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-primary-500" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-3 text-ink-400 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-primary-500" />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-400">
                <MapPin className="w-4 h-4 shrink-0 text-primary-500" />
                {CONTACT.address}
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-5">
              <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl bg-ink-800 hover:bg-ink-700 flex items-center justify-center text-ink-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                 aria-label="TikTok">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl bg-ink-800 hover:bg-blue-600 flex items-center justify-center text-ink-400 hover:text-white transition-all duration-300 hover:scale-110"
                 aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-ink-400 mb-4">Recevez nos actualités et conseils.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Votre e-mail"
                className="flex-1 px-4 py-2.5 rounded-xl bg-ink-800 border border-ink-700 text-white text-sm placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
              <button type="submit" className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 text-ink-900 flex items-center justify-center hover:from-primary-300 hover:to-primary-400 transition-all duration-300 hover:scale-105">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink-800">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-500">
            <p>&copy; {new Date().getFullYear()} Sahelia Digital Academy . Tous droits réservés.</p>
            <p className="font-serif italic text-primary-500/70">L'excellence au service de votre réussite.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
