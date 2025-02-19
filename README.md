# Fabulas Interativas Não Lineares

Este repositório contém uma implementação do modelo **Fabulas**, concebido na **Universidade Federal do Maranhão (UFMA)**, para a criação de fábulas interativas não lineares. Cada fábula é uma **DSL (Domain-Specific Language)** escrita em **XML**, e a aplicação permite gerenciar múltiplas páginas simultaneamente, com uma interface que inclui uma árvore de arquivos, um console de erros e um preview da fábula em execução.

## Funcionalidades Principais

- **File Tree**: Controle de múltiplas páginas de fábulas simultaneamente.
- **Console de Erros**: Visualização e depuração de erros na DSL.
- **Preview**: Visualização em tempo real da fábula sendo executada.
- **Integração com GitHub**: Cada fábula é, na verdade, um repositório no GitHub. A única forma de autenticação é através do GitHub, utilizando OAuth.

## Principais Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)**: Framework React utilizado para a construção da aplicação.
- **[Octokit](https://octokit.github.io/)**: Biblioteca para interação com a API do GitHub.
- **[Next-Auth](https://next-auth.js.org/)** ou **[Clerk](https://clerk.dev/)**: Em estudo para implementação de autenticação OAuth.
- **[React](https://reactjs.org/)**: Biblioteca para construção de interfaces de usuário.
- **[XML](https://www.w3.org/XML/)**: Linguagem de marcação utilizada para definir as fábulas.
- **[Shadcn UI](https://shadcn-ui.com/)**: Base da interface por motivos de praticidade.
- **[CodeMirror](https://codemirror.net/)**: Utilizado como editor de código.

## Estado Atual do Projeto

Atualmente, o projeto está em fase de protótipo, com as seguintes funcionalidades já implementadas:

- Estrutura básica do projeto em Next.js 15.
- Gerenciamento básico de fábulas através de uma árvore de arquivos.

Estou ainda trabalhando no projeto, e as próximas etapas incluem:

- Implementação de autenticação OAuth utilizando **Next-Auth** ou **Clerk**.
- Desenvolvimento da DSL para conversão de XML em elementos React.
- Manipulação do **access token** do usuário para leitura e escrita de dados utilizando **Octokit**.
- Melhorias na estilização da interface.
- Implementação de testes unitários.
- Criação de API routes no front-end para cada ação necessária (não haverá back-end separado, tudo será feito no front-end).
- Melhorias na experiência do usuário com **Shadcn UI**, pois muitas funcionalidades ainda estão primitivas.
- Melhorias no editor de código utilizando **CodeMirror** para proporcionar uma experiência mais rica e intuitiva.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato diretamente.
