/**
 * @swagger
 * resourcePath: /api/disciplinas
 * description: Especificação das rotas referentes às disciplinas
 */
const express = require("express");
const router = express.Router();

const {
  cadastraOuAtualizaDisciplina,
  verTodas,
  verDisciplina,
  apagaDisciplina
} = require("../../controllers/disciplinas/disciplinasCRUDController");

/**
 * @swagger
 * path: api/disciplinas/
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega lista de disciplinas cadastradas
 *      responseClass: Disciplina
 *      nickname: getDisciplinas
 */
router.get("/", verTodas);

/**
 * @swagger
 * path: api/disciplinas/
 * operations:
 *   -  httpMethod: POST
 *      summary: Cria um disciplina ou atualiza seus dados
 *      responseClass: Disciplina
 *      nickname: criaDisciplinas
 */
router.post("/", cadastraOuAtualizaDisciplina);

/**
 * @swagger
 * path: api/disciplinas/:codigo
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega disciplina pelo seu código
 *      responseClass: Disciplina
 *      nickname: getDisciplina
 */
router.get("/:codigo", verDisciplina);

/**
 * @swagger
 * path: api/disciplinas/:codigo
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Apaga disciplina de um aluno dado seu código
 *      responseClass: Disciplina
 *      nickname: deletaDisciplina
 */
router.delete("/:codigo", apagaDisciplina);

module.exports = router;
