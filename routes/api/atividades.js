/**
 * @swagger
 * resourcePath: /api/atividades
 * description: Especificação das rotas referentes às atividades complementares
 */
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * path: api/atividades/test
 * operations:
 *   -  httpMethod: GET
 *      summary: Testa uma atividade
 *      responseClass: AtividadeComplementar
 *      nickname: test
 */
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de atividades." })
);

module.exports = router;
