"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const originalText = req.body.text;
    const locale = req.body.locale;
    if (originalText === "") {
      res.json({ error: "No text to translate" });
    } else if (
      originalText &&
      (locale === "american-to-british" || locale === "british-to-american")
    ) {
      let translatedText;
      res.json({ text: originalText, translation: translatedText });
    } else if (originalText && locale) {
      res.json({ error: "Invalid value for locale field" });
    } else {
      res.json({ error: "Required field(s) missing" });
    }
  });
};
