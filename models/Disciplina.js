const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
  codigo: {
    type: String,
    required: true
  },
  creditos: {
    type: Number,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  apelido: {
    type: String
  },
  descricao: {
    type: String
  },
  tipo: {
    type: String,
    required: true
  }
});

module.exports = Disciplina = mongoose.model("disciplinas", DisciplinaSchema);
