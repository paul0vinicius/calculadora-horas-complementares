const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlunoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios"
  },
  nome: {
    type: String,
    required: true
  },
  periodo: {
    type: Number,
    required: true
  }
});

module.exports = Aluno = mongoose.model("alunos", AlunoSchema);
