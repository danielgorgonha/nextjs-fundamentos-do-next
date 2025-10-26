# Oconexo Blog

Um blog moderno desenvolvido com Next.js durante o curso de Fundamentos do Next.js da Rocketseat. O projeto demonstra a implementação de uma landing page e blog com sistema de gerenciamento de conteúdo usando Markdown.

## Sobre o Projeto

Este projeto foi desenvolvido como parte do curso de Fundamentos do Next.js, explorando os conceitos fundamentais do framework através da criação de um blog completo com:

- Landing page responsiva
- Sistema de blog com posts em Markdown
- Gerenciamento de conteúdo com Contentlayer
- Design system customizado

## Tecnologias Utilizadas

- **Next.js 16** - Framework React com Pages Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Contentlayer** - CMS para Markdown
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones

## Funcionalidades

### Landing Page
- Hero section com call-to-action
- Seção de recursos e benefícios
- Depoimentos de clientes
- Design responsivo e moderno

### Blog
- Listagem de posts com busca
- Posts individuais com Markdown
- Sistema de navegação
- Cards responsivos com informações do autor

## Como Executar

1. Clone o repositório
```bash
git clone https://github.com/danielgorgonha/nextjs-fundamentos-do-next
```

2. Instale as dependências
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento
```bash
pnpm dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── templates/      # Templates de páginas
├── pages/          # Páginas Next.js
├── styles/         # Estilos globais
└── lib/            # Utilitários
```

## Design

O design foi baseado no [Figma da Rocketseat](https://www.figma.com/design/3rpq2Ak1WLTFLwuEJdE0jm/Landing-Page-e-Blog--Community-?node-id=0-1&p=f&t=qgjVgl2NImNa7bco-0), seguindo as melhores práticas de UX/UI para landing pages e blogs.

## Aprendizados

Este projeto demonstra os conceitos fundamentais do Next.js:

- **Roteamento** com Pages Router
- **Data Fetching** com Static Site Generation (SSG)
- **Renderização** otimizada
- **Gerenciamento de conteúdo** com Markdown
- **Componentização** e reutilização de código

## Próximos Passos

- Migração para App Router
- Implementação de React Server Components
- Otimizações de performance
- Testes automatizados

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Créditos

Desenvolvido durante o curso de Fundamentos do Next.js da [Rocketseat](https://rocketseat.com.br).