const { Aluno } = require("../../sequelize");

module.exports = {
  cadastraOuAtualizaAluno(req, res) {
    Aluno.findOrCreate({ where: { matricula: req.body.matricula }, defaults: { nome: req.body.nome, UsuarioMatricula: req.body.matricula } }).spread((aluno, created) => {
      if (created) res.json(aluno);
      else {
        aluno.matricula = req.body.matricula;
        aluno.nome = req.body.nome;
        aluno.UsuarioMatricula = req.body.matricula;
        aluno.save();

        res.json(aluno);
      }
    });
  },
  verTodos(req, res) {
    Aluno.findAll().then(alunos => res.json(alunos));
  },
  verAluno(req, res) {
    Aluno.findById(req.params.matricula).then(aluno => res.json(aluno));
  },
  apagaAluno(req, res) {
    Aluno.destroy({ where: { matricula: req.params.matricula } }).then(opStatus => opStatus === 1 ? res.status(200).json({ "msg": "Success" }) : res.status(400).json({ "msg": "Usuário não existe" }));
  }
};