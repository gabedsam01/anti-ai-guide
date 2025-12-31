import { Article } from '../types';

export const caseStudiesArticles: Article[] = [
  {
    id: 'case-stripe',
    slug: 'stripe-design-system',
    category: 'case-studies',
    order: 1,
    readingTime: 10,
    title: {
      pt: 'Stripe: Design System que Escala',
      en: 'Stripe: Design System that Scales'
    },
    description: {
      pt: 'Como a Stripe construiu um sistema de design que mantém consistência em centenas de produtos.',
      en: 'How Stripe built a design system that maintains consistency across hundreds of products.'
    },
    content: {
      pt: `# Stripe: Design System que Escala

A Stripe é frequentemente citada como exemplo de **design excepcional em fintech**. Mas o que torna sua abordagem tão eficaz?

## O Contexto

- **Problema**: Centenas de produtos (Dashboard, Docs, Checkout, etc.)
- **Desafio**: Manter consistência sem sufocar criatividade
- **Solução**: Design System como "API de UI"

## Princípios do Stripe Design

### 1. Invisible Excellence

A UI da Stripe é notável por **não chamar atenção**. Ela funciona tão bem que desaparece:

\`\`\`tsx
// Princípio: Menos é mais
// Nenhum elemento decorativo sem função
<PaymentForm>
  <Input label="Número do cartão" />
  <Row>
    <Input label="Validade" />
    <Input label="CVC" />
  </Row>
  <Button>Pagar R$99,00</Button>
</PaymentForm>
// Sem ícones desnecessários, sem badges, sem animações distratoras
\`\`\`

### 2. Micro-interactions Significativas

Cada animação tem propósito:

\`\`\`tsx
// Feedback visual durante processamento
function PayButton({ amount, onPay }) {
  const [state, setState] = useState<'idle' | 'processing' | 'success'>('idle');
  
  return (
    <Button 
      onClick={async () => {
        setState('processing');
        await onPay();
        setState('success');
      }}
      className={cn(
        'transition-all duration-300',
        state === 'processing' && 'w-12 rounded-full',
        state === 'success' && 'bg-green-500'
      )}
    >
      {state === 'idle' && \`Pagar R$\${amount}\`}
      {state === 'processing' && <Spinner />}
      {state === 'success' && <CheckIcon />}
    </Button>
  );
}
\`\`\`

### 3. Documentação como Produto

A documentação da Stripe é famosa por ser **melhor que muitos produtos**:

- Code samples funcionais em múltiplas linguagens
- Playground interativo
- Exemplos de erro e como resolver

## Lições Anti-AI

### O Que IA Não Consegue Replicar

1. **Obsessão por detalhes**: Cada pixel é intencional
2. **Contexto de negócio**: UI reflete profundo entendimento de pagamentos
3. **Evolução gradual**: Anos de iteração com usuários reais

### O Que Podemos Aprender

\`\`\`tsx
// 1. Comece com constraints fortes
const designConstraints = {
  colors: 5, // Máximo
  typography: 2, // Apenas duas fonts
  spacing: 'scale-of-8', // 8, 16, 24, 32...
  borderRadius: 6, // Único valor
};

// 2. Componentes extremamente focados
// Cada componente faz UMA coisa bem
function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-muted rounded">
      {children}
    </span>
  );
}
// Sem variantes excessivas, sem props confusos

// 3. Documentação junto com código
/**
 * Badge para status e labels curtos.
 * 
 * @example
 * <Badge>Ativo</Badge>
 * <Badge>3 items</Badge>
 */
\`\`\`

## Resultados

- NPS consistentemente acima de 70
- Taxa de conversão de checkout acima da média do setor
- Developers preferem integrar Stripe vs. concorrentes

**A lição**: Design excepcional vem de **disciplina e consistência**, não de features.`,

      en: `# Stripe: Design System that Scales

Stripe is frequently cited as an example of **exceptional fintech design**. But what makes their approach so effective?

## The Context

- **Problem**: Hundreds of products (Dashboard, Docs, Checkout, etc.)
- **Challenge**: Maintain consistency without stifling creativity
- **Solution**: Design System as "UI API"

## Stripe Design Principles

### 1. Invisible Excellence

Stripe's UI is notable for **not calling attention**. It works so well it disappears:

\`\`\`tsx
// Principle: Less is more
// No decorative element without function
<PaymentForm>
  <Input label="Card number" />
  <Row>
    <Input label="Expiry" />
    <Input label="CVC" />
  </Row>
  <Button>Pay $99.00</Button>
</PaymentForm>
// No unnecessary icons, no badges, no distracting animations
\`\`\`

### 2. Meaningful Micro-interactions

Every animation has purpose:

\`\`\`tsx
// Visual feedback during processing
function PayButton({ amount, onPay }) {
  const [state, setState] = useState<'idle' | 'processing' | 'success'>('idle');
  
  return (
    <Button 
      onClick={async () => {
        setState('processing');
        await onPay();
        setState('success');
      }}
      className={cn(
        'transition-all duration-300',
        state === 'processing' && 'w-12 rounded-full',
        state === 'success' && 'bg-green-500'
      )}
    >
      {state === 'idle' && \`Pay $\${amount}\`}
      {state === 'processing' && <Spinner />}
      {state === 'success' && <CheckIcon />}
    </Button>
  );
}
\`\`\`

### 3. Documentation as Product

Stripe's documentation is famous for being **better than many products**:

- Working code samples in multiple languages
- Interactive playground
- Error examples and how to resolve

## Anti-AI Lessons

### What AI Cannot Replicate

1. **Detail obsession**: Every pixel is intentional
2. **Business context**: UI reflects deep understanding of payments
3. **Gradual evolution**: Years of iteration with real users

### What We Can Learn

\`\`\`tsx
// 1. Start with strong constraints
const designConstraints = {
  colors: 5, // Maximum
  typography: 2, // Only two fonts
  spacing: 'scale-of-8', // 8, 16, 24, 32...
  borderRadius: 6, // Single value
};

// 2. Extremely focused components
// Each component does ONE thing well
function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-muted rounded">
      {children}
    </span>
  );
}
// No excessive variants, no confusing props

// 3. Documentation alongside code
/**
 * Badge for status and short labels.
 * 
 * @example
 * <Badge>Active</Badge>
 * <Badge>3 items</Badge>
 */
\`\`\`

## Results

- NPS consistently above 70
- Checkout conversion rate above industry average
- Developers prefer integrating Stripe vs. competitors

**The lesson**: Exceptional design comes from **discipline and consistency**, not features.`
    }
  },
  {
    id: 'case-linear',
    slug: 'linear-speed-obsession',
    category: 'case-studies',
    order: 2,
    readingTime: 9,
    title: {
      pt: 'Linear: Obsessão por Velocidade',
      en: 'Linear: Speed Obsession'
    },
    description: {
      pt: 'Como o Linear redefiniu o que significa "rápido" em aplicações web.',
      en: 'How Linear redefined what "fast" means in web applications.'
    },
    content: {
      pt: `# Linear: Obsessão por Velocidade

O Linear é frequentemente descrito como "o app mais rápido que já usei". Essa percepção não é acidente — é **engenharia de UX intencional**.

## O Manifesto de Performance

O Linear opera com uma filosofia: **cada milissegundo importa**.

### Métricas Alvo

| Ação | Meta | Típico SaaS |
|------|------|-------------|
| Carregar issue | <50ms | 500-2000ms |
| Criar issue | <100ms | 300-1000ms |
| Busca | <20ms | 200-500ms |
| Transições | 60fps | 30-60fps |

## Técnicas de Performance

### 1. Optimistic UI

\`\`\`tsx
// A ação acontece "instantaneamente" na UI
// Sincronização com servidor é background
function useOptimisticUpdate() {
  const [issues, setIssues] = useState([]);
  
  const createIssue = async (newIssue) => {
    // 1. Atualiza UI imediatamente
    const tempId = generateTempId();
    setIssues(prev => [...prev, { ...newIssue, id: tempId }]);
    
    // 2. Sincroniza com servidor em background
    try {
      const realIssue = await api.createIssue(newIssue);
      setIssues(prev => prev.map(i => 
        i.id === tempId ? realIssue : i
      ));
    } catch (error) {
      // 3. Rollback se falhar
      setIssues(prev => prev.filter(i => i.id !== tempId));
      toast.error('Falha ao criar issue');
    }
  };
  
  return { issues, createIssue };
}
\`\`\`

### 2. Prefetching Inteligente

\`\`\`tsx
// Carrega dados ANTES do usuário precisar
function IssueList() {
  const issues = useIssues();
  
  return (
    <ul>
      {issues.map(issue => (
        <li 
          key={issue.id}
          onMouseEnter={() => {
            // Prefetch ao hover - dados prontos quando clicar
            prefetch(\`/api/issues/\${issue.id}/details\`);
          }}
        >
          <Link to={\`/issue/\${issue.id}\`}>
            {issue.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### 3. Keyboard-First

\`\`\`tsx
// Atalhos para tudo - mouse é opcional
const shortcuts = {
  'c': 'criar issue',
  'e': 'editar',
  'x': 'fechar',
  '/': 'buscar',
  'g i': 'ir para inbox',
  'g p': 'ir para projetos',
};

function CommandPalette() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        {Object.entries(shortcuts).map(([key, action]) => (
          <CommandItem key={key}>
            <kbd>{key}</kbd>
            <span>{action}</span>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
\`\`\`

### 4. Animações a 60fps

\`\`\`tsx
// GPU-accelerated, nunca blocking
const smoothTransition = {
  // ✅ Propriedades baratas (GPU)
  transform: true,
  opacity: true,
  
  // ❌ Propriedades caras (evitar animar)
  width: false,
  height: false,
  top: false,
  left: false,
};
\`\`\`

## O Impacto

### Métricas de Negócio

- **Retenção**: Usuários não voltam para ferramentas lentas
- **Produtividade**: Menos contexto perdido entre ações
- **Satisfação**: "Feels native" mesmo sendo web

### Anti-AI Insight

IA pode gerar código funcional, mas dificilmente otimizado. **Performance é craft** — requer entendimento profundo de browsers, redes e percepção humana.

A velocidade do Linear não é feature — é a **experiência inteira**.`,

      en: `# Linear: Speed Obsession

Linear is frequently described as "the fastest app I've ever used". This perception is not an accident — it's **intentional UX engineering**.

## The Performance Manifesto

Linear operates with a philosophy: **every millisecond matters**.

### Target Metrics

| Action | Target | Typical SaaS |
|--------|--------|--------------|
| Load issue | <50ms | 500-2000ms |
| Create issue | <100ms | 300-1000ms |
| Search | <20ms | 200-500ms |
| Transitions | 60fps | 30-60fps |

## Performance Techniques

### 1. Optimistic UI

\`\`\`tsx
// Action happens "instantly" in UI
// Server sync is background
function useOptimisticUpdate() {
  const [issues, setIssues] = useState([]);
  
  const createIssue = async (newIssue) => {
    // 1. Update UI immediately
    const tempId = generateTempId();
    setIssues(prev => [...prev, { ...newIssue, id: tempId }]);
    
    // 2. Sync with server in background
    try {
      const realIssue = await api.createIssue(newIssue);
      setIssues(prev => prev.map(i => 
        i.id === tempId ? realIssue : i
      ));
    } catch (error) {
      // 3. Rollback if fails
      setIssues(prev => prev.filter(i => i.id !== tempId));
      toast.error('Failed to create issue');
    }
  };
  
  return { issues, createIssue };
}
\`\`\`

### 2. Smart Prefetching

\`\`\`tsx
// Load data BEFORE user needs it
function IssueList() {
  const issues = useIssues();
  
  return (
    <ul>
      {issues.map(issue => (
        <li 
          key={issue.id}
          onMouseEnter={() => {
            // Prefetch on hover - data ready when clicking
            prefetch(\`/api/issues/\${issue.id}/details\`);
          }}
        >
          <Link to={\`/issue/\${issue.id}\`}>
            {issue.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### 3. Keyboard-First

\`\`\`tsx
// Shortcuts for everything - mouse is optional
const shortcuts = {
  'c': 'create issue',
  'e': 'edit',
  'x': 'close',
  '/': 'search',
  'g i': 'go to inbox',
  'g p': 'go to projects',
};

function CommandPalette() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        {Object.entries(shortcuts).map(([key, action]) => (
          <CommandItem key={key}>
            <kbd>{key}</kbd>
            <span>{action}</span>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
\`\`\`

### 4. 60fps Animations

\`\`\`tsx
// GPU-accelerated, never blocking
const smoothTransition = {
  // ✅ Cheap properties (GPU)
  transform: true,
  opacity: true,
  
  // ❌ Expensive properties (avoid animating)
  width: false,
  height: false,
  top: false,
  left: false,
};
\`\`\`

## The Impact

### Business Metrics

- **Retention**: Users don't go back to slow tools
- **Productivity**: Less context lost between actions
- **Satisfaction**: "Feels native" even being web

### Anti-AI Insight

AI can generate functional code, but rarely optimized. **Performance is craft** — requires deep understanding of browsers, networks, and human perception.

Linear's speed isn't a feature — it's the **entire experience**.`
    }
  },
  {
    id: 'case-figma',
    slug: 'figma-collaborative-design',
    category: 'case-studies',
    order: 3,
    readingTime: 11,
    title: {
      pt: 'Figma: Colaboração em Tempo Real',
      en: 'Figma: Real-Time Collaboration'
    },
    description: {
      pt: 'Como o Figma revolucionou design colaborativo com arquitetura web.',
      en: 'How Figma revolutionized collaborative design with web architecture.'
    },
    content: {
      pt: `# Figma: Colaboração em Tempo Real

O Figma não apenas substituiu ferramentas desktop — ele **redefiniu** como designers trabalham juntos.

## A Revolução

### Antes do Figma

\`\`\`
Designer A → Exporta arquivo → Email → Designer B
Designer B → Edita → Exporta → Email → Designer A
→ Conflitos de versão, horas perdidas
\`\`\`

### Com Figma

\`\`\`
Designer A ←→ Canvas compartilhado ←→ Designer B
→ Edições em tempo real, cursor visível, sem conflitos
\`\`\`

## Arquitetura de Colaboração

### 1. Multiplayer Engine

\`\`\`tsx
// Conceito: CRDT (Conflict-free Replicated Data Types)
// Cada operação é estruturada para resolver conflitos automaticamente

interface Operation {
  id: string;
  timestamp: number;
  userId: string;
  type: 'move' | 'resize' | 'create' | 'delete';
  target: string;
  data: any;
}

function applyOperations(operations: Operation[]) {
  // Operações são ordenadas por timestamp
  // Conflitos são resolvidos deterministicamente
  // Todos os clients chegam ao mesmo estado final
  return operations
    .sort((a, b) => a.timestamp - b.timestamp)
    .reduce(applyOperation, initialState);
}
\`\`\`

### 2. Cursores em Tempo Real

\`\`\`tsx
// Feedback de presença instantâneo
function CollaboratorCursors() {
  const collaborators = useCollaborators();
  
  return (
    <>
      {collaborators.map(user => (
        <Cursor 
          key={user.id}
          position={user.cursorPosition}
          color={user.color}
          name={user.name}
          // Interpolação suave entre updates
          style={{
            transition: 'transform 50ms linear'
          }}
        />
      ))}
    </>
  );
}
\`\`\`

### 3. WebGL para Performance

\`\`\`tsx
// Canvas renderizado via WebGL, não DOM
// Permite milhares de elementos sem lag

const renderingStack = {
  // Camada de interação (DOM)
  ui: 'React',
  
  // Camada de renderização (GPU)
  canvas: 'WebGL',
  
  // Camada de dados (Memory)
  state: 'Custom CRDT'
};
\`\`\`

## Padrões de UX Inovadores

### Selection Sharing

\`\`\`tsx
// Ver o que outros estão selecionando
function SharedSelection() {
  const selections = useOtherSelections();
  
  return selections.map(selection => (
    <SelectionHighlight
      key={selection.userId}
      bounds={selection.bounds}
      color={selection.userColor}
      label={selection.userName}
    />
  ));
}
\`\`\`

### Comments in Context

\`\`\`tsx
// Comentários ancorados a elementos específicos
function DesignComment({ elementId, position }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className="absolute"
          style={{ left: position.x, top: position.y }}
        >
          <CommentBubble />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <CommentThread elementId={elementId} />
      </PopoverContent>
    </Popover>
  );
}
\`\`\`

## Lições Anti-AI

### Por Que Figma Não Pode Ser "Gerado"

1. **Arquitetura única**: CRDTs + WebGL + Real-time requer engenharia profunda
2. **Entendimento do workflow**: Saber como designers realmente colaboram
3. **Iteração de anos**: Cada feature polida por feedback real

### O Que Aprender

- **Browser é poderoso**: Não assuma que precisa de app nativo
- **Colaboração é multiplicador**: Features que funcionam sozinho também devem funcionar em grupo
- **Performance é UX**: Lag mata colaboração`,

      en: `# Figma: Real-Time Collaboration

Figma didn't just replace desktop tools — it **redefined** how designers work together.

## The Revolution

### Before Figma

\`\`\`
Designer A → Export file → Email → Designer B
Designer B → Edit → Export → Email → Designer A
→ Version conflicts, hours lost
\`\`\`

### With Figma

\`\`\`
Designer A ←→ Shared canvas ←→ Designer B
→ Real-time edits, visible cursor, no conflicts
\`\`\`

## Collaboration Architecture

### 1. Multiplayer Engine

\`\`\`tsx
// Concept: CRDT (Conflict-free Replicated Data Types)
// Each operation is structured to resolve conflicts automatically

interface Operation {
  id: string;
  timestamp: number;
  userId: string;
  type: 'move' | 'resize' | 'create' | 'delete';
  target: string;
  data: any;
}

function applyOperations(operations: Operation[]) {
  // Operations are sorted by timestamp
  // Conflicts are resolved deterministically
  // All clients reach the same final state
  return operations
    .sort((a, b) => a.timestamp - b.timestamp)
    .reduce(applyOperation, initialState);
}
\`\`\`

### 2. Real-Time Cursors

\`\`\`tsx
// Instant presence feedback
function CollaboratorCursors() {
  const collaborators = useCollaborators();
  
  return (
    <>
      {collaborators.map(user => (
        <Cursor 
          key={user.id}
          position={user.cursorPosition}
          color={user.color}
          name={user.name}
          // Smooth interpolation between updates
          style={{
            transition: 'transform 50ms linear'
          }}
        />
      ))}
    </>
  );
}
\`\`\`

### 3. WebGL for Performance

\`\`\`tsx
// Canvas rendered via WebGL, not DOM
// Allows thousands of elements without lag

const renderingStack = {
  // Interaction layer (DOM)
  ui: 'React',
  
  // Rendering layer (GPU)
  canvas: 'WebGL',
  
  // Data layer (Memory)
  state: 'Custom CRDT'
};
\`\`\`

## Innovative UX Patterns

### Selection Sharing

\`\`\`tsx
// See what others are selecting
function SharedSelection() {
  const selections = useOtherSelections();
  
  return selections.map(selection => (
    <SelectionHighlight
      key={selection.userId}
      bounds={selection.bounds}
      color={selection.userColor}
      label={selection.userName}
    />
  ));
}
\`\`\`

### Comments in Context

\`\`\`tsx
// Comments anchored to specific elements
function DesignComment({ elementId, position }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className="absolute"
          style={{ left: position.x, top: position.y }}
        >
          <CommentBubble />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <CommentThread elementId={elementId} />
      </PopoverContent>
    </Popover>
  );
}
\`\`\`

## Anti-AI Lessons

### Why Figma Cannot Be "Generated"

1. **Unique architecture**: CRDTs + WebGL + Real-time requires deep engineering
2. **Workflow understanding**: Knowing how designers actually collaborate
3. **Years of iteration**: Every feature polished by real feedback

### What to Learn

- **Browser is powerful**: Don't assume you need a native app
- **Collaboration is a multiplier**: Features that work solo should also work in groups
- **Performance is UX**: Lag kills collaboration`
    }
  },
  {
    id: 'case-notion',
    slug: 'notion-flexible-blocks',
    category: 'case-studies',
    order: 4,
    readingTime: 10,
    title: {
      pt: 'Notion: A Flexibilidade dos Blocos',
      en: 'Notion: The Flexibility of Blocks'
    },
    description: {
      pt: 'Como o sistema de blocos do Notion permite infinitas combinações.',
      en: "How Notion's block system enables infinite combinations."
    },
    content: {
      pt: `# Notion: A Flexibilidade dos Blocos

O Notion transformou a ideia de "documento" ao tratar tudo como **blocos componíveis**.

## O Modelo Mental

### Documento Tradicional

\`\`\`
┌──────────────────────────┐
│ Texto linear             │
│ ...                      │
│ Imagem                   │
│ ...                      │
│ Mais texto               │
└──────────────────────────┘
\`\`\`

### Notion Blocks

\`\`\`
┌──────────────────────────┐
│ [Heading Block]          │
├──────────────────────────┤
│ [Text Block]             │
├──────────────────────────┤
│ [Columns: 2]             │
│ ┌───────┐ ┌────────────┐ │
│ │ Image │ │ Text Block │ │
│ └───────┘ └────────────┘ │
├──────────────────────────┤
│ [Database: Table View]   │
├──────────────────────────┤
│ [Embed: Figma]           │
└──────────────────────────┘
\`\`\`

## Arquitetura de Blocos

### 1. Block como Unidade Atômica

\`\`\`tsx
interface Block {
  id: string;
  type: BlockType;
  content: any;
  children: Block[];
  parent: string | null;
}

type BlockType = 
  | 'text'
  | 'heading'
  | 'list'
  | 'toggle'
  | 'image'
  | 'database'
  | 'embed'
  | 'code'
  // ... 50+ tipos
\`\`\`

### 2. Renderização Recursiva

\`\`\`tsx
function BlockRenderer({ block }: { block: Block }) {
  const Component = blockComponents[block.type];
  
  return (
    <div className="block" data-block-id={block.id}>
      <Component content={block.content} />
      
      {/* Blocos podem ter filhos */}
      {block.children?.map(child => (
        <BlockRenderer key={child.id} block={child} />
      ))}
    </div>
  );
}

const blockComponents: Record<BlockType, React.FC> = {
  text: TextBlock,
  heading: HeadingBlock,
  list: ListBlock,
  toggle: ToggleBlock,
  database: DatabaseBlock,
  // ...
};
\`\`\`

### 3. Drag and Drop Universal

\`\`\`tsx
// Qualquer bloco pode ser movido para qualquer lugar
function DraggableBlock({ block }) {
  const { isDragging, drag } = useDrag({
    type: 'BLOCK',
    item: { id: block.id }
  });
  
  const { isOver, drop } = useDrop({
    accept: 'BLOCK',
    drop: (item) => moveBlock(item.id, block.id)
  });
  
  return (
    <div 
      ref={(node) => drag(drop(node))}
      className={cn(isDragging && 'opacity-50', isOver && 'border-t-2 border-accent')}
    >
      <BlockRenderer block={block} />
    </div>
  );
}
\`\`\`

## Padrões de Interação

### Slash Commands

\`\`\`tsx
// "/" abre menu de criação contextual
function SlashMenu() {
  const [filter, setFilter] = useState('');
  const blocks = filterBlocks(allBlockTypes, filter);
  
  return (
    <Command>
      <CommandInput 
        value={filter} 
        onValueChange={setFilter}
        placeholder="Type to filter..."
      />
      <CommandList>
        <CommandGroup heading="Basic">
          {blocks.basic.map(block => (
            <CommandItem 
              key={block.type}
              onSelect={() => createBlock(block.type)}
            >
              <block.icon />
              <span>{block.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        {/* Mais grupos... */}
      </CommandList>
    </Command>
  );
}
\`\`\`

### Inline Formatting

\`\`\`tsx
// Seleção de texto abre toolbar flutuante
function FloatingToolbar() {
  const selection = useSelection();
  
  if (!selection) return null;
  
  return (
    <div 
      className="absolute bg-background border shadow-lg"
      style={{ top: selection.y - 40, left: selection.x }}
    >
      <Button size="sm" onClick={() => format('bold')}>B</Button>
      <Button size="sm" onClick={() => format('italic')}>I</Button>
      <Button size="sm" onClick={() => format('link')}>🔗</Button>
    </div>
  );
}
\`\`\`

## Lições Anti-AI

O sistema de blocos do Notion é resultado de **decisões de design acumuladas**:

1. Cada tipo de bloco tem interações específicas pensadas
2. A flexibilidade vem de constraints bem definidos
3. Anos de feedback informam cada melhoria

IA pode gerar blocos individuais, mas a **coerência do sistema** requer visão humana.`,

      en: `# Notion: The Flexibility of Blocks

Notion transformed the idea of "document" by treating everything as **composable blocks**.

## The Mental Model

### Traditional Document

\`\`\`
┌──────────────────────────┐
│ Linear text              │
│ ...                      │
│ Image                    │
│ ...                      │
│ More text                │
└──────────────────────────┘
\`\`\`

### Notion Blocks

\`\`\`
┌──────────────────────────┐
│ [Heading Block]          │
├──────────────────────────┤
│ [Text Block]             │
├──────────────────────────┤
│ [Columns: 2]             │
│ ┌───────┐ ┌────────────┐ │
│ │ Image │ │ Text Block │ │
│ └───────┘ └────────────┘ │
├──────────────────────────┤
│ [Database: Table View]   │
├──────────────────────────┤
│ [Embed: Figma]           │
└──────────────────────────┘
\`\`\`

## Block Architecture

### 1. Block as Atomic Unit

\`\`\`tsx
interface Block {
  id: string;
  type: BlockType;
  content: any;
  children: Block[];
  parent: string | null;
}

type BlockType = 
  | 'text'
  | 'heading'
  | 'list'
  | 'toggle'
  | 'image'
  | 'database'
  | 'embed'
  | 'code'
  // ... 50+ types
\`\`\`

### 2. Recursive Rendering

\`\`\`tsx
function BlockRenderer({ block }: { block: Block }) {
  const Component = blockComponents[block.type];
  
  return (
    <div className="block" data-block-id={block.id}>
      <Component content={block.content} />
      
      {/* Blocks can have children */}
      {block.children?.map(child => (
        <BlockRenderer key={child.id} block={child} />
      ))}
    </div>
  );
}

const blockComponents: Record<BlockType, React.FC> = {
  text: TextBlock,
  heading: HeadingBlock,
  list: ListBlock,
  toggle: ToggleBlock,
  database: DatabaseBlock,
  // ...
};
\`\`\`

### 3. Universal Drag and Drop

\`\`\`tsx
// Any block can be moved anywhere
function DraggableBlock({ block }) {
  const { isDragging, drag } = useDrag({
    type: 'BLOCK',
    item: { id: block.id }
  });
  
  const { isOver, drop } = useDrop({
    accept: 'BLOCK',
    drop: (item) => moveBlock(item.id, block.id)
  });
  
  return (
    <div 
      ref={(node) => drag(drop(node))}
      className={cn(isDragging && 'opacity-50', isOver && 'border-t-2 border-accent')}
    >
      <BlockRenderer block={block} />
    </div>
  );
}
\`\`\`

## Interaction Patterns

### Slash Commands

\`\`\`tsx
// "/" opens contextual creation menu
function SlashMenu() {
  const [filter, setFilter] = useState('');
  const blocks = filterBlocks(allBlockTypes, filter);
  
  return (
    <Command>
      <CommandInput 
        value={filter} 
        onValueChange={setFilter}
        placeholder="Type to filter..."
      />
      <CommandList>
        <CommandGroup heading="Basic">
          {blocks.basic.map(block => (
            <CommandItem 
              key={block.type}
              onSelect={() => createBlock(block.type)}
            >
              <block.icon />
              <span>{block.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        {/* More groups... */}
      </CommandList>
    </Command>
  );
}
\`\`\`

### Inline Formatting

\`\`\`tsx
// Text selection opens floating toolbar
function FloatingToolbar() {
  const selection = useSelection();
  
  if (!selection) return null;
  
  return (
    <div 
      className="absolute bg-background border shadow-lg"
      style={{ top: selection.y - 40, left: selection.x }}
    >
      <Button size="sm" onClick={() => format('bold')}>B</Button>
      <Button size="sm" onClick={() => format('italic')}>I</Button>
      <Button size="sm" onClick={() => format('link')}>🔗</Button>
    </div>
  );
}
\`\`\`

## Anti-AI Lessons

Notion's block system is the result of **accumulated design decisions**:

1. Each block type has specifically thought-out interactions
2. Flexibility comes from well-defined constraints
3. Years of feedback inform every improvement

AI can generate individual blocks, but **system coherence** requires human vision.`
    }
  },
  {
    id: 'case-duolingo',
    slug: 'duolingo-gamification',
    category: 'case-studies',
    order: 5,
    readingTime: 9,
    title: {
      pt: 'Duolingo: Gamificação que Funciona',
      en: 'Duolingo: Gamification that Works'
    },
    description: {
      pt: 'Como o Duolingo usa mecânicas de jogo para manter usuários aprendendo.',
      en: 'How Duolingo uses game mechanics to keep users learning.'
    },
    content: {
      pt: `# Duolingo: Gamificação que Funciona

O Duolingo é o app de aprendizado de idiomas mais popular do mundo. Seu sucesso vem de **gamificação genuína**, não superficial.

## Por Que Funciona

### Gamificação Superficial ❌

\`\`\`
- Adicionar badges a um app chato
- Pontos que não significam nada
- Leaderboards ignorados
→ Engagement de curto prazo, abandono rápido
\`\`\`

### Gamificação Profunda ✅

\`\`\`
- Mecânicas de jogo integradas ao aprendizado
- Progressão que reflete progresso real
- Feedback que reforça comportamento
→ Hábito de longo prazo
\`\`\`

## Mecânicas Principais

### 1. Streaks (Sequências)

\`\`\`tsx
function StreakCounter({ currentStreak }) {
  return (
    <div className="flex items-center gap-2">
      <Flame className={cn(
        currentStreak > 0 ? 'text-orange-500' : 'text-muted-foreground'
      )} />
      <span className="font-bold text-xl">{currentStreak}</span>
      
      {/* Streak freeze disponível */}
      {currentStreak > 7 && (
        <Button size="sm" variant="outline">
          🛡️ Proteção ativa
        </Button>
      )}
    </div>
  );
}
\`\`\`

**Por que funciona**: Perda aversiva — não queremos perder o que construímos.

### 2. XP e Níveis

\`\`\`tsx
function LessonComplete({ xpEarned }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        ⭐
      </motion.div>
      
      <h2 className="text-2xl font-bold">+{xpEarned} XP</h2>
      
      <ProgressBar 
        current={userProgress}
        max={nextLevelXP}
        label="Próximo nível"
      />
    </motion.div>
  );
}
\`\`\`

**Por que funciona**: Progresso visível — feedback constante de avanço.

### 3. Hearts (Vidas)

\`\`\`tsx
function HeartsDisplay({ hearts, maxHearts }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxHearts }).map((_, i) => (
        <Heart 
          key={i}
          className={cn(
            i < hearts 
              ? 'text-red-500 fill-red-500' 
              : 'text-muted-foreground'
          )}
        />
      ))}
    </div>
  );
}
\`\`\`

**Por que funciona**: Stakes — erros têm consequência (mas recuperável).

### 4. Ligas (Competição Social)

\`\`\`tsx
function LeagueLeaderboard({ league, users }) {
  return (
    <div>
      <Badge variant={league.color}>{league.name}</Badge>
      
      <ul className="divide-y">
        {users.map((user, rank) => (
          <li 
            key={user.id}
            className={cn(
              'flex items-center py-2',
              rank < 3 && 'bg-accent/10' // Top 3 promovidos
            )}
          >
            <span className="w-8 font-mono">{rank + 1}</span>
            <Avatar src={user.avatar} />
            <span className="flex-1">{user.name}</span>
            <span className="font-bold">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

**Por que funciona**: Comparação social positiva — competir para melhorar.

## Lições Anti-AI

### O Que IA Não Consegue Replicar

1. **Psicologia de comportamento**: Entender o que motiva humanos
2. **Balanceamento fino**: Dificuldade que desafia sem frustrar
3. **Iteração com dados**: Anos de A/B testing

### O Que Aprender

\`\`\`tsx
// Gamificação deve servir ao objetivo, não ser o objetivo
const goodGamification = {
  purpose: 'Aprender idioma', // Não "coletar XP"
  mechanics: 'Reforçam aprendizado', // Não distraem dele
  motivation: 'Intrínseca > Extrínseca', // Curiosidade > Pontos
};
\`\`\`

O Duolingo prova que **design comportamental** requer compreensão profunda de humanos — algo que IA ainda não possui.`,

      en: `# Duolingo: Gamification that Works

Duolingo is the most popular language learning app in the world. Its success comes from **genuine gamification**, not superficial.

## Why It Works

### Superficial Gamification ❌

\`\`\`
- Adding badges to a boring app
- Points that mean nothing
- Ignored leaderboards
→ Short-term engagement, quick abandonment
\`\`\`

### Deep Gamification ✅

\`\`\`
- Game mechanics integrated with learning
- Progression that reflects real progress
- Feedback that reinforces behavior
→ Long-term habit
\`\`\`

## Main Mechanics

### 1. Streaks

\`\`\`tsx
function StreakCounter({ currentStreak }) {
  return (
    <div className="flex items-center gap-2">
      <Flame className={cn(
        currentStreak > 0 ? 'text-orange-500' : 'text-muted-foreground'
      )} />
      <span className="font-bold text-xl">{currentStreak}</span>
      
      {/* Streak freeze available */}
      {currentStreak > 7 && (
        <Button size="sm" variant="outline">
          🛡️ Protection active
        </Button>
      )}
    </div>
  );
}
\`\`\`

**Why it works**: Loss aversion — we don't want to lose what we've built.

### 2. XP and Levels

\`\`\`tsx
function LessonComplete({ xpEarned }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        ⭐
      </motion.div>
      
      <h2 className="text-2xl font-bold">+{xpEarned} XP</h2>
      
      <ProgressBar 
        current={userProgress}
        max={nextLevelXP}
        label="Next level"
      />
    </motion.div>
  );
}
\`\`\`

**Why it works**: Visible progress — constant feedback of advancement.

### 3. Hearts (Lives)

\`\`\`tsx
function HeartsDisplay({ hearts, maxHearts }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxHearts }).map((_, i) => (
        <Heart 
          key={i}
          className={cn(
            i < hearts 
              ? 'text-red-500 fill-red-500' 
              : 'text-muted-foreground'
          )}
        />
      ))}
    </div>
  );
}
\`\`\`

**Why it works**: Stakes — mistakes have consequences (but recoverable).

### 4. Leagues (Social Competition)

\`\`\`tsx
function LeagueLeaderboard({ league, users }) {
  return (
    <div>
      <Badge variant={league.color}>{league.name}</Badge>
      
      <ul className="divide-y">
        {users.map((user, rank) => (
          <li 
            key={user.id}
            className={cn(
              'flex items-center py-2',
              rank < 3 && 'bg-accent/10' // Top 3 promoted
            )}
          >
            <span className="w-8 font-mono">{rank + 1}</span>
            <Avatar src={user.avatar} />
            <span className="flex-1">{user.name}</span>
            <span className="font-bold">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

**Why it works**: Positive social comparison — compete to improve.

## Anti-AI Lessons

### What AI Cannot Replicate

1. **Behavioral psychology**: Understanding what motivates humans
2. **Fine balancing**: Difficulty that challenges without frustrating
3. **Data iteration**: Years of A/B testing

### What to Learn

\`\`\`tsx
// Gamification should serve the goal, not be the goal
const goodGamification = {
  purpose: 'Learn a language', // Not "collect XP"
  mechanics: 'Reinforce learning', // Not distract from it
  motivation: 'Intrinsic > Extrinsic', // Curiosity > Points
};
\`\`\`

Duolingo proves that **behavioral design** requires deep understanding of humans — something AI still doesn't possess.`
    }
  }
];
