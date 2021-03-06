const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
});

module.exports = Usuario = mongoose.model("usuarios", UsuarioSchema);
