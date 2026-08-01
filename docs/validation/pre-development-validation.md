# Validação pré-desenvolvimento

Data: 30 de julho de 2026

## Resultado

A referência em HTML, CSS e JavaScript está aprovada para iniciar o desenvolvimento em React.
O Figma não faz mais parte do fluxo nem da fonte de verdade do projeto.

## Acessibilidade

- Documento em `pt-BR`, com landmarks semânticos, hierarquia contínua de `h1` a `h3` e link para pular ao conteúdo.
- Contraste principal: `16.73:1`.
- Contraste secundário no tema claro: `5.22:1`.
- Contraste secundário no tema escuro: `10.94:1`.
- Foco visível, suporte a `prefers-reduced-motion` e estados do tema expostos por `aria-label` e `aria-pressed`.
- Menu mobile fecha com `Escape` e devolve o foco ao controle.
- Resultados da busca são anunciados por uma região `aria-live`.

## Responsividade

- Sem overflow horizontal em 360, 760, 761, 1024, 1025 e 1440 px.
- Header mobile até 760 px e desktop a partir de 761 px.
- Cards de destaque: uma coluna até 1024 px e duas colunas a partir de 1025 px.
- Áreas interativas visíveis com pelo menos 40 px no desktop e 44 px no mobile.

## Componentes e interações

- Temas claro e escuro funcionais.
- Header flutuante e navegação interna funcionais.
- Marca textual definida como `braian.dev`.
- CTA do WhatsApp, redes sociais, busca de projetos e voltar ao topo funcionais.
- Stack principal com sete tecnologias, ícones simulados e distribuição responsiva.
- Cards, botões e links usam os mesmos tokens de cor, borda, raio, espaçamento, foco e movimento.
- Menu mobile abre, fecha ao selecionar um link, fecha fora do menu e fecha pelo teclado.

## Conteúdo e links

- Nome, cargo, apresentação, WhatsApp, GitHub, LinkedIn, e-mail, currículo e copyright foram aplicados.
- O perfil do GitHub e o redirecionamento do WhatsApp foram validados.
- O LinkedIn bloqueia verificações automatizadas, mas a URL está bem formada e coincide com a referência informada.
- Projetos em destaque serão escolhidos manualmente e terão thumbnail própria.
- A lista geral de projetos consome a API pública de repositórios do GitHub e usa o README como fonte principal da descrição.
- O nome de cada repositório também abre o link do projeto, com seta visível no hover/focus, mantendo o botão lateral `Repo`.

## Decisão para React

- Destaques: conteúdo manual, com thumbnail, tecnologias, repositório e demonstração.
- Projetos gerais: dados vindos de `https://api.github.com/users/palhetabraian/repos?sort=updated&per_page=100`.
- Descrição dos projetos gerais: resumo extraído do endpoint `readme` de cada repositório, com fallback para a descrição do GitHub.
- Tecnologias dos projetos gerais: lista combinada do endpoint `languages_url`, `topics` e termos reconhecidos no README.
- Filtros iniciais: remover forks, remover arquivados, ordenar por atualização recente e exibir até 12 repositórios na primeira versão.
- Componentes recomendados: `Header`, `Hero`, `SocialLinks`, `PrimaryStack`, `FeaturedProjects`, `GithubProjects`, `ProjectRow`, `Footer` e `ThemeToggle`.
- Arquivo futuro do currículo: `./assets/curriculo-braian-nickolas.pdf`, usando link com atributo `download`.

## Organização da referência

- `content.md`: fonte de verdade do conteúdo.
- `figma-source/styles.css`: tokens e componentes compartilhados.
- `figma-source/wireframe.css`: composição e responsividade da landing page.
- `figma-source/wireframe.html`: estrutura semântica da landing page.
- `figma-source/wireframe.js`: tema, menu, navegação ativa, busca e consumo da API do GitHub.

## Validações automatizadas

- `node --check figma-source/wireframe.js`
- `npx html-validate figma-source/wireframe.html`
- `Invoke-RestMethod` na API pública do GitHub retornou repositórios reais do perfil `palhetabraian`.
