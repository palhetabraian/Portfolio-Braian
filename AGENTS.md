# AGENTS.md

## Objetivo

Este projeto é o portfólio pessoal de Braian Nickolas, desenvolvedor Full Stack. A aplicação deve ser minimalista, moderna, acessível, responsiva e focada em apresentar perfil, stack principal, projetos em destaque e repositórios públicos do GitHub.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- react-icons

Não usar React Router, React Hook Form ou Zod na primeira versão, pois não existem múltiplas páginas nem formulários.

## Estrutura

- `docs/`: referências e decisões do projeto. Consultar antes de implementar.
- `figma-source/`: referência histórica original.
- `public/assets/`: arquivos públicos, como currículo PDF.
- `src/assets/`: assets importados pelo código.
- `src/components/`: componentes visuais reutilizáveis.
- `src/data/`: dados estáticos do portfólio.
- `src/hooks/`: hooks reutilizáveis.
- `src/services/`: integrações externas.
- `src/styles/`: estilos globais.
- `src/types/`: tipos TypeScript.
- `src/utils/`: funções puras.

## Convenções

- Componentes em PascalCase.
- Hooks iniciando com `use`.
- Arquivos com JSX usam `.tsx`.
- Arquivos sem JSX usam `.ts`.
- Não usar `any`.
- Não usar `@ts-ignore`.
- Não criar abstrações antes de existir necessidade real.
- Não duplicar lógica.
- Separar interface, regra de negócio e acesso a dados.

## Tailwind CSS

- Desenvolver mobile-first.
- Usar tokens via variáveis CSS e utilitários Tailwind.
- Evitar valores mágicos repetidos.
- Preservar contraste, foco visível e legibilidade.
- Não recriar estilos fora do padrão visual aprovado.

## GitHub API

A lista geral de projetos vem da API pública do GitHub.

Regras:

- remover forks;
- remover arquivados;
- ordenar por atualização recente;
- limitar a 12 repositórios inicialmente;
- descrição vem do README;
- fallback para descrição do GitHub;
- tecnologias vêm de `languages_url`, `topics` e termos detectados no README.

## Currículo

O link de currículo aponta para:

`/assets/curriculo-braian-nickolas.pdf`

O arquivo PDF será adicionado manualmente no projeto.

## Fluxo de desenvolvimento

Implementar em tarefas pequenas. Para cada tarefa, explicar objetivo, arquivos, código, teste manual e commit sugerido.

## Commits

Commits devem ser pequenos e objetivos:

`feat: configura projeto react com vite`
`feat: adiciona estrutura base do portfolio`
`feat: integra repositorios do github`
