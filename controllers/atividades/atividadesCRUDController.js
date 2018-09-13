const { AtividadeComplementar } = require("../../sequelize");

module.exports = {
  cadastraOuAtualizaAtividade(req, res) {

  },
  verTodas(req, res) {
    AtividadeComplementar.findAll().then(atividades => res.json(atividades));
  },
  verAtividade(req, res) {
    AtividadeComplementar.findById(req.params.id).then(atividade => res.json(atividade));
  },
  apagaAtividade(req, res) {

  }
};