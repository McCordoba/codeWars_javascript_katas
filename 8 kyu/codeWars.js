// Code wars
//////Even or Odd//////
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(5));

//////Count by X//////
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.
*/
function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * 1);
  }

  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));

//////Sum of positive//////
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  let sum = arr.reduce((accumulator, value) => {
    if (value > 0) {
      return accumulator + value;
    }
    return accumulator;
  }, 0);

  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(positiveSum(arr));

//////Return Negative//////
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

The number can be negative already, in which case no change is required.

Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/
function makeNegative(num) {
  if (num > 0) {
    num = num * -1;
  }

  return num;
}

let num = 42;
console.log(makeNegative(num));

//////Reversed Strings//////
/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function solution(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

let string = "gato";
console.log(solution(string));

////////////
// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";

  // if (bool === true) {
  //   return "Yes";
  // } else {
  //   return "No";
  // }
}

let afirmative = true;
let negative = false;
console.log(boolToWord(true));
console.log(boolToWord(negative));

//////Remove String Spaces//////
function noSpace(x) {
  return x.split(" ").join("");
}

let frase = "8 j 8   mBliB8g  imjB8B8  jl  B";
console.log(noSpace(frase));

//////Counting sheep...//////
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Hint: Don't forget to check for bad values like null/undefined
*/
const sheep = [undefined, null, false, true];
console.log(sheep.length);

/*
function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count = count + 1;
    }
  }
  return count;
}*/

function countSheeps(sheep) {
  return sheep.reduce((accumulator, value) => {
    if (value === true) {
      return accumulator + value;
    }
    return accumulator;
  }, 0);
}
console.log(countSheeps(sheep));

//////Lost Without a Map//////
// Given an array of integers, return a new array with each value doubled.
const number = [1, 2, 3];

function maps(x) {
  return x.map((number) => number * 2);
}

console.log(maps(number));

//////A Needle in the Haystack//////
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/
const haystack = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];

function findNeedle(haystack) {
  return "found the needle at position" + haystack.indexOf("needle");
}

console.log(findNeedle(haystack));

//////Are You Playing Banjo?//////
/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
*/
function areYouPlayingBanjo(name) {
  // Implement me :3
  if (name[0] == "R" || name[0] == "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("rolf"));

//////Keep Hydrated!//////
/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/
function litres(time) {
  const waterPerHour = 0.5;

  let totalWater = time * waterPerHour;
  console.log(totalWater);

  // return 0;
  return Math.floor(totalWater);
}

console.log(litres(12.3));
console.log(litres(1));

////Find the smallest integer in the array////
/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));

////Opposites Attract////
/* 
- Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

- Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

function lovefunc(flower1, flower2) {
  // moment of truth
  let petals = 0;
  if (
    (flower1 % 2 === 0 && flower2 % 2 === 1) ||
    (flower1 % 2 === 1 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// Other solution
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 == 1;
}

////Basic Mathematical Operations////
function basicOp(operation, value1, value2) {
  for (let operations of operation) {
    if (operations.includes("+")) {
      return value1 + value2;
    } else if (operations.includes("-")) {
      return value1 - value2;
    } else if (operations.includes("*")) {
      return value1 * value2;
    } else if (operations.includes("/")) {
      return value1 / value2;
    } else {
      return 0;
    }
  }
}

// Other solution
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

/////Opposite number/////
/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:
1: -1
14: -14
-34: 34
*/
function opposite(number) {
  return -number;
}

/////Remove First and Last Character/////
/* 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str) {
  //You got this! <3
  return str.slice(1, -1); // argument -1 is the same as 'str.length -1'
}

console.log(removeChar("eloquent"));

/////Remove First and Last Character/////
/* 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, "*"));

/////Is he gonna survive?/////
/* 
A hero is on his way to a castle to complete his mission but the castle is surrounded by powerful dragons! If each dragon takes 2 bullets to be defeated, does our hero have enough ammunition?

Return true if he has enough bullets to survive.
*/

function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5));
console.log(hero(7, 4));

/////Abbreviate a Two Word Name/////
/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name) {
  let splitName = name.split(" ");
  let firstName = splitName[0].substring(0, 1);
  let lastName = splitName[1].substring(0, 1);

  return firstName.toUpperCase() + "." + lastName.toUpperCase();
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("David Mendieta"));

/////Get the mean of an array/////
/* 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/
function getAverage(marks) {
  let arrLenght = marks.length;

  let average = marks.reduce((accumulator, value) => {
    return accumulator + value / arrLenght;
  }, 0);

  return Math.trunc(average);
}

console.log(getAverage([2, 2, 2, 2]));

/////Reduce but Grow/////
/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function grow(x) {
  return x.reduce((accumulator, value) => {
    return accumulator * value;
  }, 1);
}

console.log(grow([1, 2, 3]));

/////Sentence Smash/////
/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world", "this", "is", "great"]));

/////Find Maximum and Minimum Values of a List/////
/* 
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes: You may consider that there will not be any empty arrays/vectors.
*/
function getMinMax(list) {
  // Create an object to store the minimum and maximum values
  const minmax = {};

  // Sort the array in ascending order
  list.sort((minValue, maxValue) => minValue - maxValue);

  // Store the minimum element as the first element of the sorted array
  minmax.min = list[0];

  // Store the maximum element as the last element of the sorted array
  minmax.max = list[list.length - 1];

  // Return the object containing the minimum and maximum values
  return minmax;
}

// Given array
const list = [1000, 11, 445, 1, 330, 3000];

// Call the getMinMax function to find the minimum and maximum values
const minmax = getMinMax(list);

// Print the minimum element
console.log("Minimum element is " + minmax.min);
// Print the maximum element
console.log("Maximum element is " + minmax.max);

console.log(getMinMax([-52, 56, 30, 29, -54, 0, -110]));

// Other solution (following the started code provided)
var min = function (list) {
  // Initialize minValue with the first element of the list
  let minValue = list[0];

  // Iterate through the list starting from the second element
  for (let i = 1; i < list.length; i++) {
    // Update minValue if the current element is smaller
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }

  return minValue;
};

var max = function (list) {
  // Initialize maxValue with the first element of the list
  let maxValue = list[0];

  // Iterate through the list starting from the second element
  for (let i = 1; i < list.length; i++) {
    // Update maxValue if the current element is larger
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

console.log(min([4, 6, 2, 1, 9, 63, -134, 566])); // Output: -134
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // Output: 566

// Other solution using Spread syntax(...)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
/*
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([4, 6, 2, 1, 9, 63, -134, 566])); // Output: -134
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // Output: 566 */

/////Find Maximum and Minimum Values of a List/////
/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] 
*/
const reverseSeq = (n) => {
  const result = [];

  // Loop from n down to 1 and push each value to the result array
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }

  return result;
};

console.log(reverseSeq(5));

/////Invert values/////
/* 
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
  return array.map((value) => value * -1);
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));

/////Is n divisible by x and y?/////
/* 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n = 3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n = 12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n = 12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(12, 3, 4));
console.log(isDivisible(3, 3, 4));
