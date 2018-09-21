/**
 * @swagger
 * resourcePath: /api/usuarios
 * description: Especificação das rotas referentes aos usuários
 */
const express = require("express");
const router = express.Router();

const {
  cadastra,
  login,
  getUsuarioAtual
} = require("../../controllers/usuarios/usuariosController");

/**
 * @swagger
 * path: api/usuarios/
 * operations:
 *   -  httpMethod: POST
 *      summary: Cadastra um usuário
 *      responseClass: Usuario
 *      nickname: cadastraUsuario
 */
router.post("/", cadastra);

/**
 * @swagger
 * path: api/usuarios/login
 * operations:
 *   -  httpMethod: POST
 *      summary: Loga um usuário
 *      responseClass: Usuario
 *      nickname: loginUsuario
 */
router.post("/login", login);

/**
 * @swagger
 * path: api/usuarios/current
 * operations:
 *   -  httpMethod: GET
 *      summary: Pega o usuário atual
 *      responseClass: Usuario
 *      nickname: getUsuarioAtual
 */
router.get("/eu", getUsuarioAtual);

module.exports = router;
