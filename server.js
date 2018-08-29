// Inicializa Express
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importa rotas
const usuarios = require("./routes/api/usuarios");
const alunos = require("./routes/api/usuarios");
const disciplinas = require("./routes/api/usuarios");

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
  .then(() => console.log("Banco de dados conectado!"))
  .catch(err => console.log(err));

// Chama rotas na aplicação
app.use("/api/usuarios", usuarios);
app.use("/api/alunos", alunos);
app.use("/api/disciplinas", disciplinas);

const port = 3000;

app.get("/user", function(req, res) {
  res.status(200).json({ name: "john" });
});

app.listen(port, () => console.log(`Servidor rodando em ${port}`));

module.exports = app;
