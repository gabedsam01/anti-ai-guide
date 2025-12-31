/**
 * Anti-AI Design Guide — Unified Terminology Glossary
 * 
 * This glossary defines standard terms used throughout the guide.
 * Use these definitions consistently in all articles (PT and EN).
 */

export interface GlossaryTerm {
    id: string;
    termPT: string;
    termEN: string;
    definitionPT: string;
    definitionEN: string;
    usage: 'keep-english' | 'translate' | 'either';
    category: 'ui' | 'ux' | 'methodology' | 'general';
}

export const glossaryTerms: GlossaryTerm[] = [
    // UI Terms
    {
        id: 'affordance',
        termPT: 'Affordance',
        termEN: 'Affordance',
        definitionPT: 'Característica visual ou funcional que sugere como um elemento pode ser usado.',
        definitionEN: 'Visual or functional characteristic that suggests how an element can be used.',
        usage: 'keep-english',
        category: 'ui',
    },
    {
        id: 'feedback',
        termPT: 'Feedback',
        termEN: 'Feedback',
        definitionPT: 'Resposta do sistema às ações do usuário, confirmando que algo aconteceu.',
        definitionEN: 'System response to user actions, confirming that something happened.',
        usage: 'keep-english',
        category: 'ui',
    },
    {
        id: 'design-system',
        termPT: 'Design System',
        termEN: 'Design System',
        definitionPT: 'Coleção de componentes, tokens e padrões reutilizáveis que garantem consistência visual.',
        definitionEN: 'Collection of reusable components, tokens and patterns that ensure visual consistency.',
        usage: 'keep-english',
        category: 'methodology',
    },
    {
        id: 'design-tokens',
        termPT: 'Design Tokens',
        termEN: 'Design Tokens',
        definitionPT: 'Variáveis atômicas (cores, espaçamentos, tipografia) que formam a base do Design System.',
        definitionEN: 'Atomic variables (colors, spacing, typography) that form the base of a Design System.',
        usage: 'keep-english',
        category: 'methodology',
    },
    {
        id: 'dark-pattern',
        termPT: 'Dark Pattern / Padrão Enganoso',
        termEN: 'Dark Pattern',
        definitionPT: 'Interface projetada para manipular usuários a fazer algo que não pretendem.',
        definitionEN: 'Interface designed to manipulate users into doing something they did not intend.',
        usage: 'either',
        category: 'ux',
    },

    // UX Terms
    {
        id: 'ux-honeycomb',
        termPT: 'UX Honeycomb',
        termEN: 'UX Honeycomb',
        definitionPT: 'Framework de Peter Morville com 7 facetas de UX: Útil, Utilizável, Encontrável, Credível, Desejável, Acessível, Valioso.',
        definitionEN: "Peter Morville's framework with 7 UX facets: Useful, Usable, Findable, Credible, Desirable, Accessible, Valuable.",
        usage: 'keep-english',
        category: 'ux',
    },
    {
        id: 'cognitive-load',
        termPT: 'Carga Cognitiva',
        termEN: 'Cognitive Load',
        definitionPT: 'Quantidade de esforço mental necessária para processar informações ou completar tarefas.',
        definitionEN: 'Amount of mental effort required to process information or complete tasks.',
        usage: 'translate',
        category: 'ux',
    },
    {
        id: 'mental-model',
        termPT: 'Modelo Mental',
        termEN: 'Mental Model',
        definitionPT: 'Representação interna que usuários têm de como algo funciona, baseada em experiências anteriores.',
        definitionEN: 'Internal representation users have of how something works, based on prior experience.',
        usage: 'translate',
        category: 'ux',
    },
    {
        id: 'progressive-disclosure',
        termPT: 'Progressive Disclosure',
        termEN: 'Progressive Disclosure',
        definitionPT: 'Técnica de revelar informação ou opções gradualmente, conforme necessário.',
        definitionEN: 'Technique of revealing information or options gradually, as needed.',
        usage: 'keep-english',
        category: 'ux',
    },
    {
        id: 'chunking',
        termPT: 'Chunking / Agrupamento',
        termEN: 'Chunking',
        definitionPT: 'Dividir informações em grupos menores e significativos para facilitar processamento.',
        definitionEN: 'Breaking information into smaller, meaningful groups for easier processing.',
        usage: 'either',
        category: 'ux',
    },

    // Methodology Terms
    {
        id: 'atomic-design',
        termPT: 'Atomic Design',
        termEN: 'Atomic Design',
        definitionPT: 'Metodologia de Brad Frost que organiza UI em Átomos, Moléculas, Organismos, Templates e Páginas.',
        definitionEN: "Brad Frost's methodology organizing UI into Atoms, Molecules, Organisms, Templates and Pages.",
        usage: 'keep-english',
        category: 'methodology',
    },
    {
        id: 'design-thinking',
        termPT: 'Design Thinking',
        termEN: 'Design Thinking',
        definitionPT: 'Processo não-linear centrado no humano: Empatizar, Definir, Idear, Prototipar, Testar.',
        definitionEN: 'Human-centered non-linear process: Empathize, Define, Ideate, Prototype, Test.',
        usage: 'keep-english',
        category: 'methodology',
    },
    {
        id: 'lean-ux',
        termPT: 'Lean UX',
        termEN: 'Lean UX',
        definitionPT: 'Abordagem iterativa focada em aprendizado validado através do ciclo Build-Measure-Learn.',
        definitionEN: 'Iterative approach focused on validated learning through the Build-Measure-Learn cycle.',
        usage: 'keep-english',
        category: 'methodology',
    },
    {
        id: 'mvp',
        termPT: 'MVP (Produto Mínimo Viável)',
        termEN: 'MVP (Minimum Viable Product)',
        definitionPT: 'Versão mais simples de um produto que ainda entrega valor e permite aprendizado.',
        definitionEN: 'Simplest version of a product that still delivers value and enables learning.',
        usage: 'keep-english',
        category: 'methodology',
    },

    // Accessibility Terms
    {
        id: 'wcag',
        termPT: 'WCAG',
        termEN: 'WCAG',
        definitionPT: 'Web Content Accessibility Guidelines — diretrizes internacionais de acessibilidade web.',
        definitionEN: 'Web Content Accessibility Guidelines — international web accessibility guidelines.',
        usage: 'keep-english',
        category: 'general',
    },
    {
        id: 'a11y',
        termPT: 'a11y (Acessibilidade)',
        termEN: 'a11y (Accessibility)',
        definitionPT: 'Abreviação numerônimo para "accessibility" (a + 11 letras + y).',
        definitionEN: 'Numeronym abbreviation for "accessibility" (a + 11 letters + y).',
        usage: 'keep-english',
        category: 'general',
    },

    // Anti-AI Specific Terms
    {
        id: 'anti-ai-design',
        termPT: 'Design Anti-AI',
        termEN: 'Anti-AI Design',
        definitionPT: 'Filosofia de design que rejeita interfaces genéricas e padronizadas, priorizando intencionalidade e expressão.',
        definitionEN: 'Design philosophy rejecting generic, standardized interfaces, prioritizing intentionality and expression.',
        usage: 'translate',
        category: 'general',
    },
    {
        id: 'intentional-design',
        termPT: 'Design Intencional',
        termEN: 'Intentional Design',
        definitionPT: 'Cada decisão de design deve ter justificativa clara, não apenas seguir "melhores práticas" genéricas.',
        definitionEN: 'Every design decision must have clear justification, not just follow generic "best practices".',
        usage: 'translate',
        category: 'general',
    },
];

// Helper functions
export const getTermById = (id: string): GlossaryTerm | undefined => {
    return glossaryTerms.find(term => term.id === id);
};

export const getTermsByCategory = (category: GlossaryTerm['category']): GlossaryTerm[] => {
    return glossaryTerms.filter(term => term.category === category);
};

export const getTermsToKeepEnglish = (): GlossaryTerm[] => {
    return glossaryTerms.filter(term => term.usage === 'keep-english');
};
