// Code wars - 7kyu
//////Descending Order//////
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(123456789));

// Test
let num = 123456789;
let string1 = num.toString();
let splitNumbers = string1.split("");
let orderNum = splitNumbers.sort();
let reverse = orderNum.reverse();
let join = reverse.join("");

console.log(join);

//////Odd or Even?//////
/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/
let array2 = [0, 1, 4];
let array3 = [];

function oddOrEven(array) {
  if (array.length > 0) {
    const sum = array.reduce((accumulator, value) => accumulator + value);
    console.log(sum);
    return sum % 2 === 0 ? "even" : "odd";
  } else {
    return "even";
  }
}

console.log(oddOrEven(array2));
console.log(oddOrEven(array3));

//////Vowel Count//////
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

let word = "Cojones";
console.log(getCount(word));

/////Number of People in the Bus/////
/* 
- A bus makes several stops in the city, picking up and dropping off passengers at each stop.

- You are given a list of pairs, where the first number represents passengers boarding at a stop, and the second number represents passengers disembarking at that stop.

- Your task is to find the number of passengers remaining on the bus after the last stop.

- Keep in mind that the bus starts empty at the first stop and the result cannot be negative due to test case constraints. 
*/
function countPassengers(busStops) {
  let people = 0;

  for (let i = 0; i < busStops.length; i++) {
    // Al acumulador 'people' se le añade el la resta del numero de personas en cada bus
    // busStops[i][0] es el primer valor de array (los pasajeros en el bus)
    // busStops[i][1] es el primer valor de array (los pasajeros que bajan del bus)
    people += busStops[i][0] - busStops[i][1];
  }
  return people;
}

// Solution using reduce
/* function countPassengers(busStops) {
  return busStops.reduce((sum, [intoTheBus, outOfThebus]) => {
    return sum + intoTheBus - outOfThebus;
  }, 0);
} */

let busStops = [
  [10, 0],
  [3, 5],
  [5, 8],
];
console.log(countPassengers(busStops));

/////Highest and Lowest/////
/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first. 
*/
function highAndLow(numbers) {
  let numArray = numbers.split(" ").map(Number);
  console.log(numArray);
  let highest = numArray[0];
  let lowest = numArray[0];

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > highest) {
      highest = numArray[i];
    }
    if (numArray[i] < lowest) {
      lowest = numArray[i];
    }
  }
  return [highest, lowest];
}

let highAndLowStr = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
console.log(highAndLow(highAndLowStr));

/////Get the Middle Character/////
/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/
function getMiddle(s) {
  let position;
  let length;

  if (s.length % 2 == 1) {
    position = s.length / 2;
    // Como es impar se extrae un solo caracter
    length = 1;
  } else {
    position = s.length / 2 - 1;
    // Como es par se extraen dos caracteres
    length = 2;
  }
  return s.substring(position, position + length);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));

/////Disemvowel Trolls/////
/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
function disemvowel(str) {
  let regex = /[aeiuoAEIOU]/g;
  return str.replaceAll(regex, "");
}

console.log(disemvowel("This website is for losers LOL!"));

/////Friend or Foe?/////
/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

Note: keep the original order of the names in the output.
*/
function friend(friends) {
  return friends.filter((name) => name.length == 4);
}
console.log(friend(["Ryan", "Kieran", "Mark"]));

/////Shortest Word/////
/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s) {
  let words = s.split(" ");

  const shortest = words.reduce((shortestWord, currentWord) => {
    if (currentWord.length < shortestWord.length) {
      return currentWord;
    } else {
      return shortestWord;
    }
  }, words[0]);

  return shortest.length;
}

let frase4 =
  "turns out random test cases are easier than writing out basic ones";

let array = frase4.split(" ");

console.log(array);
console.log(array[0].length);

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);

/////Regex validate PIN code/////
/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);

  //return true or false
}
const pin = "123456";
let regex2 = /^([0-9]{4}|[0-9]{6})$/g;
let isPinValid2 = regex2.test(pin);
//let regex = /^(\d{4}|\d{6})$/;
//let isPinValid = regex.test(pin);
console.log(isPinValid2);
//console.log(isPinValid);
console.log(validatePIN("2345"));
console.log(validatePIN("2.45"));

/////Even or Odd - Which is Greater?/////
/* 
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let arrayStr = str.split("");

  // Number(value) se utiliza para convertir la cadena a un número antes de sumarlo al acumulador.
  const sumEven = arrayStr.reduce((accumulator, value) => {
    if (value % 2 === 0) {
      return accumulator + Number(value);
    }
    return accumulator;
  }, 0);
  // Poner simplemente 0 es lo mismo que, const initialValue = 0;

  const sumOdd = arrayStr.reduce((accumulator, value) => {
    if (value % 2 === 1) {
      return accumulator + Number(value);
    }
    return accumulator;
  }, 0);

  if (sumEven > sumOdd) {
    return "Even is greater than Odd";
  } else if (sumOdd > sumEven) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}

console.log(evenOrOdd("12"));
console.log(evenOrOdd("33442"));
console.log(evenOrOdd("112"));

/////Suzuki needs help lining up his students!/////
/* 
You will be given a string of student names. Sort them and return a list of names in descending order.

Here is an example input:
string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'

Here is an example return from your function:
 lst = ['Takehiko',
        'Takayuki',
        'Takahiro',
        'Takeshi',
        'Takeshi',
        'Takashi',
        'Tadashi',
        'Takeo',
        'Takao']
*/

function lineupStudents(students) {
  let studentsArray = students.split(" ");
  let sortStudents = studentsArray.sort(
    (a, b) => b.length - a.length || b.localeCompare(a)
  );
  return sortStudents;
}

// Otra solucion
function lineupStudents(students) {
  let arr = students.split(" ");
  return arr
    .sort()
    .reverse()
    .sort((a, b) => b.length - a.length);
}

let students =
  "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

console.log(lineupStudents(students));

let studentsArray = students.split(" ");
// sort ascending - shorter items first
let sortAscending = studentsArray.sort((a, b) => a.length - b.length);
//console.log(sortAscending);

// sort descending - longer items first
let sortDescending = studentsArray.sort((a, b) => b.length - a.length);
//console.log(sortDescending);

// sort by length
// if equal then sort by dictionary order
let sortStudents = studentsArray.sort(
  (a, b) => b.length - a.length || b.localeCompare(a)
);
// console.log(sortStudents);
// console.log(studentsArray.sort().reverse());

/////Isograms/////
/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
function isIsogram(str) {
  // Convert the string to lowercase for case-insensitivity
  str = str.toLowerCase();

  // Iterate through each letter in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current letter repeats in the rest of the string
    if (str.indexOf(str[i]) !== i) {
      return false; // If repeated, it's not an isogram
    }
  }

  return true; // If no repetitions, it's an isogram
}

console.log(isIsogram("Dermatoglyphics"));

/////Mumbling/////
/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
  let splitWord = s.split("");

  // Use map to create an array of repeated letters based on index
  let repeatWord = splitWord.map(
    (letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)
  );

  // Join the array with hyphens to create the final result
  return repeatWord.join("-");
}

console.log(accum("ZpglnRxqenU"));

/////String ends with?/////
/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
