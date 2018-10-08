const request = require("supertest");
const app = require("../server");

/**
 * Teste de cadastro
 */
describe('POST /api/usuarios', function () {
  let data = {
    "nome": "Paulo Soares",
    "email": "paulo.soares@ccc.ufcg.edu.br",
    "matricula": "114110999",
    "senha": "shakepaulinha"
  }
  it('respond with 200 OK', function (done) {
    this.timeout(3000);
    request(app)
      .post('/api/usuarios')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Teste de login
 */
describe('POST /api/usuarios/login', function () {
  let data = {
    "email": "paulo.soares@ccc.ufcg.edu.br",
    "matricula": "114110999",
    "senha": "shakepaulinha"
  }
  it('respond with 200 OK', function (done) {
    this.timeout(3000);
    request(app)
      .post('/api/usuarios/login')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});