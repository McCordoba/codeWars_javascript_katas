// Code wars
//// Replace With Alphabet Position ////
/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/
let phrase = "The sunset sets at twelve o' clock.";
const regex = /[^\w]/g;

/* Test 
let lowerCase = phrase.toLowerCase();
let onlyLetters = lowerCase.replaceAll(regex, "");
let splitLetters = onlyLetters.split("");
console.log(splitLetters); */

let splitLetters = phrase.toLowerCase().replaceAll(regex, "").split("");
console.log(splitLetters);

function alphabetLetters(letter) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return alphabet[letter];
}

function alphabetPosition(text) {
  const regex = /[^\w]|[\d_]/g;
  let splitLetters = text.toLowerCase().replaceAll(regex, "").split("");
  const conversion = splitLetters.map(alphabetLetters);

  return conversion.join(" ").toString();
}

const phrase2 = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(phrase2));
