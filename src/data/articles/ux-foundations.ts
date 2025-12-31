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

\`\`\`mermaid
graph TD
    Center[Valioso] --- Útil
    Center --- Utilizável
    Center --- Encontrável
    Center --- Credível
    Center --- Desejável
    Center --- Acessível
    
    style Center fill:#000,stroke:#fff,stroke-width:2px,color:#fff
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

\`\`\`mermaid
graph TD
    Center[Valuable] --- Useful
    Center --- Usable
    Center --- Findable
    Center --- Credible
    Center --- Desirable
    Center --- Accessible
    
    style Center fill:#000,stroke:#fff,stroke-width:2px,color:#fff
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
  {
    id: 'hicks-law',
    slug: 'hicks-law',
    title: {
      pt: 'Lei de Hick',
      en: "Hick's Law",
    },
    description: {
      pt: 'O tempo de decisão aumenta com o número de opções disponíveis.',
      en: 'Decision time increases with the number of available options.',
    },
    category: 'ux-foundations',
    content: {
      pt: `# Lei de Hick

## O Paradoxo da Escolha

A Lei de Hick (ou Lei de Hick-Hyman) estabelece que o **tempo necessário para tomar uma decisão aumenta logaritmicamente** com o número de opções disponíveis.

> Mais opções = mais tempo de decisão = maior frustração do usuário.

## Fórmula

