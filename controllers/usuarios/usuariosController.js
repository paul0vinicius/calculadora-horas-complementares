const Usuario = require("../../models/Usuario");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

module.exports = {
  cadastra(req, res) {
    Usuario.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ "errors.email": "Email já cadastrado!" });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200", // Size
          r: "pg", // Rating
          d: "mm" // Default
        });

        // Create User
        const newUser = new User({
          nome: req.body.nome,
          email: req.body.email,
          avatar,
          senha: req.body.senha
        });

        // Encrypt password
        bcrypt.genSalt(SALT_SIZE, (err, salt) => {
          bcrypt.hash(newUser.senha, salt, (err, hash) => {
            if (err) throw err;
            newUser.senha = hash;
            newUser
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
