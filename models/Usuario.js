module.exports = (sequelize, type) => {
  return sequelize.define("Usuario", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    matricula: type.STRING,
    senha: type.STRING,
    email: type.STRING
  });
};
