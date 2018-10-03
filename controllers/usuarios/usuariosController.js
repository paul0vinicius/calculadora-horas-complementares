const Usuario = require("../../models/Usuario");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const SALT_SIZE = 10;
const BAD_REQUEST = 400;

module.exports = {
  cadastra(req, res) {
    Usuario.findOne({ email: req.body.email }).then(usuario => {
      if (usuario) {
        return res
          .status(BAD_REQUEST)
          .json({ "errors.email": "Email já cadastrado!" });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200", // Size
          r: "pg", // Rating
          d: "mm" // Default
        });

        // Create User
        const novoUsuario = new Usuario({
          nome: req.body.nome,
          email: req.body.email,
          matricula: req.body.matricula,
          avatar,
          senha: req.body.senha
        });

        // Encrypt password
        bcrypt.genSalt(SALT_SIZE, (err, salt) => {
          bcrypt.hash(novoUsuario.senha, salt, (err, hash) => {
            if (err) throw err;
            novoUsuario.senha = hash;
            novoUsuario
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  },
  login(req, res) {},
  getUsuarioAtual(req, res) {}
};
