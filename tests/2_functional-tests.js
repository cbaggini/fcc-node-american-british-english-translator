const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({
        text: "I had a bicky then went to the chippy.",
        locale: "british-to-american",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "translation");
        assert.equal(
          res.body.translation,
          'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
        );
        done();
      });
  });
  test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({
        text: "I had a bicky then went to the chippy.",
        locale: "ha",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });
  test("Translation with missing text field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({
        locale: "british-to-american",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({
        text: "I had a bicky then went to the chippy.",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("Translation with empty text: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({
        text: "",
        locale: "british-to-american",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });
  test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({
        text: "Dr. Grosh will see you now.",
        locale: "british-to-american",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "translation");
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});

//
//
//
