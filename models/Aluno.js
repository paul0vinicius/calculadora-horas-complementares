module.exports = (sequelize, type) => {
  return sequelize.define("Aluno", {
    matricula: {
      type: type.STRING,
      primaryKey: true,
    },
    nome: type.STRING,
  });
};
