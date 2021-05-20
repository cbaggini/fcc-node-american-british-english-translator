const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  translateToBritish(originalText) {
    let translatedText = originalText;
    Object.keys(americanOnly).forEach((el) => {
      const regEl = new RegExp(`(?<!-)\\b${el}\\b`, "gi");
      if (translatedText.match(regEl)) {
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${americanOnly[el]}</span>`
        );
      }
    });
    Object.keys(americanToBritishTitles).forEach((el) => {
      if (translatedText.includes(el + " ")) {
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${americanToBritishTitles[el]}</span>`
        );
      }
    });

    Object.keys(americanToBritishSpelling).forEach((el) => {
      const regEl = new RegExp(`(?<!-)\\b${el}\\b`, "gi");
      if (translatedText.match(regEl)) {
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${americanToBritishSpelling[el]}</span>`
        );
      }
    });

    const timeRegex = /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/g;
    const times = translatedText.match(timeRegex);
    if (times) {
      times.forEach((el) => {
        let replacementTime = el.replace(":", ".");
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${replacementTime}</span>`
        );
      });
    }

    return translatedText;
  }
  translateToAmerican(originalText) {
    let translatedText = originalText;
    Object.keys(britishOnly).forEach((el) => {
      const regEl = new RegExp(`(?<!-)\\b${el}\\b`, "gi");
      if (translatedText.match(regEl)) {
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${britishOnly[el]}</span>`
        );
      }
    });
    Object.values(americanToBritishTitles).forEach((el) => {
      if (translatedText.includes(el + " ")) {
        let replacement = this.getKeyByValue(americanToBritishTitles, el);
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${replacement}</span>`
        );
      }
    });
    Object.values(americanToBritishSpelling).forEach((el) => {
      const regEl = new RegExp(`(?<!-)\\b${el}\\b`, "gi");
      if (translatedText.match(regEl)) {
        let replacement = this.getKeyByValue(americanToBritishSpelling, el);
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${replacement}</span>`
        );
      }
    });
    const timeRegex = /\d{1,2}[\.]{1}\d{1,2}/g;
    const times = translatedText.match(timeRegex);
    if (times) {
      times.forEach((el) => {
        let replacementTime = el.replace(".", ":");
        translatedText = translatedText.replace(
          el,
          `<span class="highlight">${replacementTime}</span>`
        );
      });
    }

    return translatedText;
  }
}

module.exports = Translator;