\`\`\`
Tempo de Decisão = a + b × log₂(n + 1)
\`\`\`

Onde **n** é o número de opções igualmente prováveis.

## Implicações para Design

### 1. Reduza Opções Desnecessárias

Cada opção adicional tem um custo cognitivo. KISS (Keep It Simple, Stupid).

### 2. Agrupe Opções Relacionadas

Categorização reduz a carga de decisão:

\`\`\`tsx
// ❌ Menu plano com 20 itens
<nav>
  {allItems.map(item => <MenuItem key={item.id} />)}
</nav>

// ✅ Menu categorizado
<nav>
  <MenuGroup title="Configurações">
    <MenuItem>Perfil</MenuItem>
    <MenuItem>Preferências</MenuItem>
  </MenuGroup>
  <MenuGroup title="Ajuda">
    <MenuItem>Documentação</MenuItem>
    <MenuItem>Suporte</MenuItem>
  </MenuGroup>
</nav>
\`\`\`

### 3. Progressive Disclosure

Revele opções progressivamente conforme necessário:

\`\`\`tsx
function AdvancedSettings() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  return (
    <div>
      <BasicOptions />
      <Button onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? 'Menos opções' : 'Mais opções'}
      </Button>
      {showAdvanced && <AdvancedOptions />}
    </div>
  );
}
\`\`\`

## Aplicação Anti-AI

IA genérica adora criar dashboards com dezenas de opções visíveis. Design Anti-AI é **deliberadamente restritivo**.

- Menos opções, mais intenção
- Hierarquia clara de importância
- Defaults inteligentes que eliminam decisões

## Checklist Lei de Hick

- [ ] Posso remover alguma opção sem perder funcionalidade essencial?
- [ ] As opções estão agrupadas logicamente?
- [ ] Uso progressive disclosure para opções avançadas?
- [ ] Há uma opção default recomendada?
- [ ] O menu mais frequente tem menos de 7 itens visíveis?`,
      en: `# Hick's Law

## The Paradox of Choice

Hick's Law (or Hick-Hyman Law) establishes that the **time required to make a decision increases logarithmically** with the number of available options.

> More options = more decision time = more user frustration.

## Formula

\`\`\`
Decision Time = a + b × log₂(n + 1)
\`\`\`

Where **n** is the number of equally probable options.

## Design Implications

### 1. Reduce Unnecessary Options

Each additional option has a cognitive cost. KISS (Keep It Simple, Stupid).

### 2. Group Related Options

Categorization reduces decision load:

\`\`\`tsx
// ❌ Flat menu with 20 items
<nav>
  {allItems.map(item => <MenuItem key={item.id} />)}
</nav>

// ✅ Categorized menu
<nav>
  <MenuGroup title="Settings">
    <MenuItem>Profile</MenuItem>
    <MenuItem>Preferences</MenuItem>
  </MenuGroup>
  <MenuGroup title="Help">
    <MenuItem>Documentation</MenuItem>
    <MenuItem>Support</MenuItem>
  </MenuGroup>
</nav>
\`\`\`

### 3. Progressive Disclosure

Reveal options progressively as needed:

\`\`\`tsx
function AdvancedSettings() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  return (
    <div>
      <BasicOptions />
      <Button onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? 'Fewer options' : 'More options'}
      </Button>
      {showAdvanced && <AdvancedOptions />}
    </div>
  );
}
\`\`\`

## Anti-AI Application

Generic AI loves creating dashboards with dozens of visible options. Anti-AI design is **deliberately restrictive**.

- Fewer options, more intention
- Clear hierarchy of importance
- Smart defaults that eliminate decisions

## Hick's Law Checklist

- [ ] Can I remove any option without losing essential functionality?
- [ ] Are options logically grouped?
- [ ] Do I use progressive disclosure for advanced options?
- [ ] Is there a recommended default option?
- [ ] Does the most frequent menu have fewer than 7 visible items?`,
    },
    readingTime: 5,
    order: 3,
  },
  {
    id: 'serial-position-effect',
    slug: 'serial-position-effect',
    title: {
      pt: 'Efeito de Posição Serial',
      en: 'Serial Position Effect',
    },
    description: {
      pt: 'Por que lembramos do primeiro e do último, mas esquecemos o meio.',
      en: 'Why we remember the first and last, but forget the middle.',
    },
    category: 'ux-foundations',
    content: {
      pt: `# Efeito de Posição Serial

## A Memória Tem Preferências

O Efeito de Posição Serial descreve como a posição de um item em uma lista afeta a probabilidade de lembrá-lo. Dividido em dois componentes:

### Efeito de Primazia
Itens no **início** de uma lista são mais lembrados porque temos mais tempo para processá-los e transferi-los para a memória de longo prazo.

### Efeito de Recência
Itens no **final** de uma lista são mais lembrados porque ainda estão na memória de curto prazo (working memory).

> Os itens do meio sofrem: nem tiveram tempo para consolidação, nem estão frescos na mente.

## Implicações para Design

### Listas e Menus

\`\`\`tsx
// Estruture ações por importância posicional
<nav>
  {/* PRIMEIRO: Ação mais importante */}
  <MenuItem priority="high">Home</MenuItem>
  
  {/* MEIO: Ações secundárias */}
  <MenuItem>Sobre</MenuItem>
  <MenuItem>Produtos</MenuItem>
  <MenuItem>Blog</MenuItem>
  
  {/* ÚLTIMO: Segunda ação mais importante */}
  <MenuItem priority="high">Contato</MenuItem>
</nav>
\`\`\`

### Onboarding e Tours

Pontos-chave devem estar no início e no final:

\`\`\`tsx
const onboardingSteps = [
  { title: "Bem-vindo!", key: true },     // Primazia
  { title: "Funcionalidade A" },
  { title: "Funcionalidade B" },
  { title: "Funcionalidade C" },
  { title: "Comece agora!", key: true },   // Recência
];
\`\`\`

### Call-to-Actions

Em páginas longas, repita o CTA no início e no final:

\`\`\`tsx
<LandingPage>
  <Hero>
    <CTAButton>Começar grátis</CTAButton>  {/* Primazia */}
  </Hero>
  
  <Features />
  <Testimonials />
  <Pricing />
  
  <Footer>
    <CTAButton>Começar grátis</CTAButton>  {/* Recência */}
  </Footer>
</LandingPage>
\`\`\`

## Aplicação Anti-AI

IA tende a organizar itens alfabeticamente ou por data. Design Anti-AI considera **importância psicológica**.

- O primeiro item define expectativas
- O último item determina a impressão final
- O meio pode ser otimizado ou removido

## Checklist Posição Serial

- [ ] A ação mais importante está no início OU no final?
- [ ] Itens críticos estão evitando o "vale da morte" do meio?
- [ ] O CTA aparece na primeira e na última dobra?
- [ ] Listas longas estão paginadas ou truncadas?
- [ ] A última impressão é memorável?`,
      en: `# Serial Position Effect

## Memory Has Preferences

The Serial Position Effect describes how an item's position in a list affects how likely we are to remember it. Divided into two components:

### Primacy Effect
Items at the **beginning** of a list are better remembered because we have more time to process them and transfer them to long-term memory.

### Recency Effect
Items at the **end** of a list are better remembered because they're still in short-term memory (working memory).

> Middle items suffer: they didn't have time for consolidation, nor are they fresh in mind.

## Design Implications

### Lists and Menus

\`\`\`tsx
// Structure actions by positional importance
<nav>
  {/* FIRST: Most important action */}
  <MenuItem priority="high">Home</MenuItem>
  
  {/* MIDDLE: Secondary actions */}
  <MenuItem>About</MenuItem>
  <MenuItem>Products</MenuItem>
  <MenuItem>Blog</MenuItem>
  
  {/* LAST: Second most important action */}
  <MenuItem priority="high">Contact</MenuItem>
</nav>
\`\`\`

### Onboarding and Tours

Key points should be at the beginning and end:

\`\`\`tsx
const onboardingSteps = [
  { title: "Welcome!", key: true },        // Primacy
  { title: "Feature A" },
  { title: "Feature B" },
  { title: "Feature C" },
  { title: "Get started!", key: true },    // Recency
];
\`\`\`

### Call-to-Actions

On long pages, repeat the CTA at the beginning and end:

\`\`\`tsx
<LandingPage>
  <Hero>
    <CTAButton>Start for free</CTAButton>  {/* Primacy */}
  </Hero>
  
  <Features />
  <Testimonials />
  <Pricing />
  
  <Footer>
    <CTAButton>Start for free</CTAButton>  {/* Recency */}
  </Footer>
</LandingPage>
\`\`\`

## Anti-AI Application

AI tends to organize items alphabetically or by date. Anti-AI design considers **psychological importance**.

- The first item sets expectations
- The last item determines the final impression
- The middle can be optimized or removed

## Serial Position Checklist

- [ ] Is the most important action at the beginning OR end?
- [ ] Are critical items avoiding the middle "death valley"?
- [ ] Does the CTA appear in the first and last fold?
- [ ] Are long lists paginated or truncated?
- [ ] Is the last impression memorable?`,
    },
    readingTime: 5,
    order: 4,
  },
  {
    id: 'jakobs-law',
    slug: 'jakobs-law',
    title: {
      pt: 'Lei de Jakob',
      en: "Jakob's Law",
    },
    description: {
      pt: 'Usuários preferem interfaces que funcionam como as que já conhecem.',
      en: 'Users prefer interfaces that work like the ones they already know.',
    },
    category: 'ux-foundations',
    content: {
      pt: `# Lei de Jakob

## O Poder da Familiaridade

A Lei de Jakob Nielsen estabelece:

> "Usuários passam a maior parte do tempo em OUTROS sites. Isso significa que preferem que seu site funcione da mesma forma que todos os outros sites que já conhecem."

## O Paradoxo do Design Original

Designers querem ser únicos. Usuários querem ser eficientes.

### Mental Models Importam

Usuários trazem **modelos mentais** formados por experiências anteriores:

- Carrinho de compras = ícone de carrinho no canto superior direito
- Busca = lupa ou barra no topo
- Menu mobile = três linhas (hamburger)
- Voltar = seta para a esquerda

Quebrar esses padrões causa **atrito cognitivo**.

## Quando Seguir Convenções

\`\`\`tsx
// ✅ Seguindo convenções esperadas
<header>
  <Logo />           {/* Esquerda */}
  <Navigation />     {/* Centro */}
  <SearchIcon />     {/* Direita */}
  <CartIcon />       {/* Extrema direita */}
</header>

// ❌ "Inovação" desnecessária
<header>
  <CartIcon />       {/* Esquerda... por quê? */}
  <Logo />           {/* Centro... ok */}
  <SearchIcon />     {/* Escondido em submenu... ruim */}
</header>
\`\`\`

## Quando QUEBRAR Convenções

Quebrar convenções é válido quando:

1. **Há ganho claro de usabilidade** — não apenas estética
2. **O contexto é único** — apps especializados podem ter regras próprias
3. **Há tempo para aprendizado** — ferramentas profissionais vs. landing pages

\`\`\`tsx
// Figma quebra convenções com benefício claro
// Barra de ferramentas à esquerda (não no topo como apps tradicionais)
// Justificativa: Canvas infinito precisa de espaço vertical
\`\`\`

## Aplicação Anti-AI

Ser Anti-AI não significa ser anti-convenção. Significa ser **intencionalmente diferente onde importa**.

- Siga convenções para navegação e funcionalidade básica
- Inove em **expressão visual** e **micro-interações**
- A diferenciação deve estar na **personalidade**, não na usabilidade

## Checklist Lei de Jakob

- [ ] Minha navegação segue padrões esperados do setor?
- [ ] Ícones são reconhecíveis universalmente?
- [ ] Formulários funcionam como usuários esperam?
- [ ] Onde quebro convenções, há ganho claro de UX?
- [ ] Novos padrões são ensinados ao usuário?`,
      en: `# Jakob's Law

## The Power of Familiarity

Jakob Nielsen's Law states:

> "Users spend most of their time on OTHER sites. This means they prefer your site to work the same way as all the other sites they already know."

## The Paradox of Original Design

Designers want to be unique. Users want to be efficient.

### Mental Models Matter

Users bring **mental models** formed by previous experiences:

- Shopping cart = cart icon in the top right corner
- Search = magnifying glass or bar at the top
- Mobile menu = three lines (hamburger)
- Back = arrow pointing left

Breaking these patterns causes **cognitive friction**.

## When to Follow Conventions

\`\`\`tsx
// ✅ Following expected conventions
<header>
  <Logo />           {/* Left */}
  <Navigation />     {/* Center */}
  <SearchIcon />     {/* Right */}
  <CartIcon />       {/* Far right */}
</header>

// ❌ Unnecessary "innovation"
<header>
  <CartIcon />       {/* Left... why? */}
  <Logo />           {/* Center... ok */}
  <SearchIcon />     {/* Hidden in submenu... bad */}
</header>
\`\`\`

## When to BREAK Conventions

Breaking conventions is valid when:

1. **There's clear usability gain** — not just aesthetics
2. **The context is unique** — specialized apps can have their own rules
3. **There's time for learning** — professional tools vs. landing pages

\`\`\`tsx
// Figma breaks conventions with clear benefit
// Toolbar on the left (not at the top like traditional apps)
// Justification: Infinite canvas needs vertical space
\`\`\`

## Anti-AI Application

Being Anti-AI doesn't mean being anti-convention. It means being **intentionally different where it matters**.

- Follow conventions for navigation and basic functionality
- Innovate in **visual expression** and **micro-interactions**
- Differentiation should be in the **personality**, not usability

## Jakob's Law Checklist

- [ ] Does my navigation follow expected industry patterns?
- [ ] Are icons universally recognizable?
- [ ] Do forms work as users expect?
- [ ] Where I break conventions, is there clear UX gain?
- [ ] Are new patterns taught to the user?`,
    },
    readingTime: 5,
    order: 5,
  },
  {
    id: 'cognitive-load',
    slug: 'cognitive-load',
    title: {
      pt: 'Carga Cognitiva',
      en: 'Cognitive Load',
    },
    description: {
      pt: 'A quantidade de esforço mental necessária para usar uma interface.',
      en: 'The amount of mental effort required to use an interface.',
    },
    category: 'ux-foundations',
    content: {
      pt: `# Carga Cognitiva

## O Limite da Mente

Carga Cognitiva refere-se à quantidade de **esforço mental** necessária para processar informações. Nossa memória de trabalho é limitada — aproximadamente **7 ± 2 itens** simultaneamente (Lei de Miller).

> Interfaces que excedem a capacidade cognitiva causam frustração, erros e abandono.

## Tipos de Carga Cognitiva

### 1. Carga Intrínseca
Complexidade inerente à tarefa. Não pode ser eliminada, mas pode ser **gerenciada**.

### 2. Carga Extrínseca
Esforço causado por **design ruim**. Esta é a que devemos minimizar.

### 3. Carga Germane
Esforço investido em **aprendizado**. Esta pode ser produtiva.

## Estratégias de Redução

### Chunking (Agrupamento)

Divida informações em grupos menores e significativos:

\`\`\`tsx
// ❌ Número de telefone como string contínua
<input value="11987654321" />

// ✅ Chunking visual
<input value="(11) 98765-4321" />
\`\`\`

### Progressive Disclosure

Revele complexidade gradualmente:

\`\`\`tsx
function CheckoutForm() {
  const [step, setStep] = useState(1);
  
  return (
    <form>
      {step === 1 && <AddressStep onNext={() => setStep(2)} />}
      {step === 2 && <PaymentStep onNext={() => setStep(3)} />}
      {step === 3 && <ConfirmationStep />}
      
      <ProgressIndicator current={step} total={3} />
    </form>
  );
}
\`\`\`

### Recognition vs. Recall

Mostre opções em vez de exigir que o usuário lembre:

\`\`\`tsx
// ❌ Exige recall (memória)
<input 
  placeholder="Digite o código do país (ex: BR, US, UK...)" 
/>

// ✅ Oferece recognition (reconhecimento)
<Select>
  <Option value="BR">🇧🇷 Brasil</Option>
  <Option value="US">🇺🇸 Estados Unidos</Option>
  <Option value="UK">🇬🇧 Reino Unido</Option>
</Select>
\`\`\`

### Defaults Inteligentes

Elimine decisões desnecessárias:

\`\`\`tsx
// Pré-selecione a opção mais comum
<PaymentMethod defaultValue="credit-card">
  <Option value="credit-card">Cartão de Crédito</Option>
  <Option value="pix">PIX</Option>
  <Option value="boleto">Boleto</Option>
</PaymentMethod>
\`\`\`

## Aplicação Anti-AI

IA genérica maximiza features e opções. Design Anti-AI maximiza **clareza e foco**.

- Cada elemento na tela deve justificar sua existência
- Espaço em branco é respiro cognitivo
- Menos decisões = menos fadiga

## Checklist Carga Cognitiva

- [ ] Estou pedindo mais de 7 inputs simultâneos?
- [ ] Há espaço em branco adequado entre elementos?
- [ ] Uso chunking em números e listas longas?
- [ ] Ofereço defaults sensatos?
- [ ] A complexidade está revelada progressivamente?`,
      en: `# Cognitive Load

## The Mind's Limit

Cognitive Load refers to the amount of **mental effort** required to process information. Our working memory is limited — approximately **7 ± 2 items** simultaneously (Miller's Law).

> Interfaces that exceed cognitive capacity cause frustration, errors, and abandonment.

## Types of Cognitive Load

### 1. Intrinsic Load
Inherent complexity of the task. Cannot be eliminated, but can be **managed**.

### 2. Extraneous Load
Effort caused by **poor design**. This is what we should minimize.

### 3. Germane Load
Effort invested in **learning**. This can be productive.

## Reduction Strategies

### Chunking

Divide information into smaller, meaningful groups:

\`\`\`tsx
// ❌ Phone number as continuous string
<input value="11987654321" />

// ✅ Visual chunking
<input value="(11) 98765-4321" />
\`\`\`

### Progressive Disclosure

Reveal complexity gradually:

\`\`\`tsx
function CheckoutForm() {
  const [step, setStep] = useState(1);
  
  return (
    <form>
      {step === 1 && <AddressStep onNext={() => setStep(2)} />}
      {step === 2 && <PaymentStep onNext={() => setStep(3)} />}
      {step === 3 && <ConfirmationStep />}
      
      <ProgressIndicator current={step} total={3} />
    </form>
  );
}
\`\`\`

### Recognition vs. Recall

Show options instead of requiring users to remember:

\`\`\`tsx
// ❌ Requires recall (memory)
<input 
  placeholder="Enter country code (e.g., BR, US, UK...)" 
/>

// ✅ Offers recognition
<Select>
  <Option value="BR">🇧🇷 Brazil</Option>
  <Option value="US">🇺🇸 United States</Option>
  <Option value="UK">🇬🇧 United Kingdom</Option>
</Select>
\`\`\`

### Smart Defaults

Eliminate unnecessary decisions:

\`\`\`tsx
// Pre-select the most common option
<PaymentMethod defaultValue="credit-card">
  <Option value="credit-card">Credit Card</Option>
  <Option value="paypal">PayPal</Option>
  <Option value="bank">Bank Transfer</Option>
</PaymentMethod>
\`\`\`

## Anti-AI Application

Generic AI maximizes features and options. Anti-AI design maximizes **clarity and focus**.

- Every element on screen should justify its existence
- White space is cognitive breathing room
- Fewer decisions = less fatigue

## Cognitive Load Checklist

- [ ] Am I asking for more than 7 simultaneous inputs?
- [ ] Is there adequate white space between elements?
- [ ] Do I use chunking for numbers and long lists?
- [ ] Do I offer sensible defaults?
- [ ] Is complexity revealed progressively?`,
    },
    readingTime: 6,
    order: 6,
  },
];
