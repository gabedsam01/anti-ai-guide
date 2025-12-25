import { Article } from '../types';

export const uxFoundationsArticles: Article[] = [
  {
    id: 'ux-honeycomb',
    slug: 'ux-honeycomb',
    title: {
      pt: 'O Honeycomb de Morville',
      en: "Morville's Honeycomb",
    },
    description: {
      pt: 'Os 7 fatores que definem uma experiência de usuário excelente.',
      en: 'The 7 factors that define an excellent user experience.',
    },
    category: 'ux-foundations',
    content: {
      pt: `# O Honeycomb de Morville

## Framework para UX Completa

Peter Morville, um pioneiro fundamental no campo de UX, desenvolveu o **UX Honeycomb Framework** — um modelo que articula sete dimensões críticas que definem uma experiência bem-sucedida.

## Os 7 Fatores

### 1. Útil (Useful)
O produto deve servir um propósito real e ter valor tangível para seus usuários.

> Um produto inútil, não importa quão bem projetado esteticamente, falha fundamentalmente.

### 2. Utilizável (Usable)
A facilidade de uso é crítica. Interfaces devem ser intuitivas, permitindo que usuários completem tarefas com eficiência e sem frustrações.

### 3. Encontrável (Findable)
A capacidade do usuário navegar e localizar informações ou funcionalidades é essencial.

> Arquitetura da informação deficiente prejudica toda a experiência, mesmo que a interface seja bonita.

### 4. Credível (Credible)
Os usuários precisam confiar no produto. Credibilidade é construída através de:
- Transparência
- Design consistente
- Segurança demonstrada

### 5. Desejável (Desirable)
A experiência deve evocar emoções positivas e criar conexão emocional. Elementos como:
- Marca
- Design visual
- Storytelling

### 6. Acessível (Accessible)
Produtos devem ser usáveis por todas as pessoas, independente de suas habilidades ou limitações.

> Acessibilidade não é um recurso "extra" — é fundamental para uma boa UX.

### 7. Valioso (Valuable)
O produto deve entregar valor tanto para o usuário quanto para o negócio.

## Aplicação Anti-AI

O honeycomb é mais que um checklist: **cada fator influencia os outros**.

Um produto pode ser:
- Encontrável mas não crível
- Desejável mas inutilizável
- Útil mas não acessível

A excelência em UX requer atenção a todos os sete fatores **simultaneamente**.

\`\`\`
       Útil
      /    \\
 Credível  Utilizável
    |    X    |
 Desejável  Encontrável
      \\    /
     Acessível
         |
      Valioso
\`\`\`

## Checklist Honeycomb

- [ ] Meu produto resolve um problema real? (Útil)
- [ ] Usuários conseguem completar tarefas facilmente? (Utilizável)
- [ ] A navegação é clara e intuitiva? (Encontrável)
- [ ] O produto transmite confiança? (Credível)
- [ ] A experiência cria conexão emocional? (Desejável)
- [ ] Pessoas com deficiências podem usar? (Acessível)
- [ ] Há valor para usuário E negócio? (Valioso)`,
      en: `# Morville's Honeycomb

## Framework for Complete UX

Peter Morville, a fundamental pioneer in the UX field, developed the **UX Honeycomb Framework** — a model that articulates seven critical dimensions that define a successful experience.

## The 7 Factors

### 1. Useful
The product must serve a real purpose and have tangible value for its users.

> A useless product, no matter how well designed aesthetically, fails fundamentally.

### 2. Usable
Ease of use is critical. Interfaces must be intuitive, allowing users to complete tasks efficiently and without frustration.

### 3. Findable
The user's ability to navigate and locate information or functionality is essential.

> Poor information architecture undermines the entire experience, even if the interface is beautiful.

### 4. Credible
Users need to trust the product. Credibility is built through:
- Transparency
- Consistent design
- Demonstrated security

### 5. Desirable
The experience should evoke positive emotions and create emotional connection. Elements like:
- Brand
- Visual design
- Storytelling

### 6. Accessible
Products must be usable by all people, regardless of their abilities or limitations.

> Accessibility is not an "extra" feature — it's fundamental to good UX.

### 7. Valuable
The product must deliver value to both the user and the business.

## Anti-AI Application

The honeycomb is more than a checklist: **each factor influences the others**.

A product can be:
- Findable but not credible
- Desirable but unusable
- Useful but not accessible

UX excellence requires attention to all seven factors **simultaneously**.

\`\`\`
       Useful
      /      \\
 Credible  Usable
    |    X    |
 Desirable  Findable
      \\    /
     Accessible
         |
      Valuable
\`\`\`

## Honeycomb Checklist

- [ ] Does my product solve a real problem? (Useful)
- [ ] Can users complete tasks easily? (Usable)
- [ ] Is navigation clear and intuitive? (Findable)
- [ ] Does the product convey trust? (Credible)
- [ ] Does the experience create emotional connection? (Desirable)
- [ ] Can people with disabilities use it? (Accessible)
- [ ] Is there value for user AND business? (Valuable)`,
    },
    readingTime: 5,
    order: 1,
  },
  {
    id: 'fitts-law',
    slug: 'fitts-law',
    title: {
      pt: 'Lei de Fitts',
      en: "Fitts's Law",
    },
    description: {
      pt: 'Como tamanho e distância afetam a usabilidade de elementos.',
      en: 'How size and distance affect element usability.',
    },
    category: 'ux-foundations',
    content: {
      pt: `# Lei de Fitts

## A Matemática da Interação

A Lei de Fitts quantifica a relação entre o **tamanho de um alvo**, sua **distância** e o **tempo necessário** para alcançá-lo.

> Quanto maior a distância até um alvo e menor seu tamanho, mais tempo levará para o usuário alcançá-lo com precisão.

## Fórmula Simplificada

\`\`\`
Tempo = a + b × log₂(Distância/Tamanho + 1)
\`\`\`

Na prática, isso significa:
- **Alvos maiores** = mais rápido de alcançar
- **Alvos mais próximos** = mais rápido de alcançar
- **Cantos e bordas** = infinitamente grandes (o cursor para ali)

## Implicações Práticas

### Elementos frequentemente usados devem ser:

1. **Maiores em tamanho** (aumentando a área clicável)
2. **Posicionados estrategicamente** (reduzindo distância de movimento)
3. **Próximos de elementos relacionados** (agrupamento lógico)

## Aplicação Anti-AI

IA genérica cria botões de tamanho uniforme sem considerar frequência de uso.

\`\`\`tsx
// ❌ Todos os botões iguais (Anti-Fitts)
<Button size="md">Ação Primária</Button>
<Button size="md">Ação Secundária</Button>
<Button size="md">Cancelar</Button>

// ✅ Tamanho proporcional à importância
<Button size="lg" className="w-full">
  Ação Primária
</Button>
<Button size="md" variant="secondary">
  Ação Secundária
</Button>
<Button size="sm" variant="ghost">
  Cancelar
</Button>
\`\`\`

### Cantos Mágicos

Os cantos da tela são alvos "infinitos" — o cursor não pode passar deles.

\`\`\`tsx
// Posicionar ações importantes nos cantos
<nav className="fixed bottom-0 right-0">
  <FloatingActionButton />
</nav>
\`\`\`

## Checklist Lei de Fitts

- [ ] Ações primárias têm área clicável maior?
- [ ] Botões importantes estão próximos da ação anterior?
- [ ] Elementos destrutivos estão distantes de ações comuns?
- [ ] Touch targets têm pelo menos 44x44px em mobile?
- [ ] Ações frequentes estão acessíveis sem scroll?`,
      en: `# Fitts's Law

## The Mathematics of Interaction

Fitts's Law quantifies the relationship between an **target's size**, its **distance**, and the **time needed** to reach it.

> The greater the distance to a target and the smaller its size, the longer it will take the user to reach it accurately.

## Simplified Formula

\`\`\`
Time = a + b × log₂(Distance/Size + 1)
\`\`\`

In practice, this means:
- **Larger targets** = faster to reach
- **Closer targets** = faster to reach
- **Corners and edges** = infinitely large (cursor stops there)

## Practical Implications

### Frequently used elements should be:

1. **Larger in size** (increasing clickable area)
2. **Strategically positioned** (reducing movement distance)
3. **Close to related elements** (logical grouping)

## Anti-AI Application

Generic AI creates uniform-sized buttons without considering usage frequency.

\`\`\`tsx
// ❌ All buttons the same (Anti-Fitts)
<Button size="md">Primary Action</Button>
<Button size="md">Secondary Action</Button>
<Button size="md">Cancel</Button>

// ✅ Size proportional to importance
<Button size="lg" className="w-full">
  Primary Action
</Button>
<Button size="md" variant="secondary">
  Secondary Action
</Button>
<Button size="sm" variant="ghost">
  Cancel
</Button>
\`\`\`

### Magic Corners

Screen corners are "infinite" targets — the cursor can't pass them.

\`\`\`tsx
// Position important actions in corners
<nav className="fixed bottom-0 right-0">
  <FloatingActionButton />
</nav>
\`\`\`

## Fitts's Law Checklist

- [ ] Do primary actions have larger clickable area?
- [ ] Are important buttons close to the previous action?
- [ ] Are destructive elements away from common actions?
- [ ] Do touch targets have at least 44x44px on mobile?
- [ ] Are frequent actions accessible without scrolling?`,
    },
    readingTime: 4,
    order: 2,
  },
];
