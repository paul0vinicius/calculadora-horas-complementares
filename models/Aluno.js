const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlunoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios"
  },
  apelido: {
    type: String,
    required: true,
    max: 40
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  github: {
    type: String
  },
  periodo: {
    type: Number,
    required
  }
});

module.exports = Aluno = mongoose.model("alunos", AlunoSchema);
