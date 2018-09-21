module.exports = (sequelize, type) => {
  return sequelize.define("Disciplina", {
    codigo: {
      type: type.STRING,
      primaryKey: true,
    },
    creditos: type.INTEGER,
    nome: type.STRING,
    apelido: type.STRING,
    descricao: type.STRING,
    tipo: {
      type: type.ENUM,
      values: ['Optativa', "Complementar"]
    },
  });
};