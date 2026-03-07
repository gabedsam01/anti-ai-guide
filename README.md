
# 🛡️ Anti-AI Design Guide

**Design com alma. Resistência contra a internet de plástico.**

<div align="center">

### 👉 [Acesse o guia completo online][site] 👈

[Leia o Manifesto][manifesto] · [Fundamentos de UI: Consistência][consistencia] · [Sugerir melhorias][issues]

</div>

---

## 🌐 Public URLs

| Resource | URL |
|----------|-----|
| **Site** | https://anti-ai-guide.vercel.app/ |
| **Sitemap** | https://anti-ai-guide.vercel.app/sitemap.xml |
| **Robots.txt** | https://anti-ai-guide.vercel.app/robots.txt |
| **Repository** | https://github.com/gabedsam01/anti-ai-guide |

### SEO & Discovery

Este site possui **sitemap.xml** e **robots.txt** configurados para facilitar o crawling e indexação por buscadores (Google, Bing, DuckDuckGo) e bots de IA bem-comportados.

- **Sitemap**: Contém todas as 33 páginas públicas do guia (home, glossário e 31 artigos)
- **Robots.txt**: Permite crawling total do conteúdo público
- **Canonical URLs**: Todas as páginas apontam para o domínio de produção `https://anti-ai-guide.vercel.app`

---

## 💀 O Problema (e por que você deveria se importar)

Pare por um segundo e navegue pela web. Olhe a quantidade de sites que parecem "clones": mesmos gradientes, mesmas animações smooth, mesmo layout de 3 colunas, mesma copy de "Transform your business with...". 

Isso não é coincidência. É o resultado de duas forças trabalhando juntas:

1. **Ferramentas de geração em massa:** LLMs que cospem código genérico, builders com templates idênticos, geradores de copy que usam as mesmas palavras-chave.
2. **Otimização obsessiva:** Tudo é testado A/B até a morte. O resultado? Convergência. Tudo fica "correto", mas nada fica memorável.

O problema não é a tecnologia. É o **resultado vazio**: interfaces sem textura, textos sem voz, experiências sem atrito. A internet está virando um grande catálogo de IKEA digital — funcional, eficiente e completamente sem alma.

---

## ⚔️ A Solução: Anti-AI Design

Este não é um "guia de UI bonito". É um **framework de pensamento** para criar experiências digitais que resistem à homogeneização.

O **Anti-AI Design Guide** te ensina a projetar coisas que IAs (ainda) não conseguem replicar com maestria, porque dependem de três coisas profundamente humanas:

1. **Contexto cultural e emocional profundo** (não apenas "dados de treinamento")
2. **Imperfeição intencional** (quebrar regras com propósito, não por acidente)
3. **Consistência narrativa** (uma linguagem visual que conta uma história ao longo do tempo)

---

## 📖 O que você vai encontrar neste guia?

### 1. O Manifesto
**[Leia aqui][manifesto]**

Uma declaração de intenções. Por que fazemos isso? Qual é a diferença entre "usar IA como ferramenta" e "deixar a IA decidir tudo"? O manifesto responde essas perguntas sem rodeios.

### 2. Fundamentos de UI
**[Princípio da Consistência][consistencia]**

A parte técnica (mas acessível). Aqui você aprende como criar sistemas de design que:
- Priorizam coesão emocional (não apenas repetição matemática de componentes).
- "Respiram" e se adaptam ao contexto do usuário.
- Quebram regras propositalmente (e ainda assim fazem sentido).

### 3. Estudos de Caso (em breve)
Análises de interfaces reais que "funcionam" apesar (ou por causa) de suas imperfeições.

---

## 🎯 Para quem é este projeto?

### ✅ Você deveria usar este guia se:

- **Você é designer/dev e sente que seus projetos estão ficando "genéricos"**  
  Mesmo seguindo boas práticas, o resultado final parece "mais um template Tailwind UI". Você quer identidade, não conformidade.

- **Você usa IA para acelerar, mas odeia quando o resultado fica "sintético"**  
  GitHub Copilot, ChatGPT, v0.dev são ótimos pra boilerplate. Mas você não quer que o produto final grite "eu fui gerado".

