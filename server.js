// Inicializa Express
const express = require("express");

// Importa rotas
const usuarios = require("./routes/api/usuarios");
const alunos = require("./routes/api/usuarios");
const disciplinas = require("./routes/api/usuarios");

const app = express();

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
