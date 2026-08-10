import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
                 bg-gradient-to-br from-primary-400 to-primary-500 text-ink-900
                 shadow-lg shadow-primary-400/30
                 flex items-center justify-center
                 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500/40
                 animate-fade-in"
      aria-label="Remonter en haut"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
