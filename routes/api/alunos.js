/**
 * @swagger
 * resourcePath: /api/alunos
 * description: Especificação das rotas referentes a alunos
 */
const express = require("express");

const router = express.Router();

const {
  cadastraOuAtualizaAluno,
  verTodos,
  verAluno,
  apagaAluno
} = require("../../controllers/alunos/alunosCRUDController");

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
router.post("/", cadastraOuAtualizaAluno);

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
 *      summary: Deleta aluno pela matrícula
 *      responseClass: Aluno
 *      nickname: deletaAluno
 */
router.delete("/:matricula", apagaAluno);

module.exports = router;
