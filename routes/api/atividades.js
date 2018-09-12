const express = require("express");
const router = express.Router();

// @route   GET api/atividades/test
// @desc    Testa a rota de atividades
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de atividades." })
);

module.exports = router;
