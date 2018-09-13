const express = require("express");
const logger = require("heroku-logger");

const router = express.Router();

const { create } = require("../../controllers/alunos/alunosCRUDController");

// @route   POST api/alunos/
// @desc    Cria um aluno
// @access  Public
// router.post("/", (req, res) => {
//   logger.info(req.body);
//   Aluno.create(req.body);

//   const disciplina = req.body.disciplinas[0];

//   Disciplina.create(disciplina).then(disciplina => {
//     disciplina.AlunoMatricula = req.body.matricula;
//     disciplina.save();
//   });
// });

// @route   POST api/alunos/
// @desc    Cria um aluno
// @access  Public
router.post("/", create);

// @route   GET api/alunos/
// @desc    Pega lista de alunos cadastrados
// @access  Public
router.get("/", (req, res) => {
  logger.info(req.body);
  Aluno.findAll().then(alunos => res.json(alunos));
});

// @route   GET api/alunos/test
// @desc    Testa a rota de alunos
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de alunos." })
);

module.exports = router;
