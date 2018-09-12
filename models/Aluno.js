module.exports = (sequelize, type) => {
  return sequelize.define("Aluno", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: type.STRING,
    matricula: type.STRING
  });
};
