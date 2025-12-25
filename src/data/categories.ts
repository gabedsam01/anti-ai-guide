import { Category } from './types';

export const categories: Category[] = [
  {
    id: 'manifesto',
    title: { pt: 'Manifesto', en: 'Manifesto' },
    description: { 
      pt: 'Por que design "Anti-AI"? O problema com interfaces genéricas.',
      en: 'Why "Anti-AI" design? The problem with generic interfaces.'
    },
    icon: 'flame',
    order: 1,
  },
  {
    id: 'ui-foundations',
    title: { pt: 'Fundamentos de UI', en: 'UI Foundations' },
    description: { 
      pt: 'Princípios visuais, tipografia, cores e componentes com alma.',
      en: 'Visual principles, typography, colors and components with soul.'
    },
    icon: 'layers',
    order: 2,
  },
  {
    id: 'ux-foundations',
    title: { pt: 'Fundamentos de UX', en: 'UX Foundations' },
    description: { 
      pt: 'Experiência do usuário, leis de UX e design centrado no humano.',
      en: 'User experience, UX laws and human-centered design.'
    },
    icon: 'users',
    order: 3,
  },
  {
    id: 'methodologies',
    title: { pt: 'Metodologias', en: 'Methodologies' },
    description: { 
      pt: 'Design Systems, Atomic Design e processos de trabalho.',
      en: 'Design Systems, Atomic Design and work processes.'
    },
    icon: 'git-branch',
    order: 4,
  },
  {
    id: 'trends-2025',
    title: { pt: 'Tendências 2025', en: 'Trends 2025' },
    description: { 
      pt: 'O futuro do design: IA, AR/VR, interfaces adaptativas.',
      en: 'The future of design: AI, AR/VR, adaptive interfaces.'
    },
    icon: 'sparkles',
    order: 5,
  },
  {
    id: 'ethics-accessibility',
    title: { pt: 'Ética & Acessibilidade', en: 'Ethics & Accessibility' },
    description: { 
      pt: 'Design responsável, inclusivo e sustentável.',
      en: 'Responsible, inclusive and sustainable design.'
    },
    icon: 'heart',
    order: 6,
  },
  {
    id: 'case-studies',
    title: { pt: 'Estudos de Caso', en: 'Case Studies' },
    description: { 
      pt: 'Exemplos reais de design Anti-AI em ação.',
      en: 'Real examples of Anti-AI design in action.'
    },
    icon: 'book-open',
    order: 7,
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getCategoriesSorted = (): Category[] => {
  return [...categories].sort((a, b) => a.order - b.order);
};
