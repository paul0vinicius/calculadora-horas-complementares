const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AtividadeComplementarSchema = new Schema({
  codigo: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  unidadeAComprovar: {
    type: String,
    required: true
  },
  aproveitamentoCargaHorariaPorUnidadeEmHoras: {
    type: Number,
    required: true
  },
  aproveitamentoCargaHorariaPorUnidadeEmCreditos: {
    type: Number,
    required: true
  },
  limiteTotalHoras: {
    type: Number,
    required: true
  },
  limiteTotalCreditos: {
    type: Number,
    required: true
  },
  documentacaoComprobatoria: {
    type: String,
    required: true
  }
});

module.exports = AtividadeComplementar = mongoose.model(
  "atividadesComplementares",
  AtividadeComplementarSchema
);
