import { useMemo, useState } from 'react';
import { ArrowRight, Check, Search, ShoppingCart, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

const WHATSAPP_URL = 'https://wa.me/237699227652';

type ProductCategory = 'Tous' | 'Concours' | 'Scolaire' | 'Orientation';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Exclude<ProductCategory, 'Tous'>;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'TD Prépa Concours sahelia',
    description: 'Méthodes, exercices et fiches de révision pour préparer vos épreuves.',
    price: 1500,
    category: 'Concours',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    badge: 'Best-seller',
  },
  {
    id: 2,
    name: 'Kit Réussite Scolaire',
    description: 'Un ensemble de supports pratiques pour progresser avec régularité.',
    price: 1000,
    category: 'Scolaire',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Guide Orientation',
    description: 'Les clés pour choisir une formation et construire un projet solide.',
    price: 7500,
    category: 'Orientation',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
    badge: 'Nouveau',
  },
  {
    id: 4,
    name: 'Bord  mathematique',
    description: 'Un cahier clair pour organiser vos révisions et gagner en efficacité.',
    price: 5000,
    category: 'Scolaire',
    image: 'https://images.unsplash.com/photo-1455885666463-3d8b0b2e6d7c?auto=format&fit=crop&w=900&q=85',
  },
  
];

const categories: ProductCategory[] = ['Tous', 'Concours', 'Scolaire', 'Orientation'];

function formatPrice(price: number) {
  return `${new Intl.NumberFormat('fr-FR').format(price)} FCFA`;
}

function orderProduct(product: Product) {
  const message = encodeURIComponent(`Bonjour Sahelia, je souhaite commander le produit « ${product.name} » au prix de ${formatPrice(product.price)}.`);
  window.open(`${WHATSAPP_URL}?text=${message}`, '_blank', 'noopener,noreferrer');
}

export default function Produits() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Tous');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'Tous' || product.category === activeCategory;
      const matchesSearch = !query || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <PageHeader
        title="Nos produits"
        subtitle="Des ressources pensées pour transformer vos efforts en résultats."
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-white/10 px-4 py-2 text-sm font-semibold text-primary-200">
          <Sparkles className="h-4 w-4 text-primary-300" />
          La réussite commence avec les bons outils
        </div>
      </PageHeader>

      <section className="section-padding bg-ink-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-primary-600">La boutique Sahelia</p>
                <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Tout pour avancer avec confiance</h2>
                <p className="mt-4 text-ink-500">Choisissez votre ressource, puis commandez directement auprès de notre équipe sur WhatsApp.</p>
              </div>
              <div className="relative w-full max-w-sm">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Rechercher un produit..."
                  aria-label="Rechercher un produit"
                  className="w-full rounded-xl border border-ink-200 bg-white py-3.5 pl-12 pr-4 text-sm text-ink-800 shadow-card outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Catégories de produits">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${activeCategory === category ? 'bg-ink-900 text-primary-300 shadow-lg' : 'bg-white text-ink-600 shadow-card hover:-translate-y-0.5 hover:text-primary-700'}`}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 80} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary-200 hover:shadow-card-hover">
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                      {product.badge && <span className="absolute left-4 top-4 rounded-full bg-primary-400 px-3 py-1 text-xs font-extrabold text-ink-900">{product.badge}</span>}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 text-xs font-extrabold uppercase tracking-wider text-secondary-600">{product.category}</span>
                      <h3 className="text-xl font-bold text-ink-900">{product.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{product.description}</p>
                      <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-4">
                        <strong className="text-base font-extrabold text-primary-700">{formatPrice(product.price)}</strong>
                        <button type="button" onClick={() => orderProduct(product)} className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-3.5 py-2.5 text-sm font-bold text-primary-300 transition hover:-translate-y-0.5 hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-400" aria-label={`Commander ${product.name}`}>
                          <ShoppingCart className="h-4 w-4" />
                          Commander
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-ink-200 bg-white px-6 py-16 text-center">
              <p className="text-lg font-bold text-ink-800">Aucun produit trouvé</p>
              <p className="mt-2 text-sm text-ink-500">Essayez une autre recherche ou une autre catégorie.</p>
            </div>
          )}

          <Reveal delay={200}>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-primary-100 via-primary-50 to-secondary-100 p-6 sm:flex-row sm:items-center md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-secondary-600 shadow-sm"><Check className="h-5 w-5" /></div>
                <div><h3 className="font-bold text-ink-900">Nous contacter ?</h3><p className="mt-1 text-sm text-ink-600">Notre équipe vous aide à trouver la ressource adaptée à votre objectif.</p></div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-dark shrink-0 text-sm">Parler à un conseiller <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
