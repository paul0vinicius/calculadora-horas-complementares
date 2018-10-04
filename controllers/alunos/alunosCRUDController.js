const Aluno = require("../../models/Aluno");

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
  verTodos(req, res) {},
  verAluno(req, res) {},
  apagaAluno(req, res) {}
};
