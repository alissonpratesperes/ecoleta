<p align="center">
  <img src="./github/ecoleta-logo.svg" alt="ecoleta-logo" width="30%"/>
</p>

___

<br/>

<p align="center">
  <a href="#sobre">SOBRE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#tecnologia">TECNOLOGIA</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#execute">EXECUTE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#autor">AUTOR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#licença">LICENÇA</a>
</p>

<br/>

<p align="center">
  <img src="./github/ecoleta-dashboard.png" alt="ecoleta-dashboard" width="100%"/>
</p>

## SOBRE

A **ecoleta** é uma Aplicação envolvendo um Marketplace que ajuda pessoas a encontrarem Pontos de Coleta de Resíduos de forma eficiente

## TECNOLOGIA

TOOLING | <a href="https://insomnia.rest/">Insomnia</a> • <a href="https://expo.dev/">Expo IO</a>

DATABASE | <a href="https://sqlite.org/">SQLite 3</a> • <a href="https://knexjs.org/">KnexJS</a>

INTEGRATION | <a href="https://axios-http.com/">Axios</a>

BACK-END | <a href="https://nodejs.org/">NodeJS</a> • <a href="https://www.typescriptlang.org/">TypeScript</a>

FRONT-END | <a href="https://reactjs.org/">ReactJS</a>

MOBILE | <a href="https://reactnative.dev/">React Native</a>

## EXECUTE

    - Clonar o Repositório
    - Acessar o Back-End: "./backend"
      |- Instalar as dependências com o Comando: "npm install --force"
      |- Gerar o Banco de Dados com o Comando: "npm run knex:migrate"
      |- Gerar os Itens de Coleta com o Comando: "npm run knex:seed"
        >_ Inicializar o Back-End com o Comando: "npm run dev"
    - Acessar o Front-End: "./frontend"
      |- Instalar as dependências com o Comando: "npm install --force"
      |- Acessar o arquivo: "./frontend/src/services/api.ts:4" e atualizar o Endereço de Conexão do Front-End
        >_ Inicializar o Front-End com o Comando: "npm start"
    - Acessar o Mobile: "./mobile"
      |- Instalar as dependências com o Comando: "npm install --force"
      |- Acessar o arquivo: "./mobile/src/services/api.ts:4" e atualizar o Endereço de Conexão do Mobile
        >_ Inicializar o Mobile com o Comando: "expo start"

## AUTOR

Projeto desenvolvido durante a **Next Level Week 01** da <a href="https://rocketseat.com.br/">Rocketseat</a> ocorrida em **Junho de 2020**

Acesse <a href="https://github.com/rocketseat-education/nlw-01-omnistack">aqui</a> o **repositório oficial** do Projeto

## LICENÇA

Esse projeto está sob a **Licença MIT** veja o arquivo [LICENSE](https://github.com/alissonpratesperes/ecoleta/blob/main/LICENSE) para mais detalhes

___

<p align="center">✍🏻&nbsp;with&nbsp;❤️&nbsp;by&nbsp;<a href="https://github.com/alissonpratesperes">me</a>&nbsp👨🏻‍💻</p>