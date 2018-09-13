// Imports
const Sequelize = require("sequelize");
const logger = require("heroku-logger");

// Models
const AlunoModel = require("./models/Aluno");
const AtividadeComplementarModel = require("./models/AtividadeComplementar");
const DisciplinaModel = require("./models/Disciplina");
const UsuarioModel = require("./models/Usuario");

// DB Config
const db = require("./config/keys").postgresURI;

// Connect to Postgres
const sequelize = new Sequelize(db, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
  })
  .catch(err => {
    logger.error("Unable to connect to the database:", err);
  });

const Usuario = UsuarioModel(sequelize, Sequelize);
const Aluno = AlunoModel(sequelize, Sequelize);
const Disciplina = DisciplinaModel(sequelize, Sequelize);
const AtividadeComplementar = AtividadeComplementarModel(
  sequelize,
  Sequelize
);

Aluno.belongsTo(Usuario, { foreignKey: "UsuarioMatricula" });
Aluno.hasMany(Disciplina, { foreignKey: "AlunoMatricula" });
Aluno.hasMany(AtividadeComplementar, { foreignKey: "AlunoMatricula" });

sequelize.sync({ force: true }).then(() => {
  logger.info(`Database & tables created!`);
});

module.exports = {
  Usuario,
  Aluno,
  Disciplina,
  AtividadeComplementar
};
