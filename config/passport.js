const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const logger = require("heroku-logger");
const Usuario = mongoose.model("usuarios");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Usuario.findById(jwt_payload.id)
        .then(usuario => {
          if (usuario) {
            return done(null, usuario);
          }

          return done(null, false);
        })
        .catch(err => logger.error(err));
    })
  );
};
