# Fabulas Interativas Não Lineares

Este repositório contém uma implementação do modelo **Fabulas**, concebido na **Universidade Federal do Maranhão (UFMA)**, para a criação de fábulas interativas não lineares. Cada fábula é uma **DSL (Domain-Specific Language)** escrita em **XML**, e a aplicação permite gerenciar múltiplas páginas simultaneamente, com uma interface que inclui uma árvore de arquivos, um console de erros e um preview da fábula em execução.

## Funcionalidades Principais

- **File Tree**: Controle de múltiplas páginas de fábulas simultaneamente.
- **Console de Erros**: Visualização e depuração de erros na DSL.
- **Preview**: Visualização em tempo real da fábula sendo executada.
- **Integração com GitHub**: Cada fábula é, na verdade, um repositório no GitHub. A única forma de autenticação é através do GitHub, utilizando OAuth.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React utilizado para a construção da aplicação.
- **Octokit**: Biblioteca para interação com a API do GitHub. [Saiba mais sobre Octokit](https://octokit.github.io/).
- **Next-Auth ou Clerk**: Em estudo para implementação de autenticação OAuth.
- **React**: Biblioteca para construção de interfaces de usuário.
- **XML**: Linguagem de marcação utilizada para definir as fábulas.

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

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato diretamente.
