# Conteúdo do portfólio

## Configuração geral

- Idioma: português do Brasil (`pt-BR`)
- Nome de exibição: Braian Nickolas
- Cargo: Desenvolvedor Full Stack
- Marca textual: `braian.dev`
- Logo: usar `braian.dev` nesta primeira versão

## Apresentação

### Texto principal

Sou desenvolvedor Full Stack e transformo ideias em produtos digitais claros, eficientes e bem construídos. Uno visão de produto, atenção à experiência e domínio técnico para criar soluções que resolvem problemas reais.

### Versão curta

Desenvolvedor Full Stack focado em criar produtos digitais claros, eficientes e bem construídos.

## Chamada principal

- Rótulo: Enviar mensagem no WhatsApp
- URL: https://wa.me/5521980758914

## Redes e contato

- GitHub: https://github.com/palhetabraian
- LinkedIn: https://www.linkedin.com/in/braian-nickolas-4177a7295/
- E-mail: mailto:braiannickolas12@gmail.com
- E-mail exibido: braiannickolas12@gmail.com
- Currículo: `./assets/curriculo-braian-nickolas.pdf`
- Rótulo do currículo: Baixar currículo
- O PDF será adicionado no desenvolvimento em React e deverá baixar diretamente ao clicar.

## Stack principal

- React
- Vite
- TypeScript
- Node.js
- PostgreSQL
- Next.js
- Prisma

Na referência visual, utilizar ícones simulados e monocromáticos. Durante o desenvolvimento, substituir as simulações por uma biblioteca de ícones.

## Navegação

- Início
- Projetos

Não incluir Blog.

### Header desktop

Estrutura: `braian.dev | • INÍCIO | PROJETOS | divisor | PT / EN | divisor | tema`.

O header utiliza formato de cápsula e abraça o conteúdo, sem ocupar toda a largura da página.

## Projetos em destaque

Os projetos em destaque serão definidos manualmente pelo Braian.

Cada projeto em destaque deverá ter:

- nome;
- descrição curta;
- tecnologias principais;
- thumbnail;
- URL do repositório;
- URL da demonstração, quando existir.

Esta seção não depende da API do GitHub.

## Lista de projetos

A lista geral de projetos será alimentada pela API pública de repositórios do GitHub:

`https://api.github.com/users/palhetabraian/repos?sort=updated&per_page=100`

No desenvolvimento em React, filtrar inicialmente:

- remover forks;
- remover repositórios arquivados;
- ordenar por atualização recente;
- exibir nome, resumo extraído do `README.md`, tecnologias, topics, stars, forks, repositório e demo quando `homepage` existir.
- usar a descrição do repositório apenas como fallback quando não houver README disponível.
- listar tecnologias a partir do endpoint `languages_url` do GitHub e complementar com tecnologias detectadas no README, como Docker, Prisma, PostgreSQL, React, Vite, HTML, CSS e outras quando aparecerem no texto.
- manter o botão lateral `Repo` e também permitir abrir o repositório clicando no nome do projeto; a seta do título aparece no hover/focus.

## Rodapé

`© 2026 Braian Nickolas. Todos os direitos reservados.`
