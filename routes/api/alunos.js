/**
 * @swagger
 * resourcePath: /api/alunos
 * description: Especificação das rotas referentes a alunos
 */
const express = require("express");
const logger = require("heroku-logger");

const router = express.Router();

const { Aluno } = require("../../sequelize");

/**
 * @swagger
 * path: api/alunos/
 * operations:
 *   -  httpMethod: POST
 *      summary: Cria um aluno
 *      responseClass: Aluno
 *      nickname: criaAlunos
 */
router.post("/", (req, res) => {
  logger.info(req.body);
  Aluno.create(req.body).then(aluno => res.json(aluno));
});

/**
 * @swagger
 * path: api/alunos/
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega lista de alunos cadastrados
 *      notes: Retorna a lista de todos os alunos cadastrados
 *      responseClass: Aluno
 *      nickname: getAlunos
 */
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
