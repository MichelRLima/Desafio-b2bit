# Projeto Frontend b2bit

## Objetivo
Este projeto frontend foi desenvolvido como parte de um desafio técnico para a vaga de estágio frontend na empresa b2bit. O objetivo principal é criar uma aplicação que permita aos usuários acessar a plataforma utilizando um nome de usuário e senha específicos.

## Deploy
O deploy do projeto pode ser acessado clicando [aqui](https://b2bit.netlify.app/)

## Tecnologias Utilizadas
- React
- TypeScript
- Tailwind CSS

## Estrutura de Diretórios

```
├───public
└───src
    ├───api
    ├───components
    ├───context
    ├───functions
    │   └───alerts
    ├───images
    └───models
        └───interfaces
```

## Pré-requisitos
- Node.js

## Instalação 

1 - Clone este repositório com o comando `git clone https://github.com/MichelRLima/Desafio-b2bit`

2 - Na raiz do projeto, execute o comando `npm install`.

## Iniciar Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento local, execute o comando `npm run dev`.

## Recursos e Funcionalidades Principais

- Autenticação de usuário utilizando as credenciais fornecidas.
- Acesso à rota "profile" após autenticação, exibindo nome e e-mail do usuário.

## Dependências

- axios
- formik
- react
- react-dom
- react-router-dom
- react-toastify

## Armazenamento Local
Este projeto utiliza o `localStorage` para armazenar o token de autenticação, permitindo que o usuário permaneça logado após reiniciar a página.
