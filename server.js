// Inicializa Express
const express = require("express");
const mongoose = require("mongoose");
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

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => logger.info("Banco de dados conectado!"))
  .catch(err => logger.info(err));

// Chama rotas na aplicação
app.use("/api/usuarios", usuarios);
app.use("/api/alunos", alunos);
app.use("/api/disciplinas", disciplinas);
app.use("/api/atividades", atividades);

const port = 5000;

app.listen(port, () => logger.info(`Servidor rodando em ${port}`));

module.exports = app;
