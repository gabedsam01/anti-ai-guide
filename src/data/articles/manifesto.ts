import { Article } from '../types';

export const manifestoArticles: Article[] = [
  {
    id: 'what-is-anti-ai-design',
    slug: 'what-is-anti-ai-design',
    title: {
      pt: 'O que é Design Anti-AI?',
      en: 'What is Anti-AI Design?',
    },
    description: {
      pt: 'Por que precisamos fugir da estética genérica e criar interfaces com alma.',
      en: 'Why we need to escape generic aesthetics and create interfaces with soul.',
    },
    category: 'manifesto',
    content: {
      pt: `# O que é Design Anti-AI?

## O Problema com Interfaces Genéricas

Em 2025, assistimos a uma explosão de ferramentas de IA capazes de gerar interfaces "bonitas" em segundos. O resultado? Um mar de sites que parecem todos iguais: gradientes suaves roxo-azulados, bordas super arredondadas, sombras difusas e tipografia genérica como Inter ou Poppins.

Chamamos isso de **"estética plastificada"** — interfaces que parecem polidas, mas não têm personalidade. São tecnicamente corretas, mas emocionalmente vazias.

## O Manifesto Anti-AI

Design Anti-AI não é anti-tecnologia. É anti-mediocridade.

É sobre usar a IA como ferramenta, não como muleta. É sobre fazer escolhas **intencionais** em vez de aceitar defaults genéricos.

### Os 5 Princípios do Design Anti-AI:

1. **Tátil & Cru**: Texturas, bordas nítidas, sensação de materialidade
2. **Tipografia Agressiva**: Hierarquia forte, fontes com personalidade
3. **Cores Intencionais**: Paleta limitada com propósito, não degradês aleatórios
4. **Geometria Honesta**: Cantos retos quando faz sentido, não \`rounded-full\` em tudo
5. **Detalhes que Importam**: Micro-interações pensadas, não animações de template

## Por que isso importa?

Quando todas as interfaces parecem iguais, perdemos a capacidade de criar experiências memoráveis. Usuários não se conectam com produtos genéricos.

> "O design não é apenas o que parece e o que você sente. Design é como funciona." — Steve Jobs

Mas acrescentamos: **design também é como você se lembra**. E você não se lembra do genérico.

## Como usar este guia

Este guia é dividido em seções práticas:

- **Fundamentos de UI**: Princípios visuais que dão alma às interfaces
- **Fundamentos de UX**: Como criar experiências significativas
- **Metodologias**: Processos de trabalho para design consistente
- **Tendências 2025**: O que vem pela frente (e o que evitar)
- **Ética & Acessibilidade**: Design responsável e inclusivo

Cada artigo inclui exemplos de código e checklists práticos para você aplicar imediatamente.

---

*"A beleza do design Anti-AI é que ele te força a pensar. E pensar é o primeiro passo para criar algo memorável."*`,
      en: `# What is Anti-AI Design?

## The Problem with Generic Interfaces

In 2025, we've witnessed an explosion of AI tools capable of generating "beautiful" interfaces in seconds. The result? A sea of websites that all look the same: soft purple-blue gradients, super-rounded borders, diffuse shadows, and generic typography like Inter or Poppins.

We call this the **"plastic aesthetic"** — interfaces that look polished but have no personality. They're technically correct but emotionally empty.

## The Anti-AI Manifesto

Anti-AI design is not anti-technology. It's anti-mediocrity.

It's about using AI as a tool, not a crutch. It's about making **intentional** choices instead of accepting generic defaults.

### The 5 Principles of Anti-AI Design:

1. **Tactile & Raw**: Textures, sharp edges, sense of materiality
2. **Aggressive Typography**: Strong hierarchy, fonts with personality
3. **Intentional Colors**: Limited palette with purpose, not random gradients
4. **Honest Geometry**: Square corners when it makes sense, not \`rounded-full\` on everything
5. **Details that Matter**: Thoughtful micro-interactions, not template animations

## Why does this matter?

When all interfaces look the same, we lose the ability to create memorable experiences. Users don't connect with generic products.

> "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs

But we add: **design is also how you remember it**. And you don't remember the generic.

## How to use this guide

This guide is divided into practical sections:

- **UI Foundations**: Visual principles that give soul to interfaces
- **UX Foundations**: How to create meaningful experiences
- **Methodologies**: Work processes for consistent design
- **Trends 2025**: What's coming (and what to avoid)
- **Ethics & Accessibility**: Responsible and inclusive design

Each article includes code examples and practical checklists you can apply immediately.

---

*"The beauty of Anti-AI design is that it forces you to think. And thinking is the first step to creating something memorable."*`,
    },
    readingTime: 5,
    order: 1,
    isNew: true,
  },
  {
    id: 'ui-vs-ux-clarity',
    slug: 'ui-vs-ux-clarity',
    title: {
      pt: 'UI vs UX: Clareza Definitiva',
      en: 'UI vs UX: Definitive Clarity',
    },
    description: {
      pt: 'Entenda de uma vez a diferença entre interface e experiência.',
      en: 'Finally understand the difference between interface and experience.',
    },
    category: 'manifesto',
    content: {
      pt: `# UI vs UX: Clareza Definitiva

## A Confusão Eterna

Mesmo em 2025, designers e desenvolvedores confundem UI e UX constantemente. Vamos resolver isso de uma vez.

## O que é UI (User Interface)?

A **User Interface (UI)** refere-se ao conjunto de elementos visuais, interativos e informativos através dos quais os usuários interagem com produtos digitais.

UI design é o processo que se concentra em criar uma interação contínua e intuitiva entre o usuário e o produto digital, enfatizando:

- **Clareza**: Elementos fáceis de entender
- **Eficiência**: Ações realizadas com mínimo esforço
- **Estética**: Apelo visual intencional

### Elementos de UI:
- Esquemas de cores
- Tipografia
- Elementos de navegação
- Estilos de botões
- Padrões de layout
- Ícones e ilustrações

## O que é UX (User Experience)?

A **User Experience (UX)** é um conceito mais amplo que engloba toda a jornada do usuário ao interagir com um produto ou serviço.

Inclui:
- Percepções do usuário
- Respostas comportamentais
- Respostas psicológicas
- Satisfação geral

## A Analogia Definitiva

> **UI é a pintura** que torna o produto visualmente atraente.
> **UX é a estrutura e infraestrutura** que fundamenta como o produto funciona e como o usuário se sente ao utilizá-lo.

### Exemplo prático:

\`\`\`
Um botão bem projetado → UI
A facilidade de encontrar e usar esse botão → UX
\`\`\`

## Relação Simbiótica

UI e UX são interdependentes:

- **UI sem UX**: Interface bonita, experiência frustrante
- **UX sem UI**: Experiência lógica, interface feia
- **UI + UX**: Produto memorável

## Checklist Anti-AI

- [ ] Minha UI tem personalidade visual distintiva?
- [ ] Minha UX resolve problemas reais do usuário?
- [ ] Os dois trabalham juntos harmonicamente?
- [ ] Fugi dos defaults genéricos de IA?`,
      en: `# UI vs UX: Definitive Clarity

## The Eternal Confusion

Even in 2025, designers and developers constantly confuse UI and UX. Let's solve this once and for all.

## What is UI (User Interface)?

**User Interface (UI)** refers to the set of visual, interactive, and informational elements through which users interact with digital products.

UI design is the process focused on creating continuous and intuitive interaction between user and digital product, emphasizing:

- **Clarity**: Easy to understand elements
- **Efficiency**: Actions performed with minimal effort
- **Aesthetics**: Intentional visual appeal

### UI Elements:
- Color schemes
- Typography
- Navigation elements
- Button styles
- Layout patterns
- Icons and illustrations

## What is UX (User Experience)?

**User Experience (UX)** is a broader concept that encompasses the entire user journey when interacting with a product or service.

It includes:
- User perceptions
- Behavioral responses
- Psychological responses
- Overall satisfaction

## The Definitive Analogy

> **UI is the painting** that makes the product visually attractive.
> **UX is the structure and infrastructure** that underlies how the product works and how the user feels using it.

### Practical example:

\`\`\`
A well-designed button → UI
The ease of finding and using that button → UX
\`\`\`

## Symbiotic Relationship

UI and UX are interdependent:

- **UI without UX**: Beautiful interface, frustrating experience
- **UX without UI**: Logical experience, ugly interface
- **UI + UX**: Memorable product

## Anti-AI Checklist

- [ ] Does my UI have distinctive visual personality?
- [ ] Does my UX solve real user problems?
- [ ] Do they work together harmonically?
- [ ] Did I escape generic AI defaults?`,
    },
    readingTime: 4,
    order: 2,
  },
];
