const Aluno = require("../../models/Aluno");
const Disciplina = require("../../models/Disciplina");
const AtividadeComplementar = require("../../models/AtividadeComplementar");
const Usuario = require("../../models/Usuario");

module.exports = {
  cadastraOuAtualizaAluno(req, res) {
    // Get fields
    const camposAluno = {};
    camposAluno.usuario = req.user.id;

    // Simple text fields
    if (req.body.apelido) camposAluno.apelido = req.body.apelido;
    if (req.body.bio) camposAluno.bio = req.body.bio;
    if (req.body.github) camposAluno.github = req.body.github;
    if (req.body.periodo) camposAluno.periodo = req.body.periodo;

    // Skills - Split into array
    if (typeof req.body.skills !== "undefined") {
      camposAluno.skills = req.body.skills.split(",");
    }

    Aluno.findOne({ usuario: req.user.id }).then(aluno => {
      if (aluno) {
        // Update
        Aluno.findOneAndUpdate(
          { usuario: req.user.id },
          { $set: camposAluno },
          { new: true }
        ).then(aluno => res.json(aluno));
      } else {
        // Create

        // Check if handle exists
        Aluno.findOne({ apelido: camposAluno.apelido }).then(aluno => {
          if (aluno) {
            res
              .status(BAD_REQUEST)
              .json({ "errors.apelido": "Esse apelido já está em uso." });
          }

          // Save profile
          new Aluno(camposAluno).save().then(aluno => res.json(aluno));
        });
      }
    });
  },
  verTodos(req, res) {
    Aluno.find()
      .populate("usuario", ["nome", "avatar"])
      .then(alunos => {
        if (!alunos) {
          res
            .status(NOT_FOUND)
            .json({ "errors.noprofile": "There are no alunos" });
        }
        res.json(alunos);
      })
      .catch(err =>
        res.status(NOT_FOUND).json({ err, profile: "There are no alunos" })
      );
  },
  verAluno(req, res) {
    Aluno.findOne({ apelido: req.params.apelido })
      .populate("usuario", ["nome", "avatar"])
      .then(aluno => {
        if (!aluno) {
          res
            .status(404)
            .json({ "errors.noprofile": "There is no profile for this user" });
        }
        res.json(aluno);
      })
      .catch(err => res.status(404).json(err));
  },
  adicionaDisciplinas(req, res) {
    Aluno.findOne({ usuario: req.user.id })
      .then(aluno => {
        Disciplina.findOne({ codigo: req.body.codigoDisciplina }).then(
          disciplina => {
            // Add to exp array
            aluno.disciplinas.unshift(disciplina.id);
            aluno.save().then(aluno => res.json(aluno));
          }
        );
      })
      .catch(err => {
        res.status(404).json(err);
      });
  },
  adicionaAtividades(req, res) {
    Aluno.findOne({ usuario: req.user.id })
      .then(aluno => {
        AtividadeComplementar.findOne({
          codigo: req.body.codigoAtividade
        }).then(atividade => {
          // Add to exp array
          aluno.atividades.unshift(atividade.id);
          aluno.save().then(aluno => res.json(aluno));
        });
      })
      .catch(err => {
        res.status(404).json(err);
      });
  },
  apagaAluno(req, res) {
    Aluno.findOneAndRemove({ usuario: req.user.id }).then(() => {
      Usuario.findOneAndRemove({ _id: req.user.id }).then(() => {
        res.json({ success: true });
      });
    });
  }
};
