import { useEffect, useState } from 'react';
import Navbar, { type Page } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Rejoindre from '@/pages/Rejoindre';
import Protocole from '@/pages/Protocole';
import Tarifs from '@/pages/Tarifs';
import CentreFormation from '@/pages/CentreFormation';
import Produits from '@/pages/Produits';
import PrepaConcours from '@/pages/PrepaConcours';
import Repetition from '@/pages/Repetition';

function App() {
  const [page, setPage] = useState<Page>('home');

  const handleNavigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'centre-formation':
        return <CentreFormation onNavigate={handleNavigate} />;
      case 'produits':
        return <Produits />;
      case 'prepa-concours':
        return <PrepaConcours onNavigate={handleNavigate} />;
      case 'repetition':
        return <Repetition onNavigate={handleNavigate} />;
      case 'tarifs':
        return <Tarifs onNavigate={handleNavigate} />;
      case 'protocole':
        return <Protocole onNavigate={handleNavigate} />;
      case 'rejoindre':
        return <Rejoindre />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
}

export default App;
