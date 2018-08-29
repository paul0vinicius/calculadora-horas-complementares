const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  quantCreditos: {
    type: Number,
    required: true
  }
});

module.exports = Disciplina = mongoose.model("disciplinas", DisciplinaSchema);
