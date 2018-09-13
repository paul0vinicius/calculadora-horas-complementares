const express = require("express");
const logger = require("heroku-logger");

const router = express.Router();

const { cadastraOuAtualiza, verTodos, verAluno, apagaAluno } = require("../../controllers/alunos/alunosCRUDController");

// @route   GET api/alunos/
// @desc    Pega lista de alunos cadastrados
// @access  Public
router.get("/", verTodos);

// @route   POST api/alunos/
// @desc    Cria um aluno ou atualiza seus dados pessoais
// @access  Public
router.post("/", cadastraOuAtualiza);

// @route   GET api/alunos/:matricula
// @desc    Pega lista de alunos cadastrados
// @access  Public
router.get("/:matricula", verAluno);

// @route   DELETE api/alunos/:matricula
// @desc    Apaga um aluno
// @access  Public
router.delete("/:matricula", apagaAluno);

module.exports = router;
