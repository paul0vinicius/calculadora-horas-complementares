const express = require("express");
const router = express.Router();

// @route   GET api/usuarios/test
// @desc    Testa a rota de usuários
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de usuários." })
);

// @route   GET api/usuarios/cadastro
// @desc    Cadastra um usuário
// @access  Public
router.post("/cadastro", (req, res) => {});

// @route   GET api/usuarios/login
// @desc    Loga um usuário
// @access  Public
router.post("/login", (req, res) => {});

// @route   GET api/usuarios/current
// @desc    Pega o usuário atual
// @access  Public
router.post("/current", (req, res) => {});

module.exports = router;
