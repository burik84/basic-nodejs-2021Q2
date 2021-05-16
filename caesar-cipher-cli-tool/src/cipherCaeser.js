const cipherCaeser = (string, shift) => {
  const NUMBER_OF_LETTERS = 26;
  const LETTER_LOWERCASE_MIN = 97;
  const LETTER_LOWERCASE_MAX = 122;
  const LETTER_UPPERCASE_MIN = 65;
  const LETTER_UPPERCASE_MAX = 90;
  const regexEnglishLetter = /[A-Za-z]/m;
  let output = '';

  shift = shift % NUMBER_OF_LETTERS === 0 ? shift : shift % NUMBER_OF_LETTERS;
  shift = shift < 0 ? shift + NUMBER_OF_LETTERS : shift;

  string.split('').forEach((letter) => {
    const code = letter.charCodeAt();
    if (regexEnglishLetter.test(letter)) {
      let newCode;
      if (code >= LETTER_LOWERCASE_MIN && code <= LETTER_LOWERCASE_MAX) {
        const calc = code - LETTER_LOWERCASE_MIN + shift;
        newCode = (calc % NUMBER_OF_LETTERS) + LETTER_LOWERCASE_MIN;
      } else if (code >= LETTER_UPPERCASE_MIN && code <= LETTER_UPPERCASE_MAX) {
        const calc = code - LETTER_UPPERCASE_MIN + shift;
        newCode = (calc % NUMBER_OF_LETTERS) + LETTER_UPPERCASE_MIN;
      }
      output += String.fromCharCode(newCode);
    } else {
      output += letter;
    }
  });

  return output;
};

module.exports = {
  cipherCaeser,
};
