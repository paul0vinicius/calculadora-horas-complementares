/**
 * @swagger
 * resourcePath: /api/usuarios
 * description: Especificação das rotas referentes aos usuários
 */
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * path: api/usuarios/test
 * operations:
 *   -  httpMethod: GET
 *      summary: Testa a rota de usuários
 *      responseClass: Usuario
 *      nickname: test
 */
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de usuários." })
);

/**
 * @swagger
 * path: api/usuarios/
 * operations:
 *   -  httpMethod: POST
 *      summary: Cadastra um usuário
 *      responseClass: Usuario
 *      nickname: cadastraUsuario
 */
router.post("/", (req, res) => {});

/**
 * @swagger
 * path: api/usuarios/login
 * operations:
 *   -  httpMethod: POST
 *      summary: Loga um usuário
 *      responseClass: Usuario
 *      nickname: loginUsuario
 */
router.post("/login", (req, res) => {});

/**
 * @swagger
 * path: api/usuarios/current
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega o usuário atual
 *      responseClass: Usuario
 *      nickname: getUsuarioAtual
 */
router.get("/current", (req, res) => {});

module.exports = router;
