const app = require("../server");
const request = require("supertest");

request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
