const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

//missing: times and spans
class Translator {
  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  translateToBritish(originalText) {
    let translatedText = originalText;
    Object.keys(americanOnly).forEach((el) => {
      if (translatedText.includes(el)) {
        translatedText.replace(el, americanOnly[el]);
      }
    });
    Object.keys(americanToBritishTitles).forEach((el) => {
      if (translatedText.includes(el + " ")) {
        translatedText.replace(el, americanToBritishTitles[el]);
      }
    });
    Object.keys(americanToBritishSpelling).forEach((el) => {
      if (translatedText.includes(el)) {
        translatedText.replace(el, americanToBritishSpelling[el]);
      }
    });

    return translatedText;
  }
  translateToAmerican(originalText) {
    let translatedText = originalText;
    Object.keys(britishOnly).forEach((el) => {
      if (translatedText.includes(el)) {
        translatedText.replace(el, britishOnly[el]);
      }
    });
    Object.values(americanToBritishTitles).forEach((el) => {
      if (translatedText.includes(el + " ")) {
        let replacement = this.getKeyByValue(americanToBritishTitles, el);
        translatedText.replace(el, replacement);
      }
    });
    Object.values(americanToBritishSpelling).forEach((el) => {
      if (translatedText.includes(el)) {
        let replacement = this.getKeyByValue(americanToBritishSpelling, el);
        translatedText.replace(el, replacement);
      }
    });

    return translatedText;
  }
}

module.exports = Translator;
