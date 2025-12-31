# 🚀 Guia de Deploy - Anti-AI Design Guide

Este guia explica como hospedar o projeto **Anti-AI Design Guide** no **Vercel** e no **Cloudflare Pages**.

---

## 📋 Pré-requisitos

1. Conta no [GitHub](https://github.com) com o repositório do projeto
2. Conta no [Vercel](https://vercel.com) ou [Cloudflare](https://dash.cloudflare.com)
3. Projeto buildando localmente sem erros (`npm run build`)

---

## ⚡ Opção 1: Vercel (Recomendado)

O Vercel detecta automaticamente projetos Vite (Zero Config).

### Passo a Passo

1. **Acesse o Vercel**
   - Vá para [vercel.com/new](https://vercel.com/new)
   - Faça login com sua conta GitHub

2. **Importe o Repositório**
   - Clique em **"Import"** no repositório `anti-ai-guide`
   - Se não aparecer, clique em **"Adjust GitHub App Permissions"**

3. **Configure o Projeto**
   - **Framework Preset**: Vite (detectado automaticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Variáveis de Ambiente** (se necessário)
   - Expanda **"Environment Variables"**
   - Use o prefixo `VITE_` para variáveis acessíveis no frontend
   - Exemplo: `VITE_API_URL=https://api.example.com`

5. **Deploy**
   - Clique em **"Deploy"**
   - Aguarde o build (~1-2 minutos)
   - Seu site estará em `https://anti-ai-guide.vercel.app`

### Configuração para React Router (SPA)

Para evitar erros 404 ao atualizar páginas, crie o arquivo `vercel.json` na raiz:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

> **Nota**: Este arquivo já pode existir no projeto. Verifique antes de criar.

---

## ☁️ Opção 2: Cloudflare Pages

O Cloudflare Pages oferece hospedagem gratuita com CDN global.

### Passo a Passo

1. **Acesse o Dashboard**
   - Vá para [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navegue até **Workers & Pages** > **Create application** > **Pages**

2. **Conecte o Git**
   - Selecione **"Connect to Git"**
   - Autorize o Cloudflare a acessar seu GitHub
   - Escolha o repositório `anti-ai-guide`

3. **Configure o Build**
   - **Production branch**: `main` (ou `master`)
   - **Framework preset**: **Vite**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

4. **Variáveis de Ambiente** (se necessário)
   - Expanda **"Environment variables"**
   - Adicione variáveis com prefixo `VITE_`

5. **Deploy**
   - Clique em **"Save and Deploy"**
   - Aguarde o build (~2-3 minutos)
   - Seu site estará em `https://anti-ai-guide.pages.dev`

### Configuração para React Router (SPA)

Para suportar deep linking, crie o arquivo `public/_redirects`:

```text
/*  /index.html  200
```

Isso instrui o Cloudflare a servir `index.html` para qualquer rota.

---

## 🔄 Deploys Automáticos

Ambas as plataformas suportam **deploy automático**:

- Cada `git push` na branch principal dispara um novo build
- Pull Requests geram **preview deployments** com URLs únicos

---

## 📝 Resumo das Configurações

| Configuração | Vercel | Cloudflare Pages |
|--------------|--------|------------------|
| Build Command | `npm run build` | `npm run build` |
| Output Directory | `dist` | `dist` |
| SPA Routing | `vercel.json` (rewrites) | `public/_redirects` |
| Prefixo Env Vars | `VITE_` | `VITE_` |
| URL Padrão | `*.vercel.app` | `*.pages.dev` |

---

## ⚠️ Notas Importantes

1. **Variáveis de Ambiente**: Sempre use `VITE_` como prefixo para variáveis que precisam ser acessíveis no frontend.

2. **Node Version**: Se encontrar erros de build, defina a versão do Node:
   - Vercel: Em **Settings > General > Node.js Version**
   - Cloudflare: Adicione `NODE_VERSION=18` nas variáveis de ambiente

3. **Domínio Customizado**: Ambas as plataformas permitem conectar domínios próprios gratuitamente.

4. **HTTPS**: Já incluído automaticamente em ambas as plataformas.

---

## 🆘 Troubleshooting

### Build falha com "Module not found"
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erros 404 ao navegar
- Verifique se os arquivos `vercel.json` ou `public/_redirects` estão configurados

### Variáveis de ambiente não funcionam
- Confirme que usam o prefixo `VITE_`
- Rebuild após adicionar novas variáveis

### Erro "ERESOLVE could not resolve" (React 19)
O projeto usa React 19, e alguns pacotes (como `next-themes`) ainda não atualizaram suas peer dependencies. Isso foi resolvido com:

1. **`.npmrc`** - Configurado `legacy-peer-deps=true`
2. **`package.json`** - Adicionado `overrides` para forçar React 19:
```json
"overrides": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}
```

Se ainda encontrar problemas, configure no Vercel:
- **Settings > General > Install Command**: `npm install --legacy-peer-deps`
