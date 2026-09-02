import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, BookOpen, Laptop, Target, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import Logo from './Logo';

export type Page = 'home' | 'centre-formation' | 'prepa-concours' | 'repetition' | 'tarifs' | 'protocole' | 'rejoindre' | 'contactgit ';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const resourceItems: { id: Page; title: string; description: string; icon: string }[] = [
  { id: 'centre-formation', title: 'Centre de formation', description: "Découvrez Sahelia Digital Academy  et tous nos services", icon: 'Building2' },
  { id: 'prepa-concours', title: 'Prépa concours', description: "Préparation intensive aux concours", icon: 'Target' },
  { id: 'repetition', title: 'Répétition', description: "Soutien scolaire et cours personnalisés", icon: 'BookOpen' },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2: Target,
  Target,
  BookOpen,
};

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const navItems: { id: Page; label: string }[] = [
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'protocole', label: 'Protocole' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-ink-900/5 border-b border-primary-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-ink-100/50'
      }`}
    >
      <nav className="section-padding h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <Logo className="w-11 h-11 md:w-12 md:h-12 drop-shadow-md" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="font-display font-extrabold text-lg text-ink-900 tracking-tight">
              Sahelia
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary-600 font-bold">
              Digital Academy
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Resources dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onMouseEnter={() => setResourcesOpen(true)}
              className="flex items-center gap-1.5 px-1 py-2 text-ink-600 font-semibold text-sm transition-colors duration-300 hover:text-primary-600"
            >
              Ressources
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96"
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <div className="bg-white rounded-2xl shadow-2xl shadow-ink-900/10 border border-primary-100 overflow-hidden animate-slide-down">
                  <div className="h-1.5 bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-400" />
                  <div className="p-2">
                    {resourceItems.map((item) => {
                      const Icon = iconMap[item.icon] ?? Target;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className="w-full flex items-start gap-3 p-3.5 rounded-xl text-left transition-all duration-200 hover:bg-primary-50 group/item"
                        >
                          <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 transition-all duration-200 group-hover/item:from-primary-400 group-hover/item:to-primary-500 group-hover/item:text-white group-hover/item:scale-110">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-sm text-ink-800 group-hover/item:text-primary-700 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-ink-400 mt-0.5">{item.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200 shrink-0 mt-1" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick('rejoindre')}
            className="btn-primary text-sm !px-5 !py-2.5"
          >
            Nous rejoindre
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-ink-700 hover:bg-primary-50 transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-primary-100 max-h-[85vh] overflow-y-auto animate-slide-down">
          <div className="px-5 py-4 space-y-1">
            {/* Resources */}
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between py-3 text-ink-700 font-bold"
            >
              Ressources
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {resourceItems.map((item) => {
                  const Icon = iconMap[item.icon] ?? Target;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-left hover:bg-primary-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-ink-700">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-3 font-bold transition-colors ${
                  currentPage === item.id ? 'text-primary-600' : 'text-ink-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('rejoindre')}
              className="btn-primary w-full mt-3"
            >
              Nous rejoindre
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
