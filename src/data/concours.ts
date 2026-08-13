export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export const services: ServiceItem[] = [
  {
    id: 'repetition',
    name: 'Répétition',
    shortDesc: 'Soutien scolaire personnalisé',
    description:
      "Cours de soutien et de répétition pour tous les niveaux. Nos enseignants s'adaptent au rythme de chaque élève pour combler les lacunes et renforcer les acquis.",
    icon: 'BookOpen',
    features: ['Suivi individuel', 'Toutes matières', 'Primaire à lycée', 'Petits groupes'],
    color: 'primary',
  },
  {
    id: 'cours-en-ligne',
    name: 'Cours en ligne',
    shortDesc: 'Apprenez de chez vous',
    description:
      "Plateforme de cours en ligne avec cours live, exercices interactifs et accès aux ressources. Une formation flexible accessible partout, à votre rythme.",
    icon: 'Laptop',
    features: ['Cours live', 'Replay illimité', 'Exercices interactifs', 'Accès 24/7'],
    color: 'secondary',
  },
  {
    id: 'prepa-concours',
    name: 'Prépa concours',
    shortDesc: 'Préparation intensive',
    description:
      "Préparation ciblée et intensive aux concours de la fonction publique, écoles d'ingénieurs, de commerce, paramédicaux et militaires. Annales, simulations et coaching.",
    icon: 'Target',
    features: ['Annales corrigées', 'Simulations', 'Coaching personnalisé', 'Sessions intensives'],
    color: 'accent',
  },
];

export interface ConcoursItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const concoursItems: ConcoursItem[] = [
  {
    id: 'concours-1',
    name: 'ENS Polytechniques ',
    description:
      "Préparation complète aux concours des campus ENS Polytechniques. Cours, annales et simulations pour maximiser vos chances de réussite.",
    icon: 'Landmark',
  },
  {
    id: 'concours-2',
    name: 'IUT',
    description:
      "Accompagnement ciblé pour les concours des IUT camerounaise",
    icon: 'Calculator',
  },
  {
    id: 'concours-3',
    name: 'UCAC',
    description:
      "Préparation aux concours des écoles de commerce. Écrits, entretiens et mises en situation.",
    icon: 'Briefcase',
  },
  {
    id: 'concours-4',
    name: 'Ecole de management et commmerces',
    description:
      "Préparation aux concours paramédicaux et sociaux. Coaching et révisions ciblées.",
    icon: 'HeartPulse',
  },
  {
    id: 'concours-5',
    name: 'Universitaires',
    description:
      "Préparation aux examens d'entrée à l'université. Soutien et révisions approfondies.",
    icon: 'GraduationCap',
  },
  {
    id: 'concours-6',
    name: 'Concour de Police',
    description:
      "Préparation physique et théorique aux concours des forces armées et de sécurité.",
    icon: 'ShieldCheck',
  },
];

export interface ProgramItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

export const programs: ProgramItem[] = [
  {
    id: 'prog-1',
    phase: 'Phase 1',
    title: 'Évaluation & Diagnostic',
    description: "Tests de niveau pour identifier vos forces et lacunes. Élaboration d'un plan de révision personnalisé.",
    duration: '1 semaine',
    icon: 'ClipboardCheck',
  },
  {
    id: 'prog-2',
    phase: 'Phase 2',
    title: 'Cours fondamentaux',
    description: "Maîtrise du programme avec des cours structurés, des exercices d'application et des fiches de révision.",
    duration: '4-8 semaines',
    icon: 'BookOpen',
  },
  {
    id: 'prog-3',
    phase: 'Phase 3',
    title: 'Entraînement intensif',
    description: "Travail sur annales, simulations d'examen et concours blancs pour développer vos automatismes.",
    duration: '4-8 semaines',
    icon: 'Dumbbell',
  },
  {
    id: 'prog-4',
    phase: 'Phase 4',
    title: 'Finalisation & Coaching',
    description: "Sessions de révision express, gestion du stress, conseils méthodologiques et coaching individuel.",
    duration: '2 semaines',
    icon: 'Trophy',
  },
];

export interface ScheduleSlot {
  id: string;
  day: string;
  time: string;
  subject: string;
  level: string;
  type: 'Cours' | 'Révision' | 'Simulation' | 'Évaluation';
}

