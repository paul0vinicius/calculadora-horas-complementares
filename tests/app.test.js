const request = require("supertest");
const app = require("../server");

/**
 * Testing post user endpoint
 */
describe('POST /api/usuarios', function () {
  let data = {
    "nome": "Paulo Soares",
    "email": "paulo.soares@ccc.ufcg.edu.br",
    "matricula": "114110999",
    "senha": "shakepaulinha"
  }
  it('respond with 200 OK', function (done) {
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