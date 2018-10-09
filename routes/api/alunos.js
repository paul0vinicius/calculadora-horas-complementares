/**
 * @swagger
 * resourcePath: /api/alunos
 * description: Especificação das rotas referentes a alunos
 */
const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  cadastraOuAtualizaAluno,
  verTodos,
  verAluno,
  apagaAluno,
  adicionaAtividades,
  adicionaDisciplinas
} = require("../../controllers/alunos/alunosController");

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
router.get("/", verTodos);

/**
 * @swagger
 * path: api/alunos/
 * operations:
 *   -  httpMethod: POST
 *      summary: Cria um aluno
 *      responseClass: Aluno
 *      nickname: criaAlunos
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  cadastraOuAtualizaAluno
);

/**
 * @swagger
 * path: api/alunos/disciplinas
 * operations:
 *   -  httpMethod: POST
 *      summary: Adiciona disciplinas a um aluno
 *      responseClass: Aluno
 *      nickname: adicionaDisciplinas
 */
router.post(
  "/disciplinas",
  passport.authenticate("jwt", { session: false }),
  adicionaDisciplinas
);

/**
 * @swagger
 * path: api/alunos/atividades
 * operations:
 *   -  httpMethod: POST
 *      summary: Adiciona atividades a um aluno
 *      responseClass: Aluno
 *      nickname: adicionaAtividades
 */
router.post(
  "/atividades",
  passport.authenticate("jwt", { session: false }),
  adicionaAtividades
);

/**
 * @swagger
 * path: api/alunos/:matricula
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega aluno pela matrícula
 *      responseClass: Aluno
 *      nickname: getAluno
 */
router.get("/:matricula", verAluno);

/**
 * @swagger
 * path: api/alunos/:matricula
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Deleta aluno
 *      responseClass: Aluno
 *      nickname: deletaAluno
 */
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  apagaAluno
);

module.exports = router;