export const schedule: ScheduleSlot[] = [
  { id: 's1', day: 'Lundi', time: '08h00 - 10h00', subject: 'Mathématiques', level: 'Terminale', type: 'Cours' },
  { id: 's2', day: 'Lundi', time: '10h15 - 12h15', subject: 'Français', level: 'Première', type: 'Cours' },
  { id: 's3', day: 'Lundi', time: '14h00 - 16h00', subject: 'Physique-Chimie', level: 'Terminale', type: 'Cours' },
  { id: 's4', day: 'Mardi', time: '08h00 - 10h00', subject: 'Culture Générale', level: 'Tous niveaux', type: 'Cours' },
  { id: 's5', day: 'Mardi', time: '10h15 - 12h15', subject: 'Anglais', level: 'Tous niveaux', type: 'Cours' },
  { id: 's6', day: 'Mardi', time: '14h00 - 16h00', subject: 'Annales', level: 'Tous niveaux', type: 'Révision' },
  { id: 's7', day: 'Mercredi', time: '08h00 - 10h00', subject: 'Mathématiques', level: 'Première', type: 'Cours' },
  { id: 's8', day: 'Mercredi', time: '10h15 - 12h15', subject: 'SVT', level: 'Terminale', type: 'Cours' },
  { id: 's9', day: 'Mercredi', time: '14h00 - 16h00', subject: 'Concours blanc', level: 'Tous niveaux', type: 'Simulation' },
  { id: 's10', day: 'Jeudi', time: '08h00 - 10h00', subject: 'Philosophie', level: 'Terminale', type: 'Cours' },
  { id: 's11', day: 'Jeudi', time: '10h15 - 12h15', subject: 'Histoire-Géographie', level: 'Tous niveaux', type: 'Cours' },
  { id: 's12', day: 'Jeudi', time: '14h00 - 16h00', subject: 'Exercices dirigés', level: 'Tous niveaux', type: 'Révision' },
  { id: 's13', day: 'Vendredi', time: '08h00 - 10h00', subject: 'Mathématiques', level: 'Terminale', type: 'Révision' },
  { id: 's14', day: 'Vendredi', time: '10h15 - 12h15', subject: 'Français', level: 'Première', type: 'Révision' },
  { id: 's15', day: 'Vendredi', time: '14h00 - 16h00', subject: 'Évaluation', level: 'Tous niveaux', type: 'Évaluation' },
  { id: 's16', day: 'Samedi', time: '08h00 - 10h00', subject: 'Coaching individuel', level: 'Sur RDV', type: 'Cours' },
  { id: 's17', day: 'Samedi', time: '10h15 - 12h15', subject: 'Simulation concours', level: 'Tous niveaux', type: 'Simulation' },
];

export interface TarifPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export const tarifPlans: TarifPlan[] = [
  {
    id: 'repetition',
    name: 'Répétition',
    price: '15 000 FCFA',
    period: '/mois',
    description: 'Soutien scolaire personnalisé',
    icon: 'BookOpen',
    color: 'primary',
    features: [
      'Cours collectifs (max 10)',
      '2 séances par semaine',
      'Toutes matières confondues',
      'Suivi de progression',
      'Supports de cours inclus',
    ],
    highlight: false,
    cta: 'Choisir Répétition',
  },
  {
    id: 'prepa-concours',
    name: 'Prépa concours',
    price: '35 000 FCFA',
    period: '/mois',
    description: 'Préparation intensive aux concours',
    icon: 'Target',
    color: 'accent',
    features: [
      'Cours en petits groupes (max 6)',
      '4 séances par semaine',
      'Annales corrigées illimitées',
      'Simulations de concours',
      'Coaching personnalisé',
      'Évaluations hebdomadaires',
    ],
    highlight: true,
    cta: 'Choisir Prépa concours',
  },
  {
    id: 'cours-en-ligne',
    name: 'Cours en ligne',
    price: '20 000 FCFA',
    period: '/mois',
    description: 'Apprenez de chez vous',
    icon: 'Laptop',
    color: 'secondary',
    features: [
      'Cours live interactifs',
      'Replay illimité',
      'Exercices interactifs',
      'Accès 24/7 aux ressources',
      'Forum d\'entraide',
    ],
    highlight: false,
    cta: 'Choisir Cours en ligne',
  },
];

export const stats = [
  { id: 'stat-1', value: 15, suffix: '+', label: "Années d'expérience" },
  { id: 'stat-2', value: 2000, suffix: '+', label: 'Élèves accompagnés' },
  { id: 'stat-3', value: 92, suffix: '%', label: 'Taux de réussite' },
  { id: 'stat-4', value: 50, suffix: '+', label: 'Professeurs experts' },
];

export const values = [
  {
    id: 'v1',
    icon: 'Target',
    title: 'Mission',
    text: "Offrir à chaque élève les outils et l'accompagnement nécessaires pour réussir, en démocratisant l'accès à une éducation de qualité.",
  },
  {
    id: 'v2',
    icon: 'Globe',
    title: 'Vision',
    text: "Digitaliser l'éducation au Cameroun, depuis Garoua, pour rendre l'apprentissage accessible à tous, partout et à tout moment.",
  },
  {
    id: 'v3',
    icon: 'Heart',
    title: 'Valeurs',
    text: "Bienveillance, rigueur et engagement. Chaque élève mérite une éducation adaptée à son rythme et à ses ambitions.",
  },
];

export const CONTACT = {
  email: 'saheliadigitalacademy@gmail.com',
  phone: '+237 6 99 22 76 52',
  phoneRaw: '+237699227652',
  address: 'Quartier Yelwa, Garoua, Cameroun',
  tiktok: 'https://www.tiktok.com/@sahelia',
  facebook: 'https://www.facebook.com/sahelia',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5!2d13.3906!3d9.3009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGaroua%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1700000000000',
};
