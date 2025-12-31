import { Article } from '../types';

export const ethicsAccessibilityArticles: Article[] = [
  {
    id: 'wcag-essentials',
    slug: 'wcag-essentials',
    category: 'ethics-accessibility',
    order: 1,
    readingTime: 12,
    title: {
      pt: 'WCAG Essencial: Acessibilidade Não É Opcional',
      en: 'WCAG Essentials: Accessibility Is Not Optional'
    },
    description: {
      pt: 'Os fundamentos das diretrizes WCAG e como implementá-las em projetos reais.',
      en: 'The fundamentals of WCAG guidelines and how to implement them in real projects.'
    },
    content: {
      pt: `# WCAG Essencial: Acessibilidade Não É Opcional

WCAG (Web Content Accessibility Guidelines) não é um checklist burocrático — é a diferença entre **incluir ou excluir** milhões de usuários.

## Os Quatro Princípios (POUR)

### 1. Perceptível

Conteúdo deve ser apresentado de formas que o usuário pode perceber:

\`\`\`tsx
// ❌ Imagem sem texto alternativo
<img src="/chart.png" />

// ✅ Com descrição adequada
<img 
  src="/chart.png" 
  alt="Gráfico de barras mostrando crescimento de 45% nas vendas Q3 vs Q2"
/>

// ✅✅ Para imagens complexas, use descrição longa
<figure>
  <img src="/chart.png" alt="Gráfico de vendas trimestrais" />
  <figcaption>
    <details>
      <summary>Descrição detalhada do gráfico</summary>
      <p>O gráfico mostra vendas por trimestre: Q1: $120k, Q2: $145k...</p>
    </details>
  </figcaption>
</figure>
\`\`\`

### 2. Operável

Interface navegável por qualquer método de input:

\`\`\`tsx
// ❌ Só funciona com mouse
<div onClick={handleClick}>Clique aqui</div>

// ✅ Acessível por teclado
<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Clique aqui
</button>

// ✅✅ Use elementos semânticos que já têm comportamento correto
<button onClick={handleClick}>Clique aqui</button>
\`\`\`

### 3. Compreensível

Conteúdo e operação devem ser claros:

\`\`\`tsx
// ❌ Mensagem de erro genérica
<span className="text-destructive">Erro</span>

// ✅ Mensagem específica e acionável
<span role="alert" className="text-destructive">
  O email deve conter @ e um domínio válido. Exemplo: nome@empresa.com
</span>
\`\`\`

### 4. Robusto

Funciona com tecnologias assistivas:

\`\`\`tsx
// Use ARIA quando HTML semântico não é suficiente
<nav aria-label="Navegação principal">
  <ul role="menubar">
    <li role="none">
      <a role="menuitem" href="/">Home</a>
    </li>
  </ul>
</nav>
\`\`\`

## Níveis de Conformidade

| Nível | Requisito | Exemplo |
|-------|-----------|---------|
| A | Mínimo | Alt text, navegação por teclado |
| AA | Recomendado | Contraste 4.5:1, resize até 200% |
| AAA | Ideal | Contraste 7:1, língua de sinais |

## Testes Práticos

\`\`\`bash
# Automatizados
npm install axe-core @axe-core/react

# No componente
import { axe } from '@axe-core/react';
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
\`\`\`

### Teste Manual Essencial

1. **Tab through**: Navegue só com Tab — tudo é acessível?
2. **Screen reader**: Teste com NVDA (Windows) ou VoiceOver (Mac)
3. **Zoom 200%**: O layout quebra?
4. **Modo alto contraste**: Elementos desaparecem?

## Anti-AI e Acessibilidade

IA frequentemente ignora acessibilidade por padrão. **Sempre revise** geração automática para:
- Alt texts genéricos ("image" não serve)
- Contraste insuficiente em paletas geradas
- Componentes custom sem ARIA`,

      en: `# WCAG Essentials: Accessibility Is Not Optional

WCAG (Web Content Accessibility Guidelines) is not a bureaucratic checklist — it's the difference between **including or excluding** millions of users.

## The Four Principles (POUR)

### 1. Perceivable

Content must be presented in ways users can perceive:

\`\`\`tsx
// ❌ Image without alt text
<img src="/chart.png" />

// ✅ With adequate description
<img 
  src="/chart.png" 
  alt="Bar chart showing 45% sales growth Q3 vs Q2"
/>

// ✅✅ For complex images, use long description
<figure>
  <img src="/chart.png" alt="Quarterly sales chart" />
  <figcaption>
    <details>
      <summary>Detailed chart description</summary>
      <p>The chart shows sales by quarter: Q1: $120k, Q2: $145k...</p>
    </details>
  </figcaption>
</figure>
\`\`\`

### 2. Operable

Interface navigable by any input method:

\`\`\`tsx
// ❌ Only works with mouse
<div onClick={handleClick}>Click here</div>

// ✅ Keyboard accessible
<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Click here
</button>

// ✅✅ Use semantic elements that already have correct behavior
<button onClick={handleClick}>Click here</button>
\`\`\`

### 3. Understandable

Content and operation should be clear:

\`\`\`tsx
// ❌ Generic error message
<span className="text-destructive">Error</span>

// ✅ Specific and actionable message
<span role="alert" className="text-destructive">
  Email must contain @ and a valid domain. Example: name@company.com
</span>
\`\`\`

### 4. Robust

Works with assistive technologies:

\`\`\`tsx
// Use ARIA when semantic HTML isn't enough
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a role="menuitem" href="/">Home</a>
    </li>
  </ul>
</nav>
\`\`\`

## Conformance Levels

| Level | Requirement | Example |
|-------|-------------|---------|
| A | Minimum | Alt text, keyboard navigation |
| AA | Recommended | 4.5:1 contrast, resize to 200% |
| AAA | Ideal | 7:1 contrast, sign language |

## Practical Testing

\`\`\`bash
# Automated
npm install axe-core @axe-core/react

# In component
import { axe } from '@axe-core/react';
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
\`\`\`

### Essential Manual Testing

1. **Tab through**: Navigate with Tab only — is everything accessible?
2. **Screen reader**: Test with NVDA (Windows) or VoiceOver (Mac)
3. **200% zoom**: Does layout break?
4. **High contrast mode**: Do elements disappear?

## Anti-AI and Accessibility

AI frequently ignores accessibility by default. **Always review** automatic generation for:
- Generic alt texts ("image" doesn't work)
- Insufficient contrast in generated palettes
- Custom components without ARIA`
    }
  },
  {
    id: 'inclusive-design',
    slug: 'inclusive-design',
    category: 'ethics-accessibility',
    order: 2,
    readingTime: 10,
    title: {
      pt: 'Design Inclusivo: Além da Acessibilidade',
      en: 'Inclusive Design: Beyond Accessibility'
    },
    description: {
      pt: 'Como criar experiências que funcionam para a diversidade humana completa.',
      en: 'How to create experiences that work for complete human diversity.'
    },
    content: {
      pt: `# Design Inclusivo: Além da Acessibilidade

Design Inclusivo vai além de compliance. É uma **filosofia de design** que considera a diversidade humana desde o início, não como afterthought.

## O Espectro da Capacidade

Deficiências não são binárias — são um espectro:

| Tipo | Permanente | Temporária | Situacional |
|------|------------|------------|-------------|
| Visual | Cegueira | Catarata | Sol no celular |
| Motora | Amputação | Braço engessado | Segurando bebê |
| Auditiva | Surdez | Infecção de ouvido | Ambiente barulhento |
| Cognitiva | Autismo | Concussão | Estresse extremo |

Quando você design para "extremos", beneficia **todos**.

## Princípios de Design Inclusivo

### 1. Reconheça Exclusão

\`\`\`tsx
// ❌ Exclui usuários com baixa visão
<button className="text-gray-400 bg-gray-200">
  Continuar
</button>

// ✅ Contraste adequado beneficia a todos
<button className="text-foreground bg-primary">
  Continuar
</button>
\`\`\`

### 2. Aprenda com a Diversidade

Inclua usuários diversos em pesquisa:
- Pessoas com deficiências
- Idosos
- Não-nativos digitais
- Usuários em contextos extremos

### 3. Resolva para Um, Estenda para Muitos

\`\`\`tsx
// Legendas foram criadas para surdos
// Beneficiam: não-nativos, ambientes barulhentos, 
// pessoas aprendendo a ler, todos em transporte público

<Video>
  <Track 
    kind="captions" 
    src="/captions.vtt" 
    default 
  />
</Video>
\`\`\`

## Implementação Prática

### Múltiplos Métodos de Input

\`\`\`tsx
function SearchInput() {
  const { startListening, transcript } = useVoice();
  
  return (
    <div className="flex gap-2">
      <input 
        type="search"
        value={transcript || inputValue}
        placeholder="Buscar..."
      />
      <button 
        onClick={startListening}
        aria-label="Busca por voz"
      >
        <MicIcon />
      </button>
    </div>
  );
}
\`\`\`

### Feedback Multi-Sensorial

\`\`\`tsx
function SuccessNotification({ message }) {
  // Visual + Sonoro + Háptico
  useEffect(() => {
    playSound('success');
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }, []);
  
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="flex items-center gap-2 text-success"
    >
      <CheckIcon aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
\`\`\`

### Redução de Carga Cognitiva

\`\`\`tsx
// Progressive disclosure
function ComplexForm() {
  const [step, setStep] = useState(1);
  
  return (
    <form>
      <ProgressIndicator current={step} total={4} />
      
      {step === 1 && <BasicInfo onNext={() => setStep(2)} />}
      {step === 2 && <ContactDetails onNext={() => setStep(3)} />}
      {/* ... */}
      
      <p className="text-sm text-muted-foreground">
        Etapa {step} de 4 — você pode voltar a qualquer momento
      </p>
    </form>
  );
}
\`\`\`

## Anti-AI: Inclusão Genuína

IA tende a otimizar para a "média". Design Inclusivo exige atenção deliberada às margens. Nunca delegue decisões de inclusão completamente à automação.`,

      en: `# Inclusive Design: Beyond Accessibility

Inclusive Design goes beyond compliance. It's a **design philosophy** that considers human diversity from the start, not as an afterthought.

## The Ability Spectrum

Disabilities are not binary — they're a spectrum:

| Type | Permanent | Temporary | Situational |
|------|-----------|-----------|-------------|
| Visual | Blindness | Cataracts | Sun on phone |
| Motor | Amputation | Broken arm | Holding baby |
| Auditory | Deafness | Ear infection | Noisy environment |
| Cognitive | Autism | Concussion | Extreme stress |

When you design for "extremes", you benefit **everyone**.

## Inclusive Design Principles

### 1. Recognize Exclusion

\`\`\`tsx
// ❌ Excludes users with low vision
<button className="text-gray-400 bg-gray-200">
  Continue
</button>

// ✅ Adequate contrast benefits everyone
<button className="text-foreground bg-primary">
  Continue
</button>
\`\`\`

### 2. Learn from Diversity

Include diverse users in research:
- People with disabilities
- Elderly
- Non-digital natives
- Users in extreme contexts

### 3. Solve for One, Extend to Many

\`\`\`tsx
// Captions were created for the deaf
// Benefit: non-natives, noisy environments, 
// people learning to read, everyone on public transport

<Video>
  <Track 
    kind="captions" 
    src="/captions.vtt" 
    default 
  />
</Video>
\`\`\`

## Practical Implementation

### Multiple Input Methods

\`\`\`tsx
function SearchInput() {
  const { startListening, transcript } = useVoice();
  
  return (
    <div className="flex gap-2">
      <input 
        type="search"
        value={transcript || inputValue}
        placeholder="Search..."
      />
      <button 
        onClick={startListening}
        aria-label="Voice search"
      >
        <MicIcon />
      </button>
    </div>
  );
}
\`\`\`

### Multi-Sensory Feedback

\`\`\`tsx
function SuccessNotification({ message }) {
  // Visual + Sound + Haptic
  useEffect(() => {
    playSound('success');
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }, []);
  
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="flex items-center gap-2 text-success"
    >
      <CheckIcon aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
\`\`\`

### Cognitive Load Reduction

\`\`\`tsx
// Progressive disclosure
function ComplexForm() {
  const [step, setStep] = useState(1);
  
  return (
    <form>
      <ProgressIndicator current={step} total={4} />
      
      {step === 1 && <BasicInfo onNext={() => setStep(2)} />}
      {step === 2 && <ContactDetails onNext={() => setStep(3)} />}
      {/* ... */}
      
      <p className="text-sm text-muted-foreground">
        Step {step} of 4 — you can go back at any time
      </p>
    </form>
  );
}
\`\`\`

## Anti-AI: Genuine Inclusion

AI tends to optimize for the "average". Inclusive Design requires deliberate attention to the margins. Never fully delegate inclusion decisions to automation.`
    }
  },
  {
    id: 'dark-patterns',
    slug: 'dark-patterns',
    category: 'ethics-accessibility',
    order: 3,
    readingTime: 9,
    title: {
      pt: 'Dark Patterns: Reconhecer e Evitar',
      en: 'Dark Patterns: Recognize and Avoid'
    },
    description: {
      pt: 'Práticas manipulativas de design e como criar interfaces éticas.',
      en: 'Manipulative design practices and how to create ethical interfaces.'
    },
    content: {
      pt: `# Dark Patterns: Reconhecer e Evitar

Dark Patterns são **truques de design** que manipulam usuários a fazer coisas que não pretendem. São eficazes no curto prazo, mas destroem confiança e reputação.

## Tipos Comuns

### 1. Roach Motel

Fácil entrar, difícil sair:

\`\`\`tsx
// ❌ Dark Pattern: Cancelamento impossível
// Botão "Assinar" proeminente, "Cancelar" requer 
// ligação telefônica em horário comercial

// ✅ Ético: Mesma facilidade para entrar e sair
<div className="flex gap-4">
  <Button variant="primary">Assinar Premium</Button>
  <Button variant="outline">Cancelar Assinatura</Button>
</div>
\`\`\`

### 2. Confirmshaming

Culpar o usuário por não aceitar:

\`\`\`tsx
// ❌ Dark Pattern
<Dialog>
  <Button>Sim, quero economizar 50%!</Button>
  <Button variant="ghost">
    Não, prefiro pagar mais e perder dinheiro
  </Button>
</Dialog>

// ✅ Ético: Opções neutras
<Dialog>
  <Button>Aceitar oferta</Button>
  <Button variant="outline">Não, obrigado</Button>
</Dialog>
\`\`\`

### 3. Bait and Switch

Prometer uma coisa, entregar outra:

\`\`\`tsx
// ❌ Dark Pattern: Botão "X" que abre nova página
// ✅ Ético: "X" sempre fecha, sem exceções
\`\`\`

### 4. Hidden Costs

Custos revelados só no final:

\`\`\`tsx
// ❌ Dark Pattern: Taxas na última etapa
// Produto: R$100 → Carrinho: R$100 → Checkout: R$128 (+ taxa + frete)

// ✅ Ético: Transparência desde o início
<ProductCard>
  <Price base={100} shipping={15} fees={13} total={128} />
  <small>Preço total incluindo frete e taxas</small>
</ProductCard>
\`\`\`

### 5. Forced Continuity

Cobrança automática sem aviso:

\`\`\`tsx
// ✅ Ético: Lembrete antes de cobrança
function TrialReminder() {
  return (
    <Alert>
      <h4>Seu trial termina em 3 dias</h4>
      <p>Após isso, você será cobrado R$29/mês.</p>
      <div className="flex gap-2">
        <Button>Continuar Premium</Button>
        <Button variant="outline">Cancelar antes</Button>
      </div>
    </Alert>
  );
}
\`\`\`

## Princípios de Design Ético

### Transparência

\`\`\`tsx
// Seja claro sobre o que vai acontecer
<Button onClick={handleSubmit}>
  Publicar post (visível para todos)
</Button>
\`\`\`

### Controle

\`\`\`tsx
// Usuário pode reverter qualquer ação
<UndoableAction
  action={deleteItem}
  undoFor={10000} // 10 segundos para desfazer
  message="Item deletado"
/>
\`\`\`

### Respeito

\`\`\`tsx
// Não explore vulnerabilidades psicológicas
// ❌ "Última chance!" "Só restam 2!"
// ✅ Informação factual sem pressão artificial
\`\`\`

## Anti-AI e Ética

IA pode ser treinada em padrões que funcionam — incluindo dark patterns. **Questione sempre** sugestões de "otimização de conversão" que pareçam manipulativas.`,

      en: `# Dark Patterns: Recognize and Avoid

Dark Patterns are **design tricks** that manipulate users into doing things they don't intend. They're effective short-term but destroy trust and reputation.

## Common Types

### 1. Roach Motel

Easy to enter, hard to exit:

\`\`\`tsx
// ❌ Dark Pattern: Impossible cancellation
// "Subscribe" button prominent, "Cancel" requires 
// phone call during business hours

// ✅ Ethical: Same ease to enter and exit
<div className="flex gap-4">
  <Button variant="primary">Subscribe Premium</Button>
  <Button variant="outline">Cancel Subscription</Button>
</div>
\`\`\`

### 2. Confirmshaming

Blaming the user for not accepting:

\`\`\`tsx
// ❌ Dark Pattern
<Dialog>
  <Button>Yes, I want to save 50%!</Button>
  <Button variant="ghost">
    No, I prefer to pay more and lose money
  </Button>
</Dialog>

// ✅ Ethical: Neutral options
<Dialog>
  <Button>Accept offer</Button>
  <Button variant="outline">No, thanks</Button>
</Dialog>
\`\`\`

### 3. Bait and Switch

Promise one thing, deliver another:

\`\`\`tsx
// ❌ Dark Pattern: "X" button that opens new page
// ✅ Ethical: "X" always closes, no exceptions
\`\`\`

### 4. Hidden Costs

Costs revealed only at the end:

\`\`\`tsx
// ❌ Dark Pattern: Fees at last step
// Product: $100 → Cart: $100 → Checkout: $128 (+ fee + shipping)

// ✅ Ethical: Transparency from the start
<ProductCard>
  <Price base={100} shipping={15} fees={13} total={128} />
  <small>Total price including shipping and fees</small>
</ProductCard>
\`\`\`

### 5. Forced Continuity

Automatic billing without notice:

\`\`\`tsx
// ✅ Ethical: Reminder before billing
function TrialReminder() {
  return (
    <Alert>
      <h4>Your trial ends in 3 days</h4>
      <p>After that, you'll be charged $29/month.</p>
      <div className="flex gap-2">
        <Button>Continue Premium</Button>
        <Button variant="outline">Cancel before</Button>
      </div>
    </Alert>
  );
}
\`\`\`

## Ethical Design Principles

### Transparency

\`\`\`tsx
// Be clear about what will happen
<Button onClick={handleSubmit}>
  Publish post (visible to everyone)
</Button>
\`\`\`

### Control

\`\`\`tsx
// User can reverse any action
<UndoableAction
  action={deleteItem}
  undoFor={10000} // 10 seconds to undo
  message="Item deleted"
/>
\`\`\`

### Respect

\`\`\`tsx
// Don't exploit psychological vulnerabilities
// ❌ "Last chance!" "Only 2 left!"
// ✅ Factual information without artificial pressure
\`\`\`

## Anti-AI and Ethics

AI can be trained on patterns that work — including dark patterns. **Always question** "conversion optimization" suggestions that seem manipulative.`
    }
  },
  {
    id: 'privacy-by-design',
    slug: 'privacy-by-design',
    category: 'ethics-accessibility',
    order: 4,
    readingTime: 8,
    title: {
      pt: 'Privacy by Design: Proteção Desde a Concepção',
      en: 'Privacy by Design: Protection from Conception'
    },
    description: {
      pt: 'Como incorporar privacidade como princípio fundamental do design.',
      en: 'How to incorporate privacy as a fundamental design principle.'
    },
    content: {
      pt: `# Privacy by Design: Proteção Desde a Concepção

Privacy by Design é uma abordagem que integra **proteção de dados desde o início** do processo de design, não como remendo posterior.

## Os 7 Princípios Fundamentais

### 1. Proativo, Não Reativo

Antecipe e previna problemas de privacidade:

\`\`\`tsx
// Antes de coletar dados, pergunte:
// - É realmente necessário?
// - Qual o mínimo que precisamos?
// - Como vamos proteger?
// - Quando vamos deletar?

interface DataCollectionCheck {
  necessary: boolean;
  minimumFields: string[];
  encryption: 'at-rest' | 'in-transit' | 'both';
  retention: Duration;
  deletionProcess: 'automatic' | 'manual';
}
\`\`\`

### 2. Privacidade como Padrão

\`\`\`tsx
// ❌ Opt-out: Compartilhamento ativado por padrão
const defaultSettings = {
  shareWithPartners: true,
  publicProfile: true,
  trackingEnabled: true
};

// ✅ Opt-in: Privacidade máxima por padrão
const defaultSettings = {
  shareWithPartners: false,
  publicProfile: false,
  trackingEnabled: false
};
\`\`\`

### 3. Privacidade Embutida no Design

\`\`\`tsx
// Arquitetura que minimiza exposição
function UserProfile({ userId }) {
  // Carrega apenas dados necessários para a view
  const { name, avatar } = useUser(userId, {
    select: ['name', 'avatar'] // Não carrega email, telefone, etc.
  });
  
  return (
    <Profile>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Profile>
  );
}
\`\`\`

### 4. Funcionalidade Total

Privacidade não deve prejudicar a experiência:

\`\`\`tsx
// Ofereça experiência completa sem rastreamento
function Analytics() {
  // Métricas agregadas, não individuais
  trackEvent({
    event: 'page_view',
    page: '/products',
    // Sem user_id, sem IP, sem fingerprint
  });
}
\`\`\`

### 5. Segurança End-to-End

\`\`\`tsx
// Dados protegidos em todo o ciclo de vida
const dataLifecycle = {
  collection: 'encrypted-form',
  transmission: 'https-only',
  storage: 'encrypted-at-rest',
  processing: 'minimal-access',
  deletion: 'secure-wipe'
};
\`\`\`

### 6. Transparência

\`\`\`tsx
function PrivacyDashboard() {
  return (
    <section>
      <h2>Seus Dados</h2>
      <DataInventory /> {/* O que coletamos */}
      <DataUsage />     {/* Como usamos */}
      <DataSharing />   {/* Com quem compartilhamos */}
      <ExportButton />  {/* Baixar tudo */}
      <DeleteButton />  {/* Apagar tudo */}
    </section>
  );
}
\`\`\`

### 7. Respeito ao Usuário

O usuário é o centro, não o produto:

\`\`\`tsx
// Comunicação clara sobre coleta
<ConsentDialog>
  <h3>Precisamos de sua localização</h3>
  <p>Para mostrar lojas próximas. Nunca compartilhamos com terceiros.</p>
  <Button onClick={grantLocation}>Permitir localização</Button>
  <Button variant="outline" onClick={denyLocation}>
    Não, vou buscar manualmente
  </Button>
</ConsentDialog>
\`\`\`

## Anti-AI e Privacidade

IA adora dados. Quanto mais, melhor para treinar modelos. **Resista** à tentação de coletar "porque podemos". Colete apenas o essencial.`,

      en: `# Privacy by Design: Protection from Conception

Privacy by Design is an approach that integrates **data protection from the start** of the design process, not as a later patch.

## The 7 Fundamental Principles

### 1. Proactive, Not Reactive

Anticipate and prevent privacy issues:

\`\`\`tsx
// Before collecting data, ask:
// - Is it really necessary?
// - What's the minimum we need?
// - How will we protect it?
// - When will we delete it?

interface DataCollectionCheck {
  necessary: boolean;
  minimumFields: string[];
  encryption: 'at-rest' | 'in-transit' | 'both';
  retention: Duration;
  deletionProcess: 'automatic' | 'manual';
}
\`\`\`

### 2. Privacy as Default

\`\`\`tsx
// ❌ Opt-out: Sharing enabled by default
const defaultSettings = {
  shareWithPartners: true,
  publicProfile: true,
  trackingEnabled: true
};

// ✅ Opt-in: Maximum privacy by default
const defaultSettings = {
  shareWithPartners: false,
  publicProfile: false,
  trackingEnabled: false
};
\`\`\`

### 3. Privacy Embedded in Design

\`\`\`tsx
// Architecture that minimizes exposure
function UserProfile({ userId }) {
  // Load only necessary data for the view
  const { name, avatar } = useUser(userId, {
    select: ['name', 'avatar'] // Doesn't load email, phone, etc.
  });
  
  return (
    <Profile>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Profile>
  );
}
\`\`\`

### 4. Full Functionality

Privacy shouldn't hurt the experience:

\`\`\`tsx
// Offer complete experience without tracking
function Analytics() {
  // Aggregated metrics, not individual
  trackEvent({
    event: 'page_view',
    page: '/products',
    // No user_id, no IP, no fingerprint
  });
}
\`\`\`

### 5. End-to-End Security

\`\`\`tsx
// Data protected throughout lifecycle
const dataLifecycle = {
  collection: 'encrypted-form',
  transmission: 'https-only',
  storage: 'encrypted-at-rest',
  processing: 'minimal-access',
  deletion: 'secure-wipe'
};
\`\`\`

### 6. Transparency

\`\`\`tsx
function PrivacyDashboard() {
  return (
    <section>
      <h2>Your Data</h2>
      <DataInventory /> {/* What we collect */}
      <DataUsage />     {/* How we use it */}
      <DataSharing />   {/* Who we share with */}
      <ExportButton />  {/* Download everything */}
      <DeleteButton />  {/* Delete everything */}
    </section>
  );
}
\`\`\`

### 7. Respect for User

The user is the center, not the product:

\`\`\`tsx
// Clear communication about collection
<ConsentDialog>
  <h3>We need your location</h3>
  <p>To show nearby stores. We never share with third parties.</p>
  <Button onClick={grantLocation}>Allow location</Button>
  <Button variant="outline" onClick={denyLocation}>
    No, I'll search manually
  </Button>
</ConsentDialog>
\`\`\`

## Anti-AI and Privacy

AI loves data. The more, the better for training models. **Resist** the temptation to collect "because we can". Collect only what's essential.`
    }
  },
  {
    id: 'cognitive-accessibility',
    slug: 'cognitive-accessibility',
    category: 'ethics-accessibility',
    order: 5,
    readingTime: 8,
    title: {
      pt: 'Acessibilidade Cognitiva: Design para Todos os Cérebros',
      en: 'Cognitive Accessibility: Design for All Brains'
    },
    description: {
      pt: 'Técnicas para criar interfaces que funcionam para diversidade cognitiva.',
      en: 'Techniques for creating interfaces that work for cognitive diversity.'
    },
    content: {
      pt: `# Acessibilidade Cognitiva: Design para Todos os Cérebros

Acessibilidade cognitiva considera usuários com dislexia, TDAH, autismo, ansiedade, deficiências de memória e diferenças de aprendizado.

## Princípios Fundamentais

### 1. Simplicidade e Clareza

\`\`\`tsx
// ❌ Texto denso e jargão
<p>
  Utilize nossa plataforma SaaS B2B para otimizar 
  seu workflow end-to-end com KPIs acionáveis.
</p>

// ✅ Linguagem simples e direta
<p>
  Nossa ferramenta ajuda sua equipe a trabalhar 
  melhor e medir resultados.
</p>
\`\`\`

### 2. Estrutura Visual Clara

\`\`\`tsx
// Hierarquia visual óbvia
function Article() {
  return (
    <article className="space-y-8">
      {/* Título claramente maior */}
      <h1 className="text-4xl font-display">Título Principal</h1>
      
      {/* Resumo destacado */}
      <Summary className="border-l-4 border-accent pl-4">
        O que você vai aprender neste artigo...
      </Summary>
      
      {/* Seções com espaçamento generoso */}
      <section className="space-y-4">
        <h2 className="text-2xl">Primeira Seção</h2>
        <p>Conteúdo...</p>
      </section>
    </article>
  );
}
\`\`\`

### 3. Consistência Previsível

\`\`\`tsx
// Navegação sempre no mesmo lugar
// Ações similares têm aparência similar
// Mesma linguagem para mesmos conceitos

const navigationPattern = {
  location: 'left-sidebar', // Sempre
  primaryAction: 'top-right', // Sempre
  feedback: 'bottom-center', // Sempre
};
\`\`\`

### 4. Tempo Adequado

\`\`\`tsx
function TimedContent() {
  const [timeRemaining, setTimeRemaining] = useState(300);
  
  return (
    <div>
      <Timer value={timeRemaining} />
      
      {/* Sempre ofereça extensão */}
      <Button onClick={() => setTimeRemaining(t => t + 300)}>
        Preciso de mais tempo
      </Button>
      
      {/* Ou opção sem limite */}
      <Button variant="outline" onClick={() => setTimeRemaining(Infinity)}>
        Remover limite de tempo
      </Button>
    </div>
  );
}
\`\`\`

### 5. Redução de Distrações

\`\`\`tsx
// Modo foco disponível
function FocusMode({ children }) {
  const [focusMode, setFocusMode] = useState(false);
  
  return (
    <div className={cn(
      focusMode && 'focus-mode' // Esconde sidebar, notificações, etc.
    )}>
      <Toggle 
        pressed={focusMode} 
        onPressedChange={setFocusMode}
        aria-label="Modo foco"
      />
      {children}
    </div>
  );
}
\`\`\`

## Técnicas Específicas

### Para Dislexia

\`\`\`css
/* Fonte legível, espaçamento generoso */
.readable-text {
  font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
  line-height: 1.8;
  letter-spacing: 0.05em;
  word-spacing: 0.1em;
}
\`\`\`

### Para TDAH

\`\`\`tsx
// Tarefas quebradas em micro-passos
function ChecklistTask({ steps }) {
  return (
    <ul className="space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm">{step}</span>
          {/* Estimativa de tempo para cada passo */}
          <Badge variant="outline">~2 min</Badge>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### Para Ansiedade

\`\`\`tsx
// Sempre mostre que é reversível
<Dialog>
  <p>Tem certeza que deseja excluir?</p>
  <p className="text-sm text-muted-foreground">
    Você pode recuperar este item por 30 dias na lixeira.
  </p>
  <Button variant="destructive">Excluir</Button>
</Dialog>
\`\`\`

Design para cérebros diversos é design melhor para **todos**.`,

      en: `# Cognitive Accessibility: Design for All Brains

Cognitive accessibility considers users with dyslexia, ADHD, autism, anxiety, memory deficiencies, and learning differences.

## Fundamental Principles

### 1. Simplicity and Clarity

\`\`\`tsx
// ❌ Dense text and jargon
<p>
  Utilize our B2B SaaS platform to optimize 
  your end-to-end workflow with actionable KPIs.
</p>

// ✅ Simple and direct language
<p>
  Our tool helps your team work 
  better and measure results.
</p>
\`\`\`

### 2. Clear Visual Structure

\`\`\`tsx
// Obvious visual hierarchy
function Article() {
  return (
    <article className="space-y-8">
      {/* Clearly larger title */}
      <h1 className="text-4xl font-display">Main Title</h1>
      
      {/* Highlighted summary */}
      <Summary className="border-l-4 border-accent pl-4">
        What you'll learn in this article...
      </Summary>
      
      {/* Sections with generous spacing */}
      <section className="space-y-4">
        <h2 className="text-2xl">First Section</h2>
        <p>Content...</p>
      </section>
    </article>
  );
}
\`\`\`

### 3. Predictable Consistency

\`\`\`tsx
// Navigation always in the same place
// Similar actions have similar appearance
// Same language for same concepts

const navigationPattern = {
  location: 'left-sidebar', // Always
  primaryAction: 'top-right', // Always
  feedback: 'bottom-center', // Always
};
\`\`\`

### 4. Adequate Time

\`\`\`tsx
function TimedContent() {
  const [timeRemaining, setTimeRemaining] = useState(300);
  
  return (
    <div>
      <Timer value={timeRemaining} />
      
      {/* Always offer extension */}
      <Button onClick={() => setTimeRemaining(t => t + 300)}>
        I need more time
      </Button>
      
      {/* Or unlimited option */}
      <Button variant="outline" onClick={() => setTimeRemaining(Infinity)}>
        Remove time limit
      </Button>
    </div>
  );
}
\`\`\`

### 5. Distraction Reduction

\`\`\`tsx
// Focus mode available
function FocusMode({ children }) {
  const [focusMode, setFocusMode] = useState(false);
  
  return (
    <div className={cn(
      focusMode && 'focus-mode' // Hides sidebar, notifications, etc.
    )}>
      <Toggle 
        pressed={focusMode} 
        onPressedChange={setFocusMode}
        aria-label="Focus mode"
      />
      {children}
    </div>
  );
}
\`\`\`

## Specific Techniques

### For Dyslexia

\`\`\`css
/* Readable font, generous spacing */
.readable-text {
  font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
  line-height: 1.8;
  letter-spacing: 0.05em;
  word-spacing: 0.1em;
}
\`\`\`

### For ADHD

\`\`\`tsx
// Tasks broken into micro-steps
function ChecklistTask({ steps }) {
  return (
    <ul className="space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm">{step}</span>
          {/* Time estimate for each step */}
          <Badge variant="outline">~2 min</Badge>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### For Anxiety

\`\`\`tsx
// Always show it's reversible
<Dialog>
  <p>Are you sure you want to delete?</p>
  <p className="text-sm text-muted-foreground">
    You can recover this item for 30 days in trash.
  </p>
  <Button variant="destructive">Delete</Button>
</Dialog>
\`\`\`

Design for diverse brains is better design for **everyone**.`
    }
  }
];
