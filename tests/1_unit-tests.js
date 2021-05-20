const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  test("Translate Mangoes are my favorite fruit. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("Mangoes are my favorite fruit."),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate I ate yogurt for breakfast. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("I ate yogurt for breakfast."),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });
  test("Translate We had a party at my friend's condo. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("We had a party at my friend's condo."),
      'We had a party at my friend\'s <span class="highlight">flat</span>.'
    );
  });
  test("Translate Can you toss this in the trashcan for me? to British English", function () {
    assert.strictEqual(
      translator.translateToBritish(
        "Can you toss this in the trashcan for me?"
      ),
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
  });
  test("Translate The parking lot was full. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("The parking lot was full."),
      'The <span class="highlight">car park</span> was full.'
    );
  });
  test("Translate Like a high tech Rube Goldberg machine. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("Like a high tech Rube Goldberg machine."),
      "Like a high tech Rube Goldberg machine."
    );
  });
  test("Translate To play hooky means to skip class or work. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish(
        "To play hooky means to skip class or work."
      ),
      'To <span class="highlight">bunk off</span> means to skip class or work.'
    );
  });
  test("Translate No Mr. Bond, I expect you to die. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("No Mr. Bond, I expect you to die."),
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
  });
  test("Translate Dr. Grosh will see you now. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("Dr. Grosh will see you now."),
      '<span class="highlight">Dr</span> Grosh will see you now.'
    );
  });
  test("Translate Lunch is at 12:15 today. to British English", function () {
    assert.strictEqual(
      translator.translateToBritish("Lunch is at 12:15 today."),
      'Lunch is at <span class="highlight">12.15</span> today.'
    );
  });
  test("Translate We watched the footie match for a while. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "We watched the footie match for a while."
      ),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });
  test("Translate Paracetamol takes up to an hour to work. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "paracetamol takes up to an hour to work."
      ),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
  });
  test("Translate First, caramelise the onions. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican("First, caramelise the onions."),
      'First, <span class="highlight">caramelize</span> the onions.'
    );
  });
  test("Translate I spent the bank holiday at the funfair. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "I spent the bank holiday at the funfair."
      ),
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
    );
  });
  test("Translate I had a bicky then went to the chippy. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican("I had a bicky then went to the chippy."),
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
    );
  });
  test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "I've just got bits and bobs in my bum bag."
      ),
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
    );
  });
  test("Translate The car boot sale at Boxted Airfield was called off. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "The car boot sale at Boxted Airfield was called off."
      ),
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
    );
  });
  test("Translate Have you met Mrs Kalyani? to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican("Have you met Mrs Kalyani?"),
      'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    );
  });
  test("Translate Prof Joyner of King's College, London. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican("Prof Joyner of King's College, London."),
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    );
  });
  test("Translate Tea time is usually around 4 or 4.30. to American English", function () {
    assert.strictEqual(
      translator.translateToAmerican("Tea time is usually around 4 or 4.30."),
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
    );
  });
  test("Highlight translation in Mangoes are my favorite fruit.", function () {
    assert.strictEqual(
      translator.translateToBritish("Mangoes are my favorite fruit."),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Highlight translation in I ate yogurt for breakfast", function () {
    assert.strictEqual(
      translator.translateToBritish("I ate yogurt for breakfast."),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });
  test("Highlight translation in We watched the footie match for a while.", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "We watched the footie match for a while."
      ),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });
  test("Highlight translation in Paracetamol takes up to an hour to work.", function () {
    assert.strictEqual(
      translator.translateToAmerican(
        "paracetamol takes up to an hour to work."
      ),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
  });
});
