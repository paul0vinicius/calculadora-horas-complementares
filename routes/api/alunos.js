const express = require("express");
const logger = require("heroku-logger");

const router = express.Router();

const { Aluno } = require("../../sequelize");

// @route   POST api/alunos/
// @desc    Cria um aluno
// @access  Public
router.post("/", (req, res) => {
  logger.info(req.body);
  Aluno.create(req.body).then(aluno => res.json(aluno));
});

// @route   GET api/alunos/test
// @desc    Testa a rota de alunos
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de alunos." })
);

module.exports = router;
