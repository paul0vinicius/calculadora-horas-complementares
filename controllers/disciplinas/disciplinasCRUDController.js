const { Disciplina } = require("../../sequelize");

module.exports = {
  cadastraOuAtualizaDisciplina(req, res) {

  },
  verTodas(req, res) {
    Disciplina.findAll().then(disciplinas => res.json(disciplinas));
  },
  verDisciplina(req, res) {
    Disciplina.findById(req.params.codigo).then(disciplina => res.json(disciplina));
  },
  apagaDisciplina(req, res) {

  }
};