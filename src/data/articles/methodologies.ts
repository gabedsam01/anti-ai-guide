import { Article } from '../types';

export const methodologiesArticles: Article[] = [
  {
    id: 'design-systems',
    slug: 'design-systems',
    category: 'methodologies',
    order: 1,
    readingTime: 12,
    title: {
      pt: 'Design Systems: Arquitetura de Consistência',
      en: 'Design Systems: Architecture of Consistency'
    },
    description: {
      pt: 'Como construir e manter um sistema de design escalável que preserve a identidade visual.',
      en: 'How to build and maintain a scalable design system that preserves visual identity.'
    },
    content: {
      pt: `# Design Systems: Arquitetura de Consistência

Um Design System não é apenas uma biblioteca de componentes — é a **linguagem visual codificada** da sua marca. É a diferença entre um produto que parece montado por partes e um que respira coerência.

## O Que Compõe um Design System

### 1. Design Tokens

São as **variáveis atômicas** do seu sistema:

\`\`\`css
:root {
  /* Cores semânticas, não literais */
  --color-primary: hsl(0, 68%, 49%);
  --color-surface: hsl(40, 23%, 95%);
  
  /* Espaçamento em escala */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  
  /* Tipografia */
  --font-display: 'Fraunces', serif;
  --font-body: 'JetBrains Mono', monospace;
}
\`\`\`

### 2. Componentes Base

Componentes atômicos que servem como blocos de construção:

\`\`\`tsx
// Button.tsx - Componente atômico com variantes
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant, size, children }: ButtonProps) {
  return (
    <button className={cn(
      'font-mono uppercase tracking-wide transition-colors',
      variants[variant],
      sizes[size]
    )}>
      {children}
    </button>
  );
}
\`\`\`

### 3. Padrões de Composição

Como os componentes se combinam:

- **Cards**: Superfícies que agrupam conteúdo relacionado
- **Forms**: Padrões de entrada e validação
- **Navigation**: Menus, breadcrumbs, tabs
- **Feedback**: Toasts, modals, estados de loading

## Princípios Anti-AI para Design Systems

### Evite o Genérico

A maioria dos design systems gerados por IA são intercambiáveis. Para criar distinção:

1. **Defina constraints únicos**: Bordas sempre retas? Cores sempre saturadas?
2. **Crie tokens semânticos específicos**: \`--accent-editorial\` em vez de \`--blue-500\`
3. **Documente o "porquê"**: Cada decisão deve ter justificativa

### Mantenha Tensão Criativa

\`\`\`tsx
// ❌ Genérico: Poderia ser qualquer sistema
<Card className="rounded-lg shadow-md p-4">

// ✅ Distintivo: Estética editorial clara
<Card className="border border-foreground/20 p-6 bg-surface">
\`\`\`

## Governança e Manutenção

Um Design System só funciona se for **vivo**:

- **Versionamento**: Trate como um produto com releases
- **Documentação**: Storybook ou Docusaurus com exemplos reais
- **Feedback Loop**: Canal direto entre designers e devs
- **Auditoria Regular**: Revise tokens não utilizados trimestralmente`,

      en: `# Design Systems: Architecture of Consistency

A Design System is not just a component library — it's the **coded visual language** of your brand. It's the difference between a product that looks assembled from parts and one that breathes coherence.

## What Comprises a Design System

### 1. Design Tokens

These are the **atomic variables** of your system:

\`\`\`css
:root {
  /* Semantic colors, not literal */
  --color-primary: hsl(0, 68%, 49%);
  --color-surface: hsl(40, 23%, 95%);
  
  /* Spacing in scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  
  /* Typography */
  --font-display: 'Fraunces', serif;
  --font-body: 'JetBrains Mono', monospace;
}
\`\`\`

### 2. Base Components

Atomic components that serve as building blocks:

\`\`\`tsx
// Button.tsx - Atomic component with variants
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant, size, children }: ButtonProps) {
  return (
    <button className={cn(
      'font-mono uppercase tracking-wide transition-colors',
      variants[variant],
      sizes[size]
    )}>
      {children}
    </button>
  );
}
\`\`\`

### 3. Composition Patterns

How components combine:

- **Cards**: Surfaces that group related content
- **Forms**: Input and validation patterns
- **Navigation**: Menus, breadcrumbs, tabs
- **Feedback**: Toasts, modals, loading states

## Anti-AI Principles for Design Systems

### Avoid the Generic

Most AI-generated design systems are interchangeable. To create distinction:

1. **Define unique constraints**: Always square edges? Always saturated colors?
2. **Create specific semantic tokens**: \`--accent-editorial\` instead of \`--blue-500\`
3. **Document the "why"**: Every decision should have justification

### Maintain Creative Tension

\`\`\`tsx
// ❌ Generic: Could be any system
<Card className="rounded-lg shadow-md p-4">

// ✅ Distinctive: Clear editorial aesthetic
<Card className="border border-foreground/20 p-6 bg-surface">
\`\`\`

## Governance and Maintenance

A Design System only works if it's **alive**:

- **Versioning**: Treat it as a product with releases
- **Documentation**: Storybook or Docusaurus with real examples
- **Feedback Loop**: Direct channel between designers and devs
- **Regular Audit**: Review unused tokens quarterly`
    }
  },
  {
    id: 'atomic-design',
    slug: 'atomic-design',
    category: 'methodologies',
    order: 2,
    readingTime: 10,
    title: {
      pt: 'Atomic Design: Da Molécula à Página',
      en: 'Atomic Design: From Molecule to Page'
    },
    description: {
      pt: 'A metodologia de Brad Frost para criar interfaces escaláveis e consistentes.',
      en: "Brad Frost's methodology for creating scalable and consistent interfaces."
    },
    content: {
      pt: `# Atomic Design: Da Molécula à Página

Criado por Brad Frost, o Atomic Design é uma metodologia que organiza componentes de UI em uma **hierarquia inspirada na química**.

## Os Cinco Níveis

\`\`\`mermaid
graph LR
    A[Átomos] --> B[Moléculas]
    B --> C[Organismos]
    C --> D[Templates]
    D --> E[Páginas]
    
    style A stroke:#333,stroke-width:1px
    style B stroke:#666,stroke-width:2px
    style C stroke:#999,stroke-width:3px
    style D stroke:#ccc,stroke-width:4px
    style E stroke:#fff,stroke-width:5px
\`\`\`

### 1. Átomos

Os blocos mais básicos — elementos HTML puros:

\`\`\`tsx
// Átomo: Input
export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className="border border-border bg-background px-3 py-2 font-mono text-sm"
      {...props}
    />
  );
}

// Átomo: Label
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}
\`\`\`

### 2. Moléculas

Átomos combinados com uma função específica:

\`\`\`tsx
// Molécula: Campo de formulário
export function FormField({ label, ...inputProps }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input {...inputProps} />
    </div>
  );
}
\`\`\`

### 3. Organismos

Moléculas agrupadas em seções funcionais:

\`\`\`tsx
// Organismo: Header de navegação
export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="flex items-center justify-between px-6 py-4">
        <Logo />
        <Navigation />
        <SearchField />
        <UserMenu />
      </nav>
    </header>
  );
}
\`\`\`

### 4. Templates

Estrutura da página sem conteúdo real:

\`\`\`tsx
// Template: Layout de documentação
export function DocTemplate({ children }) {
  return (
    <div className="grid grid-cols-[250px_1fr_200px]">
      <Sidebar />
      <main className="px-12 py-8">{children}</main>
      <TableOfContents />
    </div>
  );
}
\`\`\`

### 5. Páginas

Templates preenchidos com conteúdo real.

## Benefícios Práticos

| Aspecto | Sem Atomic Design | Com Atomic Design |
|---------|-------------------|-------------------|
| Reutilização | Baixa | Alta |
| Consistência | Manual | Automática |
| Manutenção | Difícil | Localizada |
| Onboarding | Lento | Rápido |

## Aplicando Anti-AI ao Atomic Design

A tentação da IA é gerar componentes genéricos demais. Contrabalanceie:

1. **Átomos com personalidade**: Seu Button não precisa ser igual ao do Tailwind UI
2. **Moléculas opinativas**: Defina como campos de form DEVEM parecer
3. **Organismos contextuais**: Um Header de e-commerce é diferente de um de blog`,

      en: `# Atomic Design: From Molecule to Page

Created by Brad Frost, Atomic Design is a methodology that organizes UI components in a **chemistry-inspired hierarchy**.

## The Five Levels

\`\`\`mermaid
graph LR
    A[Atoms] --> B[Molecules]
    B --> C[Organisms]
    C --> D[Templates]
    D --> E[Pages]
    
    style A stroke:#333,stroke-width:1px
    style B stroke:#666,stroke-width:2px
    style C stroke:#999,stroke-width:3px
    style D stroke:#ccc,stroke-width:4px
    style E stroke:#fff,stroke-width:5px
\`\`\`

### 1. Atoms

The most basic building blocks — pure HTML elements:

\`\`\`tsx
// Atom: Input
export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className="border border-border bg-background px-3 py-2 font-mono text-sm"
      {...props}
    />
  );
}

// Atom: Label
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}
\`\`\`

### 2. Molecules

Atoms combined with a specific function:

\`\`\`tsx
// Molecule: Form field
export function FormField({ label, ...inputProps }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input {...inputProps} />
    </div>
  );
}
\`\`\`

### 3. Organisms

Molecules grouped into functional sections:

\`\`\`tsx
// Organism: Navigation header
export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="flex items-center justify-between px-6 py-4">
        <Logo />
        <Navigation />
        <SearchField />
        <UserMenu />
      </nav>
    </header>
  );
}
\`\`\`

### 4. Templates

Page structure without real content:

\`\`\`tsx
// Template: Documentation layout
export function DocTemplate({ children }) {
  return (
    <div className="grid grid-cols-[250px_1fr_200px]">
      <Sidebar />
      <main className="px-12 py-8">{children}</main>
      <TableOfContents />
    </div>
  );
}
\`\`\`

### 5. Pages

Templates filled with real content.

## Practical Benefits

| Aspect | Without Atomic Design | With Atomic Design |
|--------|----------------------|-------------------|
| Reuse | Low | High |
| Consistency | Manual | Automatic |
| Maintenance | Difficult | Localized |
| Onboarding | Slow | Fast |

## Applying Anti-AI to Atomic Design

AI's temptation is to generate overly generic components. Counterbalance:

1. **Atoms with personality**: Your Button doesn't need to look like Tailwind UI's
2. **Opinionated molecules**: Define how form fields MUST look
3. **Contextual organisms**: An e-commerce Header differs from a blog's`
    }
  },
  {
    id: 'design-thinking',
    slug: 'design-thinking',
    category: 'methodologies',
    order: 3,
    readingTime: 9,
    title: {
      pt: 'Design Thinking: Processo Centrado no Humano',
      en: 'Design Thinking: Human-Centered Process'
    },
    description: {
      pt: 'As cinco fases do Design Thinking e como aplicá-las em projetos digitais.',
      en: 'The five phases of Design Thinking and how to apply them in digital projects.'
    },
    content: {
      pt: `# Design Thinking: Processo Centrado no Humano

Design Thinking é uma abordagem **não-linear** para resolver problemas complexos, focando nas necessidades reais dos usuários antes de pensar em soluções.

## As Cinco Fases

### 1. Empatizar

Mergulhe no contexto do usuário:

- **Entrevistas em profundidade**: Perguntas abertas, sem julgamento
- **Observação contextual**: Veja o usuário no ambiente real
- **Shadowing**: Acompanhe um dia típico

**Anti-AI Insight**: IA não consegue empatizar. Ela só processa dados históricos. A empatia humana capta nuances, frustrações não verbalizadas, desejos latentes.

### 2. Definir

Sintetize os insights em um problema acionável:

\`\`\`
[PERSONA] precisa de [NECESSIDADE] porque [INSIGHT]

Exemplo:
"Profissionais remotos precisam de pausas estruturadas 
porque perdem noção do tempo quando em flow."
\`\`\`

### 3. Idear

Gere soluções sem censura inicial:

- **Brainstorming divergente**: Quantidade > Qualidade inicialmente
- **How Might We**: "Como poderíamos fazer X sem Y?"
- **Crazy 8s**: 8 ideias em 8 minutos

### 4. Prototipar

Construa para aprender, não para impressionar:

\`\`\`tsx
// Protótipo de baixa fidelidade em código
function BreakReminder() {
  return (
    <div className="fixed bottom-4 right-4 border border-accent p-4">
      <p className="font-mono text-sm">Pausa em 5 minutos</p>
      <div className="mt-2 flex gap-2">
        <button>Adiar</button>
        <button>Iniciar pausa</button>
      </div>
    </div>
  );
}
\`\`\`

### 5. Testar

Valide com usuários reais:

- **Testes moderados**: Observe, não guie
- **Métricas qualitativas**: "O que você sentiu quando..."
- **Iteração rápida**: Mude e teste de novo

## Design Thinking vs. AI-Driven Design

| Aspecto | Design Thinking | AI-Driven |
|---------|-----------------|-----------|
| Fonte | Empatia humana | Padrões de dados |
| Força | Inovação disruptiva | Otimização incremental |
| Risco | Lento, subjetivo | Viés, falta de contexto |
| Ideal para | Novos problemas | Problemas conhecidos |

## Quando Usar Cada Um

Use Design Thinking quando:
- O problema é mal definido
- Você está criando algo novo
- O contexto cultural é importante

Use AI quando:
- Você tem dados históricos ricos
- O problema é de otimização
- Precisa de escala e velocidade`,

      en: `# Design Thinking: Human-Centered Process

Design Thinking is a **non-linear** approach to solving complex problems, focusing on real user needs before thinking about solutions.

## The Five Phases

### 1. Empathize

Dive into the user's context:

- **In-depth interviews**: Open questions, no judgment
- **Contextual observation**: See the user in their real environment
- **Shadowing**: Follow a typical day

**Anti-AI Insight**: AI cannot empathize. It only processes historical data. Human empathy captures nuances, unverbalized frustrations, latent desires.

### 2. Define

Synthesize insights into an actionable problem:

\`\`\`
[PERSONA] needs [NEED] because [INSIGHT]

Example:
"Remote professionals need structured breaks 
because they lose track of time when in flow."
\`\`\`

### 3. Ideate

Generate solutions without initial censorship:

- **Divergent brainstorming**: Quantity > Quality initially
- **How Might We**: "How might we do X without Y?"
- **Crazy 8s**: 8 ideas in 8 minutes

### 4. Prototype

Build to learn, not to impress:

\`\`\`tsx
// Low-fidelity prototype in code
function BreakReminder() {
  return (
    <div className="fixed bottom-4 right-4 border border-accent p-4">
      <p className="font-mono text-sm">Break in 5 minutes</p>
      <div className="mt-2 flex gap-2">
        <button>Snooze</button>
        <button>Start break</button>
      </div>
    </div>
  );
}
\`\`\`

### 5. Test

Validate with real users:

- **Moderated tests**: Observe, don't guide
- **Qualitative metrics**: "What did you feel when..."
- **Fast iteration**: Change and test again

## Design Thinking vs. AI-Driven Design

| Aspect | Design Thinking | AI-Driven |
|--------|-----------------|-----------|
| Source | Human empathy | Data patterns |
| Strength | Disruptive innovation | Incremental optimization |
| Risk | Slow, subjective | Bias, lack of context |
| Ideal for | New problems | Known problems |

## When to Use Each

Use Design Thinking when:
- The problem is poorly defined
- You're creating something new
- Cultural context matters

Use AI when:
- You have rich historical data
- The problem is optimization
- You need scale and speed`
    }
  },
  {
    id: 'lean-ux',
    slug: 'lean-ux',
    category: 'methodologies',
    order: 4,
    readingTime: 8,
    title: {
      pt: 'Lean UX: Design Iterativo e Validado',
      en: 'Lean UX: Iterative and Validated Design'
    },
    description: {
      pt: 'Como aplicar princípios Lean para criar produtos digitais com menos desperdício.',
      en: 'How to apply Lean principles to create digital products with less waste.'
    },
    content: {
      pt: `# Lean UX: Design Iterativo e Validado

Lean UX adapta os princípios do Lean Startup para o design de experiências, focando em **aprendizado validado** em vez de entregas de alta fidelidade.

## Princípios Fundamentais

### 1. Build-Measure-Learn

O loop contínuo que guia tudo:

\`\`\`mermaid
graph TD
    A[CONSTRUIR] -->|Produto| B[MEDIR]
    B -->|Dados| C[APRENDER]
    C -->|Ideias| A
    
    style A fill:#000,color:#fff
    style B fill:#333,color:#fff
    style C fill:#666,color:#fff
\`\`\`\`\`

### 2. MVPs de Design

Em vez de um design perfeito, crie o **mínimo testável**:

\`\`\`tsx
// MVP: Teste de conceito com Wizard of Oz
function BookingFlow() {
  const handleSubmit = async (data) => {
    // Por enquanto, envia para um form manual
    // Sem backend real - validando demanda primeiro
    await fetch('/api/notify-team', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    return "Recebemos seu pedido. Entraremos em contato em 24h.";
  };
  
  return <Form onSubmit={handleSubmit} />;
}
\`\`\`

### 3. Outcomes Over Outputs

Não meça sucesso por entregas, mas por **mudanças de comportamento**:

| Output (Entrega) | Outcome (Resultado) |
|------------------|---------------------|
| 10 telas desenhadas | +15% taxa de conversão |
| Nova feature lançada | -20% tickets de suporte |
| Redesign completo | +8 pontos NPS |

## Técnicas Lean UX

### Hypothesis-Driven Design

Estruture cada feature como hipótese:

\`\`\`markdown
**Acreditamos que** adicionar um indicador de progresso no checkout
**Resultará em** menor abandono de carrinho
**Saberemos que funcionou quando** a taxa de conclusão aumentar 10%
\`\`\`

### Design Studio

Sessão colaborativa de ideação:

1. **5 min**: Cada um desenha 6-8 ideias individualmente
2. **3 min/pessoa**: Apresentação rápida
3. **10 min**: Votação e discussão
4. **15 min**: Síntese em 1-2 conceitos para testar

### Testes de Guerrilha

Validação rápida e barata:

- **Teste de 5 segundos**: Primeira impressão
- **Teste de corredor**: Usuários reais, ambiente não controlado
- **A/B testing**: Variações simultâneas

## Anti-AI na Prática Lean

Lean UX é fundamentalmente **humano**. AI pode acelerar partes do processo, mas:

- **Hipóteses vêm de empatia**, não de padrões
- **MVPs testam com pessoas reais**, não simulações
- **Aprendizado é contextual**, não generalizável`,

      en: `# Lean UX: Iterative and Validated Design

Lean UX adapts Lean Startup principles to experience design, focusing on **validated learning** instead of high-fidelity deliverables.

## Core Principles

### 1. Build-Measure-Learn

The continuous loop that guides everything:

\`\`\`mermaid
graph TD
    A[BUILD] -->|Product| B[MEASURE]
    B -->|Data| C[LEARN]
    C -->|Ideas| A
    
    style A fill:#000,color:#fff
    style B fill:#333,color:#fff
    style C fill:#666,color:#fff
\`\`\`\`\`

### 2. Design MVPs

Instead of a perfect design, create the **minimum testable**:

\`\`\`tsx
// MVP: Concept test with Wizard of Oz
function BookingFlow() {
  const handleSubmit = async (data) => {
    // For now, sends to a manual form
    // No real backend - validating demand first
    await fetch('/api/notify-team', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    return "We received your request. We'll contact you in 24h.";
  };
  
  return <Form onSubmit={handleSubmit} />;
}
\`\`\`

### 3. Outcomes Over Outputs

Don't measure success by deliverables, but by **behavior changes**:

| Output (Deliverable) | Outcome (Result) |
|----------------------|------------------|
| 10 screens designed | +15% conversion rate |
| New feature launched | -20% support tickets |
| Complete redesign | +8 NPS points |

## Lean UX Techniques

### Hypothesis-Driven Design

Structure each feature as a hypothesis:

\`\`\`markdown
**We believe that** adding a progress indicator to checkout
**Will result in** lower cart abandonment
**We'll know it worked when** completion rate increases by 10%
\`\`\`

### Design Studio

Collaborative ideation session:

1. **5 min**: Each person draws 6-8 ideas individually
2. **3 min/person**: Quick presentation
3. **10 min**: Voting and discussion
4. **15 min**: Synthesis into 1-2 concepts to test

### Guerrilla Testing

Fast and cheap validation:

- **5-second test**: First impression
- **Hallway test**: Real users, uncontrolled environment
- **A/B testing**: Simultaneous variations

## Anti-AI in Lean Practice

Lean UX is fundamentally **human**. AI can accelerate parts of the process, but:

- **Hypotheses come from empathy**, not patterns
- **MVPs test with real people**, not simulations
- **Learning is contextual**, not generalizable`
    }
  },
  {
    id: 'double-diamond',
    slug: 'double-diamond',
    category: 'methodologies',
    order: 5,
    readingTime: 7,
    title: {
      pt: 'Double Diamond: Divergir e Convergir',
      en: 'Double Diamond: Diverge and Converge'
    },
    description: {
      pt: 'O framework do Design Council para estruturar o processo criativo.',
      en: "The Design Council's framework for structuring the creative process."
    },
    content: {
      pt: `# Double Diamond: Divergir e Convergir

O Double Diamond é um modelo visual criado pelo Design Council britânico que mapeia o processo de design em **quatro fases distintas**.

## Os Dois Diamantes

### Diamante 1: Problema Certo

**Discover (Divergir)**: Explore o espaço do problema
- Pesquisa com usuários
- Análise de mercado
- Mapeamento de stakeholders

**Define (Convergir)**: Sintetize em um problema focado
- Personas e jornadas
- Problem statement
- Critérios de sucesso

### Diamante 2: Solução Certa

**Develop (Divergir)**: Gere múltiplas soluções
- Brainstorming
- Prototipagem rápida
- Benchmarking

**Deliver (Convergir)**: Refine e implemente
- Testes de usabilidade
- Iteração
- Lançamento

## Visualização do Processo

\`\`\`
      DIVERGIR        CONVERGIR       DIVERGIR        CONVERGIR
         ◇                ◇              ◇                ◇
        /  \\              /  \\            /  \\              /  \\
       /    \\            /    \\          /    \\            /    \\
      /      \\          /      \\        /      \\          /      \\
     / DISCOVER \\      / DEFINE  \\      / DEVELOP \\      / DELIVER \\
    ◇──────────◇──────◇──────────◇──────◇──────────◇──────◇──────────◇
              PROBLEMA CERTO              SOLUÇÃO CERTA
\`\`\`

## Aplicação Prática

### Fase Discover

\`\`\`tsx
// Ferramenta: Mapa de empatia em código
interface EmpathyMap {
  says: string[];   // Citações diretas
  thinks: string[]; // Pensamentos inferidos
  does: string[];   // Comportamentos observados
  feels: string[];  // Emoções identificadas
}

const userResearch: EmpathyMap = {
  says: ["Não tenho tempo para isso"],
  thinks: ["Será que estou fazendo certo?"],
  does: ["Abre 10 abas antes de decidir"],
  feels: ["Ansiedade", "Overwhelmed"]
};
\`\`\`

### Fase Define

Crie um Problem Statement acionável:

> "Como podemos ajudar **profissionais ocupados** a **tomar decisões de compra** de forma **rápida e confiante**, considerando que eles **se sentem overwhelmed por opções**?"

## Double Diamond + Anti-AI

O modelo incentiva **exploração genuína** antes de soluções. AI tende a pular para soluções baseadas em padrões. Use o Double Diamond para garantir que você está resolvendo o problema certo — não apenas o problema mais comum.`,

      en: `# Double Diamond: Diverge and Converge

The Double Diamond is a visual model created by the British Design Council that maps the design process into **four distinct phases**.

## The Two Diamonds

### Diamond 1: Right Problem

**Discover (Diverge)**: Explore the problem space
- User research
- Market analysis
- Stakeholder mapping

**Define (Converge)**: Synthesize into a focused problem
- Personas and journeys
- Problem statement
- Success criteria

### Diamond 2: Right Solution

**Develop (Diverge)**: Generate multiple solutions
- Brainstorming
- Rapid prototyping
- Benchmarking

**Deliver (Converge)**: Refine and implement
- Usability testing
- Iteration
- Launch

## Process Visualization

\`\`\`
      DIVERGE          CONVERGE        DIVERGE          CONVERGE
         ◇                ◇              ◇                ◇
        /  \\              /  \\            /  \\              /  \\
       /    \\            /    \\          /    \\            /    \\
      /      \\          /      \\        /      \\          /      \\
     / DISCOVER \\      / DEFINE  \\      / DEVELOP \\      / DELIVER \\
    ◇──────────◇──────◇──────────◇──────◇──────────◇──────◇──────────◇
              RIGHT PROBLEM               RIGHT SOLUTION
\`\`\`

## Practical Application

### Discover Phase

\`\`\`tsx
// Tool: Empathy map in code
interface EmpathyMap {
  says: string[];   // Direct quotes
  thinks: string[]; // Inferred thoughts
  does: string[];   // Observed behaviors
  feels: string[];  // Identified emotions
}

const userResearch: EmpathyMap = {
  says: ["I don't have time for this"],
  thinks: ["Am I doing this right?"],
  does: ["Opens 10 tabs before deciding"],
  feels: ["Anxiety", "Overwhelmed"]
};
\`\`\`

### Define Phase

Create an actionable Problem Statement:

> "How might we help **busy professionals** to **make purchase decisions** in a **quick and confident** way, considering they **feel overwhelmed by options**?"

## Double Diamond + Anti-AI

The model encourages **genuine exploration** before solutions. AI tends to jump to pattern-based solutions. Use the Double Diamond to ensure you're solving the right problem — not just the most common one.`
    }
  }
];
