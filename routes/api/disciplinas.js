/**
 * @swagger
 * resourcePath: /api/disciplinas
 * description: Especificação das rotas referentes às disciplinas
 */
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * path: api/disciplinas/test
 * operations:
 *   -  httpMethod: GET
 *      summary: Testa uma disciplina
 *      responseClass: Disciplina
 *      nickname: test
 */
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de perfil." })
);

module.exports = router;