- **Você é "vibe coder" e quer transformar feeling em método**  
  Você sabe quando algo "tá errado" visualmente, mas não sabe articular o porquê. Este guia te dá vocabulário e critérios.

- **Você faz produtos pessoais/indie e quer se destacar**  
  Landing pages genéricas não convertem. Você precisa de presença, não de perfeição.

### ❌ Este guia NÃO é pra você se:

- Você quer um template pronto "só pra lançar logo".
- Você acha que design é "deixar as coisas bonitinhas" (sem estratégia por trás).
- Você quer uma web perfeitamente padronizada onde tudo funciona igual.

---

## 🛠️ Como usar (na prática, sem enrolação)

### Se você tá começando:

1. **Leia o [Manifesto][manifesto] primeiro.**  
   Não pule. Ele te dá a mentalidade certa. Se você pular direto pra "técnicas", vai aplicar errado.

2. **Escolha UM princípio do [guia de Consistência][consistencia].**  
   Não tente implementar tudo de uma vez. Escolha um (ex: "quebrar o grid em um lugar estratégico") e aplique no seu projeto atual.

3. **Observe o resultado e itere.**  
   O design anti-AI não é "acertar de primeira". É ajustar com intenção até a interface "respirar".

### Se você já é experiente:

1. Use o guia como **referência de decisões**.  
   Quando você tiver duas opções de UI, pergunte: "Qual delas tem mais intenção humana? Qual é mais memorável?"

2. **Documente suas próprias regras.**  
   O guia te dá os fundamentos. Mas cada projeto tem sua vibe. Crie seu próprio "style guide emocional".

3. **Ensine outros.**  
   Compartilhe este guia com seu time. Discuta. A resistência cresce quando vira conversa.

---

## 🧠 O que é "Anti-AI Design" (detalhado)?

### Pilar 1: Intenção > Geração

Não adianta você usar Figma Auto Layout ou gerar CSS com GPT se você não sabe **por que** aquele espaçamento existe.

**Exemplo prático:**  
❌ Usar `gap: 16px` porque "é o padrão do Tailwind"  
✅ Usar `gap: 22px` porque você testou e esse valor cria o ritmo de leitura que você quer

A diferença? No primeiro caso, o computador decide. No segundo, você decide.

### Pilar 2: Atrito é Vida

Interfaces ultra-polidas (transições de 300ms, animações suaves, zero resistência) são ótimas pra dashboards. Mas pra sites com personalidade? Às vezes você **quer** que o usuário pare e sinta.

**Exemplo prático:**  
❌ Botão com `transition: all 0.3s ease`  
✅ Botão que "pula" ligeiramente ao clicar (como se tivesse peso físico)

O segundo cria uma **textura** tátil. É menos "correto", mas mais humano.

### Pilar 3: Falha é Humana

A perfeição algorítmica é esquecível. Pequenas imperfeições (quando intencionais) criam conexão.

**Exemplo prático:**  
❌ Logo perfeitamente centrado no pixel  
✅ Logo ligeiramente off-center (criando tensão visual proposital)

Atenção: isso não é "fazer cagada de propósito". É **escolher onde quebrar a regra** pra criar impacto.

---

## 🤝 Como Contribuir (guia completo)

Você não precisa ser dev senior pra ajudar. Aqui estão formas concretas de contribuir:

### 1. Sugerir tópicos novos
Abra uma [issue][issues] com o título: `[SUGESTÃO] Nome do tópico`  
Explique: O que você gostaria de ver no guia? Por que isso é importante?

### 2. Corrigir erros/melhorar textos
Se você achou algo confuso, mal explicado ou contraditório, nos avise!  
Abra uma issue ou faça um Pull Request direto.

### 3. Compartilhar referências
Viu um site, app ou interface que "tem alma"? Mande pra gente!  
Mas **explique o porquê**. "Achei bonito" não serve. Diga: "Isso funciona porque X, Y, Z."

### 4. Traduzir (futuro)
Se você domina outra língua e quer traduzir o guia, fala com a gente.

