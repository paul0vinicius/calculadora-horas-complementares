const { Usuario } = require("../../sequelize");

module.exports = {
  cadastra(req, res) {
    Usuario.create({ "matricula": req.body.matricula, "senha": req.body.senha, "email": req.body.email }).then(usuario => res.json(usuario));
  },
  getAll() { },
  getById() { },
  update() { },
  deleteById() { }
};