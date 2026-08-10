import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';
import ServicesOverview from '@/components/ServicesOverview';
import CtaBanner from '@/components/CtaBanner';
import type { Page } from '@/components/Navbar';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Mission />
      <Stats />
      <ServicesOverview onNavigate={onNavigate} />
      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
