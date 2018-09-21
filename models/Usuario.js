module.exports = (sequelize, type) => {
  return sequelize.define("Usuario", {
    matricula: {
      type: type.STRING,
      primaryKey: true,
    },
    senha: type.STRING,
    email: type.STRING
  });
};
