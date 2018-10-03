const Usuario = require("../../models/Usuario");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const logger = require("heroku-logger");

const SALT_SIZE = 10;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

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
  login(req, res) {
    const email = req.body.email;
    const matricula = req.body.matricula;
    const senha = req.body.senha;

    console.log(email);
    console.log(matricula);
    console.log(senha);

    Usuario.findOne({ $or: [{ email: email }, { matricula: matricula }] })
      .then(usuario => {
        if (!usuario) {
          return res
            .status(NOT_FOUND)
            .json({ "errors.email": "User not found" });
        }

        // Check password
        bcrypt.compare(senha, usuario.senha).then(isMatch => {
          if (isMatch) {
            // User matched

            logger.info("LOGOU");
            const payload = {
              id: usuario.id,
              nome: usuario.nome,
              avatar: usuario.avatar,
              matricula: usuario.matricula
            }; // Create JWT Payload

            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            return res
              .status(BAD_REQUEST)
              .json({ "errors.password": "Password incorrect" });
          }
        });
      })
      .catch(err => {
        return res.status(BAD_REQUEST).json(err);
      });
  },
  getUsuarioAtual(req, res) {
    res.json({
      id: req.user.id,
      nome: req.user.nome,
      email: req.user.email,
      matricula: req.user.matricula
    });
  }
};
