import { Article } from '../types';

export const uiFoundationsArticles: Article[] = [
  {
    id: 'consistency-principle',
    slug: 'consistency-principle',
    title: {
      pt: 'Princípio da Consistência',
      en: 'Consistency Principle',
    },
    description: {
      pt: 'Por que uniformidade reduz carga cognitiva e cria familiaridade.',
      en: 'Why uniformity reduces cognitive load and creates familiarity.',
    },
    category: 'ui-foundations',
    content: {
      pt: `# Princípio da Consistência

## O Fundamento da Intuição

A consistência refere-se à manutenção da uniformidade dos elementos e comportamentos dentro de uma interface. Quando um botão funciona de uma forma, o usuário espera que todos os botões funcionem de maneira similar.

## Por que Consistência Importa?

Esta uniformidade cria familiaridade, reduzindo a curva de aprendizado e permitindo que os usuários se concentrem na **tarefa** em vez de decifrar a interface.

> Estudos demonstram que inconsistências aumentam a carga cognitiva dos usuários, criando hesitação e confusão desnecessária.

## Tipos de Consistência

### 1. Consistência Visual
- Mesmas cores para mesmas ações
- Tipografia uniforme
- Espaçamento previsível

### 2. Consistência Funcional
- Mesmo gesto = mesma ação
- Padrões de navegação uniformes
- Feedback previsível

### 3. Consistência Externa
- Seguir convenções da plataforma
- Padrões conhecidos do usuário

## Implementação Anti-AI

O problema com IA genérica é que ela segue "melhores práticas" sem contexto. Consistência real vem de **decisões intencionais**.

\`\`\`tsx
// ❌ Inconsistência típica de IA
<Button variant="primary">Salvar</Button>
<Button variant="secondary">Cancelar</Button>
<button className="custom-btn">Excluir</button>

// ✅ Consistência Anti-AI
<Button variant="primary">Salvar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="destructive">Excluir</Button>
\`\`\`

## Checklist de Consistência

- [ ] Todos os botões seguem o mesmo sistema de variantes?
- [ ] Os ícones têm estilo visual uniforme?
- [ ] As animações têm timing consistente?
- [ ] Os feedbacks de erro seguem o mesmo padrão?
- [ ] A tipografia segue a hierarquia definida?`,
      en: `# Consistency Principle

## The Foundation of Intuition

Consistency refers to maintaining uniformity of elements and behaviors within an interface. When a button works one way, users expect all buttons to work similarly.

## Why Consistency Matters?

This uniformity creates familiarity, reducing the learning curve and allowing users to focus on the **task** rather than deciphering the interface.

> Studies show that inconsistencies increase users' cognitive load, creating unnecessary hesitation and confusion.

## Types of Consistency

### 1. Visual Consistency
- Same colors for same actions
- Uniform typography
- Predictable spacing

### 2. Functional Consistency
- Same gesture = same action
- Uniform navigation patterns
- Predictable feedback

### 3. External Consistency
- Following platform conventions
- Known user patterns

## Anti-AI Implementation

The problem with generic AI is that it follows "best practices" without context. Real consistency comes from **intentional decisions**.

\`\`\`tsx
// ❌ Typical AI inconsistency
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<button className="custom-btn">Delete</button>

// ✅ Anti-AI consistency
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive">Delete</Button>
\`\`\`

## Consistency Checklist

- [ ] Do all buttons follow the same variant system?
- [ ] Do icons have uniform visual style?
- [ ] Do animations have consistent timing?
- [ ] Do error feedbacks follow the same pattern?
- [ ] Does typography follow the defined hierarchy?`,
    },
    readingTime: 4,
    order: 1,
  },
  {
    id: 'feedback-principle',
    slug: 'feedback-principle',
    title: {
      pt: 'Princípio do Feedback',
      en: 'Feedback Principle',
    },
    description: {
      pt: 'Como respostas imediatas do sistema criam confiança no usuário.',
      en: 'How immediate system responses create user trust.',
    },
    category: 'ui-foundations',
    content: {
      pt: `# Princípio do Feedback

## A Resposta que o Usuário Precisa

O feedback é a resposta que um sistema deve fornecer após cada ação do usuário. Este princípio é fundamental porque permite que os usuários confirmem que suas ações foram registradas e processadas.

## Tipos de Feedback

### Visual
- Mudanças de cor
- Animações
- Indicadores de progresso

### Auditivo
- Sons de confirmação
- Alertas sonoros

### Háptico
- Vibrações (mobile)
- Force feedback

### Textual
- Mensagens de confirmação
- Mensagens de erro

## Por que Feedback Imediato?

O feedback deve ser **imediato**. Atrasos podem causar confusão e levar os usuários a repetirem ações desnecessariamente.

> Delay maior que 100ms = usuário nota o atraso
> Delay maior que 1s = usuário perde o fluxo de pensamento

## Implementação Anti-AI

Feedback genérico de IA é previsível e sem personalidade. Feedback Anti-AI tem **caráter**.

\`\`\`tsx
// ❌ Feedback genérico
toast.success("Operação realizada com sucesso!");

// ✅ Feedback com personalidade
toast.success("Pronto! Seu arquivo foi salvo.", {
  description: "Última modificação: agora mesmo",
  action: {
    label: "Desfazer",
    onClick: () => handleUndo()
  }
});
\`\`\`

## Estados de Feedback

\`\`\`css
/* Estados visuais claros */
.button {
  /* Default */
  background: var(--primary);
  
  /* Hover - feedback de intenção */
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  /* Active - feedback de ação */
  &:active {
    transform: translateY(0);
  }
  
  /* Loading - feedback de processo */
  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
}
\`\`\`

## Checklist de Feedback

- [ ] Cada ação tem resposta visual imediata?
- [ ] Estados de loading são claros?
- [ ] Erros explicam o que aconteceu E como resolver?
- [ ] Sucesso confirma a ação específica realizada?
- [ ] Transições suavizam mudanças de estado?`,
      en: `# Feedback Principle

## The Response Users Need

Feedback is the response a system must provide after each user action. This principle is fundamental because it allows users to confirm their actions were registered and processed.

## Types of Feedback

### Visual
- Color changes
- Animations
- Progress indicators

### Auditory
- Confirmation sounds
- Sound alerts

### Haptic
- Vibrations (mobile)
- Force feedback

### Textual
- Confirmation messages
- Error messages

## Why Immediate Feedback?

Feedback must be **immediate**. Delays can cause confusion and lead users to repeat actions unnecessarily.

> Delay greater than 100ms = user notices the delay
> Delay greater than 1s = user loses train of thought

## Anti-AI Implementation

Generic AI feedback is predictable and personality-less. Anti-AI feedback has **character**.

\`\`\`tsx
// ❌ Generic feedback
toast.success("Operation completed successfully!");

// ✅ Feedback with personality
toast.success("Done! Your file was saved.", {
  description: "Last modified: just now",
  action: {
    label: "Undo",
    onClick: () => handleUndo()
  }
});
\`\`\`

## Feedback States

\`\`\`css
/* Clear visual states */
.button {
  /* Default */
  background: var(--primary);
  
  /* Hover - intention feedback */
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  /* Active - action feedback */
  &:active {
    transform: translateY(0);
  }
  
  /* Loading - process feedback */
  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
}
\`\`\`

## Feedback Checklist

- [ ] Does each action have immediate visual response?
- [ ] Are loading states clear?
- [ ] Do errors explain what happened AND how to fix?
- [ ] Does success confirm the specific action taken?
- [ ] Do transitions smooth state changes?`,
    },
    readingTime: 5,
    order: 2,
  },
  {
    id: 'affordance-principle',
    slug: 'affordance-principle',
    title: {
      pt: 'Princípio da Affordance',
      en: 'Affordance Principle',
    },
    description: {
      pt: 'Como elementos visuais comunicam suas funções intuitivamente.',
      en: 'How visual elements communicate their functions intuitively.',
    },
    category: 'ui-foundations',
    content: {
      pt: `# Princípio da Affordance

## O Que os Elementos "Dizem" ao Usuário

Affordance é o conceito de que as características visuais e funcionais de um objeto sugerem como ele pode ser usado.

Em termos práticos: um botão que **parece clicável** (através de sombras, cores contrastantes ou outras pistas visuais) aforda a ação de clique.

## Tipos de Affordance

### Affordance Percebida
Como o elemento **parece** que funciona

### Affordance Real
Como o elemento **realmente** funciona

> Quando a affordance percebida se alinha com a affordance real, criamos interfaces intuitivas.

## Exemplos Claros

| Elemento | Affordance | Ação Esperada |
|----------|------------|---------------|
| 🔍 Lupa | Busca | Clicar para pesquisar |
| ⚙️ Engrenagem | Configurações | Acessar opções |
| 🔗 Texto sublinhado | Link | Clicar para navegar |
| ☰ Hambúrguer | Menu | Expandir navegação |

## O Problema Anti-AI

IA genérica cria elementos que "parecem" interativos mas não são, ou vice-versa. Isso quebra a confiança do usuário.

\`\`\`tsx
// ❌ Affordance quebrada
<div className="text-blue-500 cursor-pointer">
  Texto que parece link mas não é
</div>

// ✅ Affordance clara
<Link to="/about" className="text-accent underline">
  Sobre nós
</Link>

// ❌ Botão que não parece botão
<span onClick={handleClick}>Clique aqui</span>

// ✅ Botão que claramente é botão
<Button onClick={handleClick}>
  Clique aqui
</Button>
\`\`\`

## Reduzindo Carga Cognitiva

A affordance reduz a carga cognitiva ao deixar **explícito** para os usuários quais ações são possíveis.

### Pistas Visuais de Affordance:

- **Sombras**: Sugerem que elemento pode ser pressionado
- **Gradientes sutis**: Indicam superfície interativa
- **Bordas**: Definem limites clicáveis
- **Cursor**: Muda para pointer em elementos interativos
- **Ícones**: Comunicam função esperada

## Checklist de Affordance

- [ ] Elementos clicáveis parecem clicáveis?
- [ ] Links são visualmente distintos de texto normal?
- [ ] Inputs parecem editáveis?
- [ ] Elementos arrastáveis têm indicação visual?
- [ ] O cursor muda apropriadamente?`,
      en: `# Affordance Principle

## What Elements "Tell" the User

Affordance is the concept that the visual and functional characteristics of an object suggest how it can be used.

In practical terms: a button that **looks clickable** (through shadows, contrasting colors, or other visual cues) affords the click action.

## Types of Affordance

### Perceived Affordance
How the element **appears** to work

### Real Affordance
How the element **actually** works

> When perceived affordance aligns with real affordance, we create intuitive interfaces.

## Clear Examples

| Element | Affordance | Expected Action |
|---------|------------|-----------------|
| 🔍 Magnifying glass | Search | Click to search |
| ⚙️ Gear | Settings | Access options |
| 🔗 Underlined text | Link | Click to navigate |
| ☰ Hamburger | Menu | Expand navigation |

## The Anti-AI Problem

Generic AI creates elements that "look" interactive but aren't, or vice versa. This breaks user trust.

\`\`\`tsx
// ❌ Broken affordance
<div className="text-blue-500 cursor-pointer">
  Text that looks like a link but isn't
</div>

// ✅ Clear affordance
<Link to="/about" className="text-accent underline">
  About us
</Link>

// ❌ Button that doesn't look like a button
<span onClick={handleClick}>Click here</span>

// ✅ Button that clearly is a button
<Button onClick={handleClick}>
  Click here
</Button>
\`\`\`

## Reducing Cognitive Load

Affordance reduces cognitive load by making **explicit** to users which actions are possible.

### Visual Affordance Cues:

- **Shadows**: Suggest element can be pressed
- **Subtle gradients**: Indicate interactive surface
- **Borders**: Define clickable boundaries
- **Cursor**: Changes to pointer on interactive elements
- **Icons**: Communicate expected function

## Affordance Checklist

- [ ] Do clickable elements look clickable?
- [ ] Are links visually distinct from normal text?
- [ ] Do inputs look editable?
- [ ] Do draggable elements have visual indication?
- [ ] Does cursor change appropriately?`,
    },
    readingTime: 4,
    order: 3,
  },
];
