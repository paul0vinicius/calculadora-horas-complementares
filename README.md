# Calculadora de Horas Complementares

Calculadora de horas complementares para a conclusão de curso na grade nova em CC - UFCG.

# Requisitos

Os requisitos para rodar a aplicação são:

```
NodeJS >= 4.0
```

O projeto foi desenvolvido utilizando as seguintes ferramentas:

## Backend

- ExpressJS
- Sequelize

## Frontend

- (Ainda chegaremos lá)

# Desenvolvimento

## Conexão com o banco de dados

O sistema utiliza o postgresql como banco de dados padrão e deve ser configurado da seguinte maneira:

- Crie um arquivo keys_dev.js no seguinte formato e salve na pasta `/config`:

```
module.exports = {
  postgresURI: "SEU_LINK_DO_BD"
};
```

## Instalando dependências

```
npm install
```

## Rodando o projeto

Somente o servidor:

```
npm run server
```