### Regra de ouro:
Se você usou IA pra rascunhar texto/código, **reescreva linha por linha**. Nós conseguimos detectar quando algo foi copiado direto do ChatGPT. E vamos rejeitar sem dó.

---

## 📬 Contato e Comunidade

O criador não é um bot. Fale com um humano real:

- **Criador:** [Gabriel Sampaio no LinkedIn][linkedin]
- **Bugs/Ideias:** [Abrir uma issue no GitHub][issues]

---

## 🚀 Auto-hospedagem (Self-Host)

<details>
<summary>📦 Clique para ver o tutorial completo de auto-hospedagem</summary>

Se você quer rodar o guia na sua máquina (desenvolvimento local) ou num servidor (VPS, etc.), siga os passos abaixo.

### Pré-requisitos
⁸
- **Node.js** (versão LTS recomendada — atualmente v20+)
- **pnpm** (gerenciador de pacotes — mais rápido que npm/yarn)

Para instalar o pnpm globalmente:
```bash
npm install -g pnpm
```

---

### Instalação e Desenvolvimento Local

```bash
# 1. Clone o repositório
git clone https://github.com/gabedsam01/anti-ai-guide.git

# 2. Entre na pasta do projeto
cd anti-ai-guide

# 3. Instale todas as dependências
pnpm install

# 4. Rode o servidor de desenvolvimento
pnpm dev
```

Acesse no navegador:
- **http://localhost:3000**

O servidor vai recarregar automaticamente quando você editar arquivos.

---

### Build de Produção

Para gerar a versão otimizada (pronta pra deploy):

```bash
# 1. Gere os arquivos estáticos otimizados
pnpm build

# 2. Rode o servidor de produção
pnpm start
```

O servidor vai rodar (por padrão) em:
- **http://localhost:3000**

---

### Deploy em VPS (Ubuntu/Debian)

Se você tem uma VPS e quer hospedar lá:

```bash
# 1. Atualize o sistema
sudo apt update && sudo apt upgrade -y

# 2. Instale Node.js (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Instale pnpm
npm install -g pnpm

# 4. Clone o projeto
git clone https://github.com/gabedsam01/anti-ai-guide.git
cd anti-ai-guide

# 5. Instale e faça build
pnpm install
pnpm build

# 6. Use PM2 para manter o processo rodando
npm install -g pm2
pm2 start "pnpm start" --name anti-ai-guide
pm2 save
pm2 startup
```

Configure um proxy reverso (Nginx ou Caddy) apontando para a porta 3000.

---

### Deploy com Docker (incluindo ARM64 pra sua Oracle VPS)

Se você usa Docker e quer criar uma imagem multi-arch (x86 + ARM64):

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm build

# Expor porta
EXPOSE 3000

# Comando de start
CMD ["pnpm", "start"]
```

Build multi-arch (roda em x86 e ARM64):
```bash
docker buildx build --platform linux/amd64,linux/arm64 -t anti-ai-guide:latest .
```

---

### Variáveis de Ambiente

Se o projeto usar `.env.example`, copie para `.env.local` e configure:

```bash
cp .env.example .env.local
```

Edite o `.env.local` com suas variáveis (se necessário).

</details>

---

<details>
<summary>🔗 Links rápidos (guardados)</summary>

- [Guia online][site]
- [Manifesto][manifesto]
- [Consistência (Fundamentos)][consistencia]
- [Issues (GitHub)][issues]
- [Gabriel Sampaio (LinkedIn)][linkedin]

</details>

---

<p align="center">
<i>Construído com ódio à mediocridade e amor à arte. 🖤</i><br>
<sub>Otimizado pra rodar até no seu Celeron velho. Porque eficiência também é respeito.</sub>
</p>

[site]: https://anti-ai-guide.vercel.app/
[manifesto]: https://anti-ai-guide.vercel.app/docs/manifesto/what-is-anti-ai-design
[consistencia]: https://anti-ai-guide.vercel.app/docs/ui-foundations/consistency-principle
[issues]: https://github.com/gabedsam01/anti-ai-guide/issues
[linkedin]: https://www.linkedin.com/in/gabrielsampaiodesouza
```