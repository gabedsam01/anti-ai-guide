import { Article } from '../types';

export const trends2025Articles: Article[] = [
  {
    id: 'ai-augmented-design',
    slug: 'ai-augmented-design',
    category: 'trends-2025',
    order: 1,
    readingTime: 11,
    title: {
      pt: 'Design Aumentado por IA: Colaboração, Não Substituição',
      en: 'AI-Augmented Design: Collaboration, Not Replacement'
    },
    description: {
      pt: 'Como usar IA como ferramenta criativa sem perder a alma humana do design.',
      en: 'How to use AI as a creative tool without losing the human soul of design.'
    },
    content: {
      pt: `# Design Aumentado por IA: Colaboração, Não Substituição

A IA generativa transformou o landscape do design em 2024-2025. Mas a pergunta central permanece: **como usar IA sem produzir design genérico?**

## O Paradoxo da IA Generativa

![Infográfico Tendências 2025](/assets/infographic-trends-pt.svg)

### O Problema

IA treinada em bilhões de imagens converge para a **média estética**. Resultados são tecnicamente competentes mas visualmente intercambiáveis.

\`\`\`
Input: "Modern SaaS landing page"
Output: Gradiente roxo + Cards arredondados + Inter font
        ↓
        Indistinguível de 10.000 outras landing pages
\`\`\`

### A Solução Anti-IA

Use IA como **ponto de partida**, não destino:

1. **Gere variações**: Peça 10 opções, descarte 9
2. **Subverta o resultado**: Pegue o oposto do que a IA sugere
3. **Adicione constraints humanos**: "Nada de gradientes" ou "Apenas preto e branco"

## Ferramentas IA para 2025

### Geração de Imagens

- **Midjourney V6**: Controle estético refinado
- **DALL-E 3**: Integração com texto precisa
- **Stable Diffusion XL**: Open source, customizável

### Design de Interface

- **Figma AI**: Auto-layout e sugestões contextuais
- **Framer AI**: Prototipagem generativa
- **v0.dev**: Componentes React a partir de prompts

### Código

- **GitHub Copilot**: Autocomplete contextual
- **Cursor**: IDE com IA integrada
- **Claude/GPT-4**: Pair programming avançado

## Framework de Uso Responsável

\`\`\`mermaid
graph LR
    A[Fase 1: Geração IA] -->|Opções| B[Fase 2: Curadoria Humana]
    B -->|Selecionado| C[Fase 3: Refinamento Humano]
    C -->|Polido| D[Design Final]
    
    style A fill:#333,stroke:#666
    style B fill:#000,stroke:#fff
    style C fill:#000,stroke:#fff
    style D fill:#000,stroke:#fff,stroke-width:2px
\`\`\`

\`\`\`tsx
// Exemplo: IA como acelerador, humano como curador
const designProcess = {
  // Fase 1: IA gera opções
  generate: async (prompt: string) => {
    const options = await ai.generate(prompt, { count: 10 });
    return options;
  },
  
  // Fase 2: Humano seleciona e modifica
  curate: (options: Design[], criteria: HumanCriteria) => {
    const selected = humanReview(options, criteria);
    return addPersonalTouch(selected);
  },
  
  // Fase 3: Refinamento iterativo
  refine: (design: Design) => {
    // IA não faz isso - requer julgamento estético
    return humanCraft(design);
  }
};
\`\`\`

## O Futuro é Híbrido

A melhor abordagem para 2025:

| Tarefa | Quem Faz |
|--------|----------|
| Ideação inicial | IA (volume) |
| Seleção criativa | Humano |
| Produção em escala | IA + Humano |
| Refinamento final | Humano |
| Decisões de marca | Humano sempre |

**Anti-AI não significa anti-tecnologia**. Significa usar tecnologia a serviço da expressão humana, não como substituto dela.`,

      en: `# AI-Augmented Design: Collaboration, Not Replacement

Generative AI transformed the design landscape in 2024-2025. But the central question remains: **how to use AI without producing generic design?**

## The Generative AI Paradox

![2025 Trends Infographic](/assets/infographic-trends.svg)

### The Problem

AI trained on billions of images converges to the **aesthetic average**. Results are technically competent but visually interchangeable.

\`\`\`
Input: "Modern SaaS landing page"
Output: Purple gradient + Rounded cards + Inter font
        ↓
        Indistinguishable from 10,000 other landing pages
\`\`\`

### The Anti-AI Solution

Use AI as a **starting point**, not destination:

1. **Generate variations**: Ask for 10 options, discard 9
2. **Subvert the result**: Take the opposite of what AI suggests
3. **Add human constraints**: "No gradients" or "Only black and white"

## AI Tools for 2025

### Image Generation

- **Midjourney V6**: Refined aesthetic control
- **DALL-E 3**: Precise text integration
- **Stable Diffusion XL**: Open source, customizable

### Interface Design

- **Figma AI**: Auto-layout and contextual suggestions
- **Framer AI**: Generative prototyping
- **v0.dev**: React components from prompts

### Code

- **GitHub Copilot**: Contextual autocomplete
- **Cursor**: IDE with integrated AI
- **Claude/GPT-4**: Advanced pair programming

## Responsible Use Framework

\`\`\`mermaid
graph LR
    A[Phase 1: AI Generation] -->|Options| B[Phase 2: Human Curation]
    B -->|Selected| C[Phase 3: Human Refinement]
    C -->|Polished| D[Final Design]
    
    style A fill:#333,stroke:#666
    style B fill:#000,stroke:#fff
    style C fill:#000,stroke:#fff
    style D fill:#000,stroke:#fff,stroke-width:2px
\`\`\`

\`\`\`tsx
// Example: AI as accelerator, human as curator
const designProcess = {
  // Phase 1: AI generates options
  generate: async (prompt: string) => {
    const options = await ai.generate(prompt, { count: 10 });
    return options;
  },
  
  // Phase 2: Human selects and modifies
  curate: (options: Design[], criteria: HumanCriteria) => {
    const selected = humanReview(options, criteria);
    return addPersonalTouch(selected);
  },
  
  // Phase 3: Iterative refinement
  refine: (design: Design) => {
    // AI doesn't do this - requires aesthetic judgment
    return humanCraft(design);
  }
};
\`\`\`

## The Future is Hybrid

The best approach for 2025:

| Task | Who Does It |
|------|-------------|
| Initial ideation | AI (volume) |
| Creative selection | Human |
| Production at scale | AI + Human |
| Final refinement | Human |
| Brand decisions | Human always |

**Anti-AI doesn't mean anti-technology**. It means using technology in service of human expression, not as a substitute for it.`
    }
  },
  {
    id: 'spatial-computing',
    slug: 'spatial-computing',
    category: 'trends-2025',
    order: 2,
    readingTime: 10,
    title: {
      pt: 'Spatial Computing: Design para AR/VR/XR',
      en: 'Spatial Computing: Design for AR/VR/XR'
    },
    description: {
      pt: 'Princípios de design para interfaces tridimensionais e realidade estendida.',
      en: 'Design principles for three-dimensional interfaces and extended reality.'
    },
    content: {
      pt: `# Spatial Computing: Design para AR/VR/XR

Com Apple Vision Pro e Meta Quest 3, 2024-2025 marca a transição de **interfaces planas para espaciais**. Os princípios de UI/UX precisam ser repensados para o 3D.

## Novos Paradigmas de Interação

### De Telas para Espaços

\`\`\`
2D (Telas)          →    3D (Espaços)
─────────────────────────────────────
Clique/Tap          →    Gaze + Pinch
Scroll              →    Head movement
Hover               →    Proximity
Janelas             →    Volumes
Cursor              →    Raio de olhar
\`\`\`

### Inputs Naturais

- **Gaze**: Para onde você olha é onde você foca
- **Gestos de mão**: Pinch, grab, push, rotate
- **Voz**: Comandos naturais em contexto
- **Posição corporal**: O corpo como controller

## Princípios de Design Espacial

### 1. Conforto Visual

\`\`\`tsx
// Zona de conforto ergonômico
const comfortZone = {
  distance: {
    min: 0.5,  // metros
    ideal: 1.5,
    max: 3.0
  },
  angle: {
    horizontal: 60, // graus do centro
    vertical: 40
  },
  // Evitar movimento rápido de cabeça
  contentPlacement: 'arc-around-user'
};
\`\`\`

### 2. Hierarquia Espacial

Em 3D, hierarquia não é só tamanho — é **profundidade e posição**:

- **Foreground**: Ações primárias, sempre acessíveis
- **Midground**: Conteúdo principal
- **Background**: Ambiente, contexto

### 3. Feedback Háptico e Visual

Sem touch físico, o feedback precisa ser multi-sensorial:

\`\`\`tsx
// Feedback de interação em XR
function InteractiveElement({ children, onSelect }) {
  return (
    <XRInteractable
      onHoverEnter={() => {
        playHaptic('light');
        glowIntensity.set(0.3);
      }}
      onSelect={() => {
        playHaptic('medium');
        playSound('confirm');
        onSelect();
      }}
    >
      {children}
    </XRInteractable>
  );
}
\`\`\`

## Desafios Únicos

### Motion Sickness

Regras para evitar desconforto:

- Nunca mova o mundo; mova o usuário
- Mantenha horizon estável
- Use "tunneling" em movimentos rápidos
- 90fps mínimo, 120fps ideal

### Acessibilidade em XR

- Alternativas para gestos (voz, switch control)
- Legendas espaciais para áudio
- Ajustes de contraste e tamanho
- Opções de movimento reduzido

## O Futuro Espacial Anti-AI

Em XR, a tentação será interfaces genéricas flutuantes. Design Anti-AI em spatial computing significa:

- **Ambientes com personalidade**: Não só grades e painéis
- **Interações memoráveis**: Gestos únicos da sua marca
- **Presença**, não apenas funcionalidade`,

      en: `# Spatial Computing: Design for AR/VR/XR

With Apple Vision Pro and Meta Quest 3, 2024-2025 marks the transition from **flat to spatial interfaces**. UI/UX principles need to be rethought for 3D.

## New Interaction Paradigms

### From Screens to Spaces

\`\`\`
2D (Screens)        →    3D (Spaces)
─────────────────────────────────────
Click/Tap           →    Gaze + Pinch
Scroll              →    Head movement
Hover               →    Proximity
Windows             →    Volumes
Cursor              →    Gaze ray
\`\`\`

### Natural Inputs

- **Gaze**: Where you look is where you focus
- **Hand gestures**: Pinch, grab, push, rotate
- **Voice**: Natural commands in context
- **Body position**: Body as controller

## Spatial Design Principles

### 1. Visual Comfort

\`\`\`tsx
// Ergonomic comfort zone
const comfortZone = {
  distance: {
    min: 0.5,  // meters
    ideal: 1.5,
    max: 3.0
  },
  angle: {
    horizontal: 60, // degrees from center
    vertical: 40
  },
  // Avoid rapid head movement
  contentPlacement: 'arc-around-user'
};
\`\`\`

### 2. Spatial Hierarchy

In 3D, hierarchy isn't just size — it's **depth and position**:

- **Foreground**: Primary actions, always accessible
- **Midground**: Main content
- **Background**: Environment, context

### 3. Haptic and Visual Feedback

Without physical touch, feedback needs to be multi-sensory:

\`\`\`tsx
// XR interaction feedback
function InteractiveElement({ children, onSelect }) {
  return (
    <XRInteractable
      onHoverEnter={() => {
        playHaptic('light');
        glowIntensity.set(0.3);
      }}
      onSelect={() => {
        playHaptic('medium');
        playSound('confirm');
        onSelect();
      }}
    >
      {children}
    </XRInteractable>
  );
}
\`\`\`

## Unique Challenges

### Motion Sickness

Rules to avoid discomfort:

- Never move the world; move the user
- Keep horizon stable
- Use "tunneling" for fast movements
- 90fps minimum, 120fps ideal

### Accessibility in XR

- Alternatives for gestures (voice, switch control)
- Spatial captions for audio
- Contrast and size adjustments
- Reduced motion options

## The Anti-AI Spatial Future

In XR, the temptation will be generic floating interfaces. Anti-AI design in spatial computing means:

- **Environments with personality**: Not just grids and panels
- **Memorable interactions**: Gestures unique to your brand
- **Presence**, not just functionality`
    }
  },
  {
    id: 'adaptive-interfaces',
    slug: 'adaptive-interfaces',
    category: 'trends-2025',
    order: 3,
    readingTime: 9,
    title: {
      pt: 'Interfaces Adaptativas: Personalização Contextual',
      en: 'Adaptive Interfaces: Contextual Personalization'
    },
    description: {
      pt: 'Como criar interfaces que se adaptam ao contexto, comportamento e preferências do usuário.',
      en: "How to create interfaces that adapt to the user's context, behavior, and preferences."
    },
    content: {
      pt: `# Interfaces Adaptativas: Personalização Contextual

Interfaces adaptativas vão além do responsive design. Elas **aprendem e se modificam** com base no comportamento, contexto e preferências do usuário.

## Tipos de Adaptação

### 1. Adaptação Contextual

A interface muda com base no ambiente:

\`\`\`tsx
function AdaptiveInterface() {
  const { timeOfDay, location, device } = useContext();
  
  return (
    <ThemeProvider theme={
      timeOfDay === 'night' ? darkTheme :
      location === 'outdoor' ? highContrastTheme :
      defaultTheme
    }>
      <Layout density={device === 'mobile' ? 'compact' : 'comfortable'}>
        {/* Conteúdo adapta automaticamente */}
      </Layout>
    </ThemeProvider>
  );
}
\`\`\`

### 2. Adaptação Comportamental

A interface aprende com o uso:

\`\`\`tsx
// Menu que reordena baseado em frequência
function AdaptiveMenu() {
  const { frequentActions } = useUserBehavior();
  
  const sortedActions = useMemo(() => {
    return [...allActions].sort((a, b) => 
      (frequentActions[b.id] || 0) - (frequentActions[a.id] || 0)
    );
  }, [frequentActions]);
  
  return (
    <Menu>
      {sortedActions.map(action => (
        <MenuItem key={action.id} {...action} />
      ))}
    </Menu>
  );
}
\`\`\`

### 3. Adaptação de Expertise

Interfaces que crescem com o usuário:

\`\`\`tsx
const expertiseLevels = {
  beginner: {
    showTooltips: true,
    features: ['basic'],
    shortcuts: false
  },
  intermediate: {
    showTooltips: 'on-demand',
    features: ['basic', 'advanced'],
    shortcuts: true
  },
  expert: {
    showTooltips: false,
    features: ['all'],
    shortcuts: true,
    showDeveloperTools: true
  }
};
\`\`\`

## Implementação Ética

### Transparência

Sempre mostre que a interface está adaptando:

\`\`\`tsx
function AdaptiveNotice() {
  return (
    <Tooltip content="Este menu foi reorganizado com base no seu uso">
      <InfoIcon className="text-muted-foreground" />
    </Tooltip>
  );
}
\`\`\`

### Controle do Usuário

Permita override das adaptações:

\`\`\`tsx
function AdaptationSettings() {
  return (
    <Settings>
      <Toggle label="Reordenar menus automaticamente" />
      <Toggle label="Adaptar tema ao horário" />
      <Toggle label="Modo simplificado" />
      <Button variant="ghost">Resetar todas as adaptações</Button>
    </Settings>
  );
}
\`\`\`

## Cuidados Anti-AI

Personalização excessiva cria bolhas. Equilibre:

- **Novidade**: Exponha features que o usuário ainda não conhece
- **Serendipidade**: Mantenha alguns elementos fixos/aleatórios
- **Agência**: O usuário deve sentir controle, não manipulação`,

      en: `# Adaptive Interfaces: Contextual Personalization

Adaptive interfaces go beyond responsive design. They **learn and modify** based on user behavior, context, and preferences.

## Types of Adaptation

### 1. Contextual Adaptation

The interface changes based on environment:

\`\`\`tsx
function AdaptiveInterface() {
  const { timeOfDay, location, device } = useContext();
  
  return (
    <ThemeProvider theme={
      timeOfDay === 'night' ? darkTheme :
      location === 'outdoor' ? highContrastTheme :
      defaultTheme
    }>
      <Layout density={device === 'mobile' ? 'compact' : 'comfortable'}>
        {/* Content adapts automatically */}
      </Layout>
    </ThemeProvider>
  );
}
\`\`\`

### 2. Behavioral Adaptation

The interface learns from usage:

\`\`\`tsx
// Menu that reorders based on frequency
function AdaptiveMenu() {
  const { frequentActions } = useUserBehavior();
  
  const sortedActions = useMemo(() => {
    return [...allActions].sort((a, b) => 
      (frequentActions[b.id] || 0) - (frequentActions[a.id] || 0)
    );
  }, [frequentActions]);
  
  return (
    <Menu>
      {sortedActions.map(action => (
        <MenuItem key={action.id} {...action} />
      ))}
    </Menu>
  );
}
\`\`\`

### 3. Expertise Adaptation

Interfaces that grow with the user:

\`\`\`tsx
const expertiseLevels = {
  beginner: {
    showTooltips: true,
    features: ['basic'],
    shortcuts: false
  },
  intermediate: {
    showTooltips: 'on-demand',
    features: ['basic', 'advanced'],
    shortcuts: true
  },
  expert: {
    showTooltips: false,
    features: ['all'],
    shortcuts: true,
    showDeveloperTools: true
  }
};
\`\`\`

## Ethical Implementation

### Transparency

Always show that the interface is adapting:

\`\`\`tsx
function AdaptiveNotice() {
  return (
    <Tooltip content="This menu was reorganized based on your usage">
      <InfoIcon className="text-muted-foreground" />
    </Tooltip>
  );
}
\`\`\`

### User Control

Allow override of adaptations:

\`\`\`tsx
function AdaptationSettings() {
  return (
    <Settings>
      <Toggle label="Automatically reorder menus" />
      <Toggle label="Adapt theme to time of day" />
      <Toggle label="Simplified mode" />
      <Button variant="ghost">Reset all adaptations</Button>
    </Settings>
  );
}
\`\`\`

## Anti-AI Considerations

Excessive personalization creates bubbles. Balance with:

- **Novelty**: Expose features the user doesn't know yet
- **Serendipity**: Keep some elements fixed/random
- **Agency**: User should feel control, not manipulation`
    }
  },
  {
    id: 'voice-conversational-ui',
    slug: 'voice-conversational-ui',
    category: 'trends-2025',
    order: 4,
    readingTime: 8,
    title: {
      pt: 'Voice UI & Interfaces Conversacionais',
      en: 'Voice UI & Conversational Interfaces'
    },
    description: {
      pt: 'Design de experiências baseadas em voz e linguagem natural.',
      en: 'Designing experiences based on voice and natural language.'
    },
    content: {
      pt: `# Voice UI & Interfaces Conversacionais

Com a evolução dos LLMs, interfaces de voz deixaram de ser novelty para se tornarem **modalidade principal** em muitos contextos.

## Princípios de Voice UI

### 1. Conversação Natural

Não force o usuário a falar como um robô:

\`\`\`
❌ "Comando: definir alarme horário oito zero zero"
✅ "Me acorda às 8 amanhã"
\`\`\`

### 2. Contexto e Memória

\`\`\`tsx
// Exemplo de diálogo contextual
const conversation = [
  { user: "Qual a previsão para amanhã?" },
  { assistant: "Amanhã teremos 28°C com sol." },
  { user: "E no fim de semana?" },  // Entende que é sobre clima
  { assistant: "Sábado 25°C parcialmente nublado, domingo 22°C com chuva." }
];
\`\`\`

### 3. Feedback Multimodal

Voz não é só áudio — combine com visual:

\`\`\`tsx
function VoiceAssistant() {
  const { isListening, transcript, response } = useVoice();
  
  return (
    <div className="flex items-center gap-4">
      {/* Visualização do estado */}
      <VoiceOrb 
        state={isListening ? 'listening' : 'idle'}
        className="animate-pulse"
      />
      
      {/* Transcrição em tempo real */}
      {transcript && (
        <p className="font-mono text-sm opacity-70">{transcript}</p>
      )}
      
      {/* Resposta visual + áudio */}
      {response && <ResponseCard>{response}</ResponseCard>}
    </div>
  );
}
\`\`\`

## Padrões de Conversação

### Confirmação Implícita

\`\`\`
Usuário: "Reserve uma mesa para 4 às 20h"
Sistema: "Reservei para 4 pessoas às 20h no Restaurante ABC. 
          Quer que eu adicione ao seu calendário?"
\`\`\`

### Recuperação de Erro Graceful

\`\`\`
Usuário: "Toca aquela música da... do cara..."
Sistema: "Não consegui identificar. Você lembra um trecho da letra 
          ou o nome do artista?"
\`\`\`

### Proactive Assistance

\`\`\`
Sistema: "Você tem uma reunião em 30 minutos no centro. 
          Considerando o trânsito, sugiro sair agora."
\`\`\`

## Voice Anti-AI

Interfaces de voz genéricas soam iguais. Para distinção:

- **Tom de voz único**: Formal? Casual? Técnico?
- **Vocabulário de marca**: Expressões próprias
- **Personalidade consistente**: Não mude com cada update`,

      en: `# Voice UI & Conversational Interfaces

With the evolution of LLMs, voice interfaces have gone from novelty to becoming the **primary modality** in many contexts.

## Voice UI Principles

### 1. Natural Conversation

Don't force users to speak like robots:

\`\`\`
❌ "Command: set alarm time eight zero zero"
✅ "Wake me up at 8 tomorrow"
\`\`\`

### 2. Context and Memory

\`\`\`tsx
// Contextual dialogue example
const conversation = [
  { user: "What's the forecast for tomorrow?" },
  { assistant: "Tomorrow will be 82°F with sun." },
  { user: "And the weekend?" },  // Understands it's about weather
  { assistant: "Saturday 77°F partly cloudy, Sunday 72°F with rain." }
];
\`\`\`

### 3. Multimodal Feedback

Voice isn't just audio — combine with visual:

\`\`\`tsx
function VoiceAssistant() {
  const { isListening, transcript, response } = useVoice();
  
  return (
    <div className="flex items-center gap-4">
      {/* State visualization */}
      <VoiceOrb 
        state={isListening ? 'listening' : 'idle'}
        className="animate-pulse"
      />
      
      {/* Real-time transcription */}
      {transcript && (
        <p className="font-mono text-sm opacity-70">{transcript}</p>
      )}
      
      {/* Visual + audio response */}
      {response && <ResponseCard>{response}</ResponseCard>}
    </div>
  );
}
\`\`\`

## Conversation Patterns

### Implicit Confirmation

\`\`\`
User: "Book a table for 4 at 8pm"
System: "Booked for 4 people at 8pm at Restaurant ABC. 
         Want me to add it to your calendar?"
\`\`\`

### Graceful Error Recovery

\`\`\`
User: "Play that song by... that guy..."
System: "I couldn't identify it. Do you remember a lyric 
         or the artist's name?"
\`\`\`

### Proactive Assistance

\`\`\`
System: "You have a meeting in 30 minutes downtown. 
         Considering traffic, I suggest leaving now."
\`\`\`

## Voice Anti-AI

Generic voice interfaces sound the same. For distinction:

- **Unique tone of voice**: Formal? Casual? Technical?
- **Brand vocabulary**: Proprietary expressions
- **Consistent personality**: Don't change with each update`
    }
  },
  {
    id: 'sustainable-design',
    slug: 'sustainable-design',
    category: 'trends-2025',
    order: 5,
    readingTime: 7,
    title: {
      pt: 'Design Sustentável: Reduzindo o Footprint Digital',
      en: 'Sustainable Design: Reducing Digital Footprint'
    },
    description: {
      pt: 'Práticas de design que minimizam o impacto ambiental de produtos digitais.',
      en: 'Design practices that minimize the environmental impact of digital products.'
    },
    content: {
      pt: `# Design Sustentável: Reduzindo o Footprint Digital

A internet consome ~4% da energia global. Cada request, cada imagem, cada animação tem um custo ambiental. **Design sustentável é design responsável.**

## Impacto Real

- Uma página web média: ~2g CO2 por visita
- Streaming 4K por 1h: ~300g CO2
- Email com anexo de 1MB: ~19g CO2
- Data centers: 1% do consumo global de eletricidade

## Práticas de Design Sustentável

### 1. Otimização de Assets

\`\`\`tsx
// ❌ Carrega imagem full-res sempre
<img src="/hero-4k.jpg" />

// ✅ Responsive images com lazy loading
<picture>
  <source 
    srcSet="/hero-400.webp 400w, /hero-800.webp 800w"
    type="image/webp"
  />
  <img 
    src="/hero-800.jpg"
    loading="lazy"
    decoding="async"
    alt="Hero image"
  />
</picture>
\`\`\`

### 2. Dark Mode por Padrão

OLED screens consomem menos energia com pixels escuros:

\`\`\`css
/* Respeite a preferência do sistema */
@media (prefers-color-scheme: dark) {
  :root {
    --background: hsl(0, 0%, 7%);
    --foreground: hsl(0, 0%, 96%);
  }
}
\`\`\`

### 3. Código Eficiente

\`\`\`tsx
// ❌ Re-renders desnecessários
function Component() {
  const [data] = useState(expensiveCalculation());
  return <Display data={data} />;
}

// ✅ Cálculo memoizado
function Component() {
  const data = useMemo(() => expensiveCalculation(), []);
  return <Display data={data} />;
}
\`\`\`

### 4. Redução de Requests

\`\`\`tsx
// Bundle crítico inline, resto lazy
const CriticalCSS = () => (
  <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
);

const LazyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

## Métricas de Sustentabilidade

| Métrica | Bom | Ruim |
|---------|-----|------|
| Page weight | <500KB | >2MB |
| Requests | <20 | >50 |
| CO2/page | <0.5g | >2g |
| Load time | <2s | >5s |

## Ferramentas

- **Website Carbon Calculator**: Estima CO2 por página
- **Lighthouse**: Métricas de performance = eficiência
- **Bundlephobia**: Custo de dependências

**Design sustentável é também design Anti-AI**: foco em essencial, sem bloat.`,

      en: `# Sustainable Design: Reducing Digital Footprint

The internet consumes ~4% of global energy. Every request, every image, every animation has an environmental cost. **Sustainable design is responsible design.**

## Real Impact

- An average web page: ~2g CO2 per visit
- 4K streaming for 1h: ~300g CO2
- Email with 1MB attachment: ~19g CO2
- Data centers: 1% of global electricity consumption

## Sustainable Design Practices

### 1. Asset Optimization

\`\`\`tsx
// ❌ Always loads full-res image
<img src="/hero-4k.jpg" />

// ✅ Responsive images with lazy loading
<picture>
  <source 
    srcSet="/hero-400.webp 400w, /hero-800.webp 800w"
    type="image/webp"
  />
  <img 
    src="/hero-800.jpg"
    loading="lazy"
    decoding="async"
    alt="Hero image"
  />
</picture>
\`\`\`

### 2. Dark Mode by Default

OLED screens consume less energy with dark pixels:

\`\`\`css
/* Respect system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --background: hsl(0, 0%, 7%);
    --foreground: hsl(0, 0%, 96%);
  }
}
\`\`\`

### 3. Efficient Code

\`\`\`tsx
// ❌ Unnecessary re-renders
function Component() {
  const [data] = useState(expensiveCalculation());
  return <Display data={data} />;
}

// ✅ Memoized calculation
function Component() {
  const data = useMemo(() => expensiveCalculation(), []);
  return <Display data={data} />;
}
\`\`\`

### 4. Request Reduction

\`\`\`tsx
// Critical bundle inline, rest lazy
const CriticalCSS = () => (
  <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
);

const LazyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

## Sustainability Metrics

| Metric | Good | Bad |
|--------|------|-----|
| Page weight | <500KB | >2MB |
| Requests | <20 | >50 |
| CO2/page | <0.5g | >2g |
| Load time | <2s | >5s |

## Tools

- **Website Carbon Calculator**: Estimates CO2 per page
- **Lighthouse**: Performance metrics = efficiency
- **Bundlephobia**: Dependency cost

**Sustainable design is also Anti-AI design**: focus on essentials, no bloat.`
    }
  }
];
