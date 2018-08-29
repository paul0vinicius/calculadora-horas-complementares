const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    Testa a rota de perfil
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de perfil." })
);

module.exports = router;
