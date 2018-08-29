const express = require("express");
const router = express.Router();

// @route   GET api/usuarios/test
// @desc    Testa a rota de usuários
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de usuários." })
);

module.exports = router;
