const express = require("express");
const router = express.Router();

const { cadastraOuAtualizaAtividade, verTodas, verAtividade, apagaAtividade } = require("../../controllers/atividades/atividadesCRUDController");

// @route   GET api/disciplinas/
// @desc    Pega lista de disciplinas cadastradas
// @access  Public
router.get("/", verTodas);

// @route   POST api/disciplinas/
// @desc    Cria um disciplina ou atualiza seus dados
// @access  Public
router.post("/", cadastraOuAtualizaAtividade);

// @route   GET api/disciplinas/:codigo
// @desc    Pega disciplina pelo seu código
// @access  Public
router.get("/:id", verAtividade);

// @route   DELETE api/disciplinas/:codigo
// @desc    Apaga uma disciplina
// @access  Public
router.delete("/:matricula", apagaAtividade);

module.exports = router;
