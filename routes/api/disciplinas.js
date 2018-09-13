const express = require("express");
const router = express.Router();

const { cadastraOuAtualizaDisciplina, verTodas, verDisciplina, apagaDisciplina } = require("../../controllers/disciplinas/disciplinasCRUDController");

// @route   GET api/disciplinas/
// @desc    Pega lista de disciplinas cadastradas
// @access  Public
router.get("/", verTodas);

// @route   POST api/disciplinas/
// @desc    Cria um disciplina ou atualiza seus dados
// @access  Public
router.post("/", cadastraOuAtualizaDisciplina);

// @route   GET api/disciplinas/:codigo
// @desc    Pega disciplina pelo seu código
// @access  Public
router.get("/:codigo", verDisciplina);

// @route   DELETE api/disciplinas/:codigo
// @desc    Apaga uma disciplina
// @access  Public
router.delete("/:matricula", apagaDisciplina);

module.exports = router;
