# FamilyCoin Landing Page

Landing page oficial do aplicativo **FamilyCoin** - uma plataforma inovadora que transforma tarefas domésticas em diversão através de gamificação familiar.

## Sobre o Projeto

O **FamilyCoin** é um aplicativo móvel que revoluciona a organização familiar ao gamificar tarefas domésticas e responsabilidades. Com um sistema de moedas virtuais, recompensas e desafios, as famílias podem:

- 🪙 **Sistema de Moedas Virtuais**: Ganhe moedas completando tarefas
- 🎯 **Gamificação**: Transforme responsabilidades em jogos divertidos
- 🏆 **Recompensas**: Troque moedas por privilégios e prêmios
- 👨‍👩‍👧‍👦 **Colaboração Familiar**: Envolva todos os membros da família
- 📊 **Acompanhamento**: Monitore progresso e conquistas

Esta landing page serve como porta de entrada para apresentar o aplicativo, suas funcionalidades e facilitar o download nas lojas de aplicativos.

## Arquitetura do Ecossistema

O FamilyCoin é composto por três principais componentes:

1. **📱 App Mobile** (`family_coin_flutter/`) - Aplicativo Flutter multiplataforma
2. **☁️ Cloud Functions** (`family_coin_cloud_functions/`) - Backend serverless com Firebase
3. **🌐 Landing Page** (`family_coin_landing_page/`) - Este projeto - Website institucional

## Tecnologias

- **Next.js 14** com App Router e TypeScript
- **Tailwind CSS** + componentes shadcn/ui
- **Framer Motion** para animações fluidas
- **Zod** para validação de dados
- **Lucide React** para ícones consistentes
- **ESLint + Prettier + Husky + lint-staged + Commitlint** para qualidade de código

## Funcionalidades da Landing Page

- ✨ **Design Responsivo**: Otimizada para todos os dispositivos
- 🚀 **Performance**: Construída com Next.js 14 e otimizações modernas
- 🎨 **Animações**: Transições suaves com Framer Motion
- 📱 **CTAs de Download**: Links diretos para App Store e Google Play
- 🔍 **SEO Otimizado**: Meta tags e estrutura otimizada para buscadores
- 🌙 **Tema Adaptável**: Suporte a modo claro/escuro (se implementado)

## Scripts

```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm dev

# Construir para produção
pnpm build

# Executar versão de produção
pnpm start

# Verificar linting
pnpm lint

# Formatar código
pnpm format

# Verificar tipos TypeScript
pnpm typecheck
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx               # Redireciona para o locale padrão
│   ├── layout.tsx             # Layout raiz com providers e i18n
│   ├── [locale]/              # Agrupador por idioma (pt_BR, en_US, es_ES)
│   │   └── (marketing)/
│   │       ├── page.tsx       # Landing principal
│   │       ├── pricing/       # Página de preços
│   │       └── privacy/       # Política de privacidade
│   ├── robots.txt             # Configuração para crawlers
│   └── sitemap.ts             # Mapa do site com rotas por idioma
├── components/
│   ├── blocks/                # Seções da landing page
│   │   ├── hero.tsx           # Seção principal
│   │   ├── features.tsx       # Funcionalidades
│   │   ├── cta.tsx            # Call-to-action
│   │   └── waitlist-form.tsx  # Formulário da lista de espera
│   ├── core/                  # Componentes reutilizáveis
│   ├── layout/                # Header, Footer, Theme
│   └── ui/                    # Componentes de interface base
├── config/
│   └── site.ts                # Configurações globais do app
├── locales/                   # Dicionários e tipagens de tradução
└── styles/                    # Estilos globais
```

A arquitetura segue as melhores práticas do Next.js 14 com App Router, separando claramente componentes de interface, blocos de conteúdo e configurações.

## Configuração e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- pnpm (gerenciador de pacotes recomendado)

### Primeiros Passos

1. **Clone o repositório e instale dependências**:
   ```bash
   pnpm install
   ```

2. **Configure variáveis de ambiente** (se necessário):
   - Crie um arquivo `.env.local` para configurações específicas
   - Configure integrações (analytics, formulários de contato, etc.)

3. **Execute em modo desenvolvimento**:
   ```bash
   pnpm dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

4. **Configurações importantes**:
   - **Links de Download**: Atualize os URLs reais das lojas de aplicativos em `src/config/site.ts`
   - **Assets**: Substitua arquivos em `public/` (favicon, og-image, logos)
   - **Conteúdo**: Personalize textos e informações nos componentes `src/components/blocks/`

### Checklist Pós-Configuração

- [ ] Instalar dependências: `pnpm install`
- [ ] Configurar variáveis de ambiente e integrações
- [ ] Atualizar links reais de download na `src/config/site.ts`
- [ ] Substituir assets em `public/` (favicon, og-image, logos)
- [ ] Personalizar política de privacidade em `src/app/(marketing)/privacy/page.tsx`
- [ ] Configurar analytics e ferramentas de monitoramento
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Validar SEO e meta tags

## Deploy e Produção

### Deploy Recomendado: Vercel

A Vercel oferece integração nativa com Next.js e deploy automático:

1. Conecte seu repositório à Vercel
2. As configurações padrão funcionam imediatamente
3. O comando `pnpm build` é executado automaticamente
4. Deploy instantâneo com CDN global

### Outras Opções de Deploy

- **Netlify**: Configuração similar à Vercel
- **AWS Amplify**: Para integração com outros serviços AWS
- **Docker**: Use o Dockerfile incluído para containerização

### Comandos de Produção

```bash
# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Verificar qualidade antes do deploy
pnpm lint && pnpm typecheck
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Links Relacionados

- 📱 **App Mobile**: Aplicativo Flutter principal
- ☁️ **Cloud Functions**: Backend serverless do projeto
- 🌐 **Site Oficial**: [familycoin.app](https://familycoin.app)

---

Desenvolvido com ❤️ para transformar tarefas domésticas em diversão familiar!
