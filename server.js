// Inicializa Express
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("heroku-logger");

// Importa rotas
const usuarios = require("./routes/api/usuarios");
const alunos = require("./routes/api/alunos");
const disciplinas = require("./routes/api/disciplinas");
const atividades = require("./routes/api/atividades");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Chama rotas na aplicação
app.use("/api/usuarios", usuarios);
app.use("/api/alunos", alunos);
app.use("/api/disciplinas", disciplinas);
app.use("/api/atividades", atividades);

const port = 5000 || process.env.PORT;

app.listen(port, () => logger.info(`Servidor rodando em ${port}`));

module.exports = app;
