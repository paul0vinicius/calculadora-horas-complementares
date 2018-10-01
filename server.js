// Inicializa Express
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("heroku-logger");
const swagger = require("swagger-express");

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
  .then(() => console.log("Banco de dados conectado!"))
  .catch(err => console.log(err));

// API documentation UI
app.use(
  swagger.init(app, {
    apiVersion: "1.0",
    swaggerVersion: "1.0",
    basePath: "http://localhost:3000",
    swaggerURL: "/docs/api",
    swaggerJSON: "/api-docs.json",
    swaggerUI: "./docs-ui/swagger/",
    apis: [
      "./routes/api/alunos.js",
      "./routes/api/atividades.js",
      "./routes/api/disciplinas.js",
      "./routes/api/usuarios.js"
    ]
  })
);

// Chama rotas na aplicação
app.use("/api/usuarios", usuarios);
app.use("/api/alunos", alunos);
app.use("/api/disciplinas", disciplinas);
app.use("/api/atividades", atividades);

const port = process.env.PORT || 3000;

app.listen(port, () => logger.info(`Servidor rodando em ${port}`));

module.exports = app;
