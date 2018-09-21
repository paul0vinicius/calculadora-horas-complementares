/**
 * @swagger
 * resourcePath: /api/atividades
 * description: Especificação das rotas referentes às atividades complementares
 */
const express = require("express");
const router = express.Router();

const {
  cadastraOuAtualizaAtividade,
  verTodas,
  verAtividade,
  apagaAtividade
} = require("../../controllers/atividades/atividadesCRUDController");

/**
 * @swagger
 * path: api/atividades/
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega lista de atividades cadastradas
 *      notes: Retorna a lista de todas as atividades cadastradas
 *      responseClass: AtividadeComplementar
 *      nickname: getAtividades
 */
router.get("/", verTodas);

/**
 * @swagger
 * path: api/atividades/
 * operations:
 *   -  httpMethod: POST
 *      summary: Cria uma atividade ou atualiza seus dados
 *      responseClass: AtividadeComplementar
 *      nickname: criaAtividades
 */
router.post("/", cadastraOuAtualizaAtividade);

/**
 * @swagger
 * path: api/atividades/:codigo
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega atividade pelo seu código
 *      responseClass: AtividadeComplementar
 *      nickname: getAtividade
 */
router.get("/:id", verAtividade);

/**
 * @swagger
 * path: api/atividades/:codigo
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Deleta atividade pelo seu código
 *      responseClass: AtividadeComplementar
 *      nickname: deletaAtividade
 */
router.delete("/:codigo", apagaAtividade);

module.exports = router;
