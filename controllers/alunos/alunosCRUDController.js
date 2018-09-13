const { Aluno } = require("../../sequelize");

module.exports = {
  create(req, res) {
    Aluno.create({ "matricula": req.body.matricula, "nome": req.body.nome }).then(aluno => {
      aluno.UsuarioMatricula = req.body.matricula;
      aluno.save();

      return (res.json(aluno));
    });
  },
  getAll() { },
  getById() { },
  update() { },
  deleteById() { }
};