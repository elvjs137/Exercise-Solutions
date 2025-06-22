// Before anything else, we need a function that allows us to compare arrays so we can write better tests!

process.stdout.write("*8·01.\n");
/*
*8·01. Create a function called 'eqArrays' that takes two arrays and returns true if they are equal, otherwise false. Two arrays are considered equal if they are the same length and every element is equal (in the same order).

Tip: The every() method can use the array indexes as a second argument of the callback function. See the documentation for more detail:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

The following lines should help test if your function works correctly. They should print true.
*/

const eqArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((x, i) => {
      const y = arr2[i];
      if (Array.isArray(x) && Array.isArray(y)) {
        return eqArrays(x, y);
      } else {
        return x === y;
      }
    })
  );
};

console.log("eqArrays tests");
console.log(eqArrays([], []));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(!eqArrays([1, 2, 3], [1, 3, 2]));
console.log(!eqArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(!eqArrays([1, 2, 3, 4], [1, 2, 3]));
console.log(eqArrays(["Alice", "Bob", "Carol"], ["Alice", "Bob", "Carol"]));
console.log(eqArrays([1, 2, 3, [4, 5, 6]], [1, 2, 3, [4, 5, 6]]));
console.log(!eqArrays([1, 2, 3, [4, 5, 6]], [1, 2, 3, [4, 6, 5]]));

// Practice using the some() method

process.stdout.write("\n*8·1.\n");
/*
*8·1. Create a function called 'anyOdd' that takes an array of numbers and returns true if any of them are odd, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const anyOdd = (arr) => arr.some((x) => x % 2 !== 0);

console.log("anyOdd tests");
console.log(anyOdd([1, 2, 4, 6]));
console.log(anyOdd([2, 4, 6, 7]));
console.log(!anyOdd([2, 4, 6, 8]));

process.stdout.write("\n*8·11.\n");
/*
*8·11. Create a function called 'anyNegative' that takes an array of numbers and returns true if any of them are negative, otherwise false.

Remember to write tests!
*/

const anyNegative = (arr) => arr.some((x) => x < 0);

console.log(anyNegative([2, 5, 6, 9, 0, -5]) === true);
console.log(anyNegative([2, 5, 6, 9, 0]) === false);
console.log(anyNegative([2, 5, 6, -9]) === true);

process.stdout.write("\n*8·12.\n");
/*
 *8·12. Create a function called 'anyZs' that takes an array of words (strings) and returns true if the letter "z" (lowercase or uppercase) is found in any of the words, otherwise false.
 */
const anyZs = (arr) => arr.some((x) => x.toLowerCase().includes("z"));

console.log(anyZs(["hehe", "zeee", "kk"]) === true);
console.log(anyZs(["aa", "bb", "cc"]) === false);

process.stdout.write("\n*8·13.\n");
/*
 *8·13. Create a function called 'overTheLimit' that takes a limit (number) and an array of account balances (numbers). It should return true if any of the account balances is greater than the given limit, otherwise false.
 */

const overTheLimit = (n, arr) => {
  return arr.some((x) => x > n);
};

console.log(overTheLimit(9, [4, 2, 3, 5]) === false);
console.log(overTheLimit(10, [4, 2, 3, 7]) === false);

process.stdout.write("\n*8·14.\n");
/*
*8·14. Create a function called 'addNewLetterName' that takes a new name (string) and an array of names (strings). The goal is to add the new name to the names if there isn't already a name that starts with the same letter. The function should return a new array of names that contains the original names plus the new one if it starts with a unique letter, otherwise return the original names.

The following lines should help test if your function works correctly. They should print true.
*/

const addNewLetterName = (newName, names) => {
  // check if any of the name in names starts with first letter of newName
  // add newName to array and return that, else return original array
  return names.some((x) => x.startsWith(newName[0]))
    ? [...names]
    : [...names, newName];
};

console.log("addNewLetterName tests");
console.log(
  eqArrays(addNewLetterName("Bob", ["Alice", "Carol", "Dave"]), [
    "Alice",
    "Carol",
    "Dave",
    "Bob",
  ])
);
console.log(
  eqArrays(addNewLetterName("Bob", ["Alice", "Beatrice", "Carol", "Dave"]), [
    "Alice",
    "Beatrice",
    "Carol",
    "Dave",
  ])
);

// Practice using the every() method

process.stdout.write("\n*8·2.\n");
/*
 *8·2. Create a function called 'irishGroup' that takes an array of surnames (strings) and returns true if they all begin with "Mc", otherwise false.
 */

const irishGroup = (surnames) =>
  surnames.every((surname) => surname.startsWith("Mc"));

console.log(irishGroup(["McDonald", "McKenzie"]) === true);
console.log(irishGroup(["Donald", "Kenzie"]) === false);

process.stdout.write("\n*8·21.\n");
/*
 *8·21. Create a function called 'allWhole' that takes an array of numbers and returns true if they are all whole numbers, otherwise false. Whole numbers are the numbers starting from 0 and counting up forever: 0, 1, 2, 3, 4, 5, ... . Negative numbers and decimals (e.g. 1.5) are not whole numbers.
 */

const allWhole = (numbers) =>
  numbers.every((number) => number > 0 && number % 1 === 0);

console.log(allWhole([2, 5, 6, 12, 5]) === true);
console.log(allWhole([2, 5.2, 6, 12, 5]) === false);

process.stdout.write("\n*8·22.\n");
/*
*8·22. Create a function called 'britishGang' that takes an array of surnames (strings) and returns true if they are all likely British. A surname that is likely British starts with "Mac" or "Mc", or is any of the top 10 British surnames: Smith, Jones, Williams, Taylor, Davies, Brown, Wilson, Evans, Thomas, Johnson.

Tip: Consider making a helper function 'isBritish' to check if a single surname is British.
*/

const top10 = [
  "Smith",
  "Jones",
  "Williams",
  "Taylor",
  "Davies",
  "Brown",
  "Wilson",
  "Evans",
  "Thomas",
  "Johnson",
];

const britishGang = (surnames) =>
  surnames.every(
    (surname) =>
      surname.startsWith("Mac") ||
      surname.startsWith("Mc") ||
      top10.includes(surname)
  );

console.log(britishGang(["Taylor", "Smith", "Williams", "Davies", "McKenzie"]));
console.log(britishGang(["Taylor", "Smith", "Williams"]));

// Practice using the map() method

process.stdout.write("\n*8·3.\n");
/*
*8·3. Create a function called 'convertMoney' to convert an array of values in dollars to an array of values in cents.

The following lines should help test if your function works correctly. They should print true.
*/

const convertMoney = (dollars) => dollars.map((unit) => unit * 100);

console.log("convertMoney tests");
console.log(eqArrays(convertMoney([2, 3.5, 10]), [200, 350, 1000]));
console.log(eqArrays(convertMoney([0, 0.25, 99.99]), [0, 25, 9999]));

process.stdout.write("\n*8·31.\n");
/*
*8·31. Create a function called 'convertTemperatures' that takes an array of temperatures (numbers) and either 'FtoC' or 'CtoF', and returns an array of the converted temperatures.

The following lines should help test if your function works correctly. They should print true.
*/

const convertTemperatures = (temperatures, f) => {
  if (f === "FtoC") {
    return temperatures.map((temperature) => ((temperature - 32) * 5) / 9);
  } else if (f === "CtoF") {
    return temperatures.map((temperature) => (temperature * 9) / 5 + 32);
  }
};

console.log("convertTemperatures tests");
console.log(eqArrays(convertTemperatures([32, 41], "FtoC"), [0, 5]));
console.log(eqArrays(convertTemperatures([0, -10], "CtoF"), [32, 14]));

process.stdout.write("\n*8·32.\n");
/*
*8·32. Create a function called 'bonusSalaries' that takes an array of salary-bonus pairs and returns the new salaries. Each salary-bonus pair is an array with a salary and a boolean that says whether or not the salary receives a bonus. A bonus salary is the salary multiplied by 10.

The following lines should help test if your function works correctly. They should print true.
 */

const bonusSalaries = (salaryBonusPair) => {
  return salaryBonusPair.map(([salary, hasBonus]) =>
    hasBonus ? salary * 10 : salary
  );
};

console.log("bonusSalaries tests");
console.log(
  eqArrays(
    bonusSalaries([
      [123, false],
      [123, true],
    ]),
    [123, 1230]
  )
);
console.log(
  eqArrays(
    bonusSalaries([
      [10000, true],
      [10000, false],
      [30000, true],
      [100000, false],
      [64000.99, true],
    ]),
    [100000, 10000, 300000, 100000, 640009.9]
  )
);

process.stdout.write("\n*8·33.\n");
/*
*8·33. Create a function called 'rpsResults' that takes an array of "Rock, Paper, Scissors" games and returns an array of results. Each game is an array of two hands. Each hand is either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, the result is 1. If the first hand loses, the result is -1. In the case of a draw, the result is 0.

The following lines should help test if your function works correctly. They should print true.
*/

const rps = (player1, player2) => {
  if (player1 === player2) {
    return 0;
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return 1;
  } else {
    return -1;
  }
};

const rpsResults = (game) => {
  return game.map(([player1, player2]) => rps(player1, player2));
};

console.log("rpsResults tests");
console.log(
  eqArrays(
    rpsResults([
      ["rock", "scissors"],
      ["paper", "scissors"],
      ["scissors", "scissors"],
    ]),
    [1, -1, 0]
  )
);
console.log(
  eqArrays(
    rpsResults([
      ["rock", "rock"],
      ["paper", "paper"],
      ["scissors", "scissors"],
      ["scissors", "paper"],
      ["paper", "rock"],
    ]),
    [0, 0, 0, 1, 1]
  )
);

process.stdout.write("\n*8·34.\n");
/*
 *8·34. Create a function called 'makeRectangles' that takes an array of numbers and returns an array of rectangles, where a rectangle is an array of two numbers: [length, width].

The following lines should help test if your function works correctly. They should print true.
*/

const makeRectangles = (numbers) => {
  return numbers.map((number) => [number, number]);
};

console.log("makeRectangles tests");
console.log(
  eqArrays(makeRectangles([1, 2, 3, 4]), [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
  ])
);
console.log(
  eqArrays(makeRectangles([-1, 0, 99, 1000]), [
    [-1, -1],
    [0, 0],
    [99, 99],
    [1000, 1000],
  ])
);

// Practice using the forEach() method

process.stdout.write("\n*8·4.\n");
/*
 *8·4. Say hello to each of the names in the following array (e.g. Hello, Alice!).
 */
const names1 = ["Alice", "Bob", "Carol", "Dave", "Eve"];

names1.forEach((name) => console.log(`Hello, ${name}`));

process.stdout.write("\n*8·41.\n");
/*
 *8·41. Greet each person in their own language (e.g. Bonjour, Alice!).
 */
const people1 = [
  ["Alice", "French"],
  ["Bob", "English"],
  ["Carol", "German"],
];

const sayHelloLanguage = (language) => {
  if (language === "English") {
    return "Hello!";
  } else if (language === "French") {
    return "Bonjour!";
  } else if (language === "German") {
    return "Guten Tag!";
  } else {
    return "Unknown language";
  }
};

people1.forEach(([name, language]) =>
  console.log(sayHelloLanguage(language), name)
);

process.stdout.write("\n*8·42.\n");
/*
 *8·42. Create a function called 'manyLovers' that takes an array of couples and prints that the first names love the second names (e.g. Alice loves Bob).
 */

const manyLovers = (lovers) =>
  lovers.forEach(([person1, person2]) =>
    console.log(`${person1} loves ${person2}`)
  );

manyLovers([
  ["A", "B"],
  ["C", "D"],
  ["E", "F"],
]);

// Practice using the filter() method

process.stdout.write("\n*8·5.\n");
/*
 *8·5. Create a function called 'wholeNumbers' that takes an array of numbers and returns a new array containing only the numbers that are whole. Whole numbers are the numbers starting from 0 and counting up forever: 0, 1, 2, 3, 4, 5, ... . Negative numbers and decimals (e.g. 1.5) are not whole numbers.
 */

const wholeNumbers = (numbers) =>
  numbers.filter((number) => number > 0 && number % 1 === 0);

console.log(wholeNumbers([2, 5, 0, -1, 5, 6.5]));

process.stdout.write("\n*8·51.\n");
/*
 *8·51. Create a function called 'countNulls' that takes an array and returns how many null values are in it.
 */

const countNulls = (arr) => arr.filter((x) => x === null).length;

console.log(countNulls([null, 2, 6, null, 5, 5, null]));

process.stdout.write("\n*8·52.\n");
/*
 *8·52. Create a function called 'mostlyScottish' that takes an array of surnames (strings) and returns true if more than half of them are Scottish, otherwise false. We'll say a Scottish surname is one that starts with "Mac".
 */

const mostlyScottish = (surnames) =>
  surnames.filter((surname) => surname.startsWith("Mac")).length >
  surnames.length / 2;

console.log(
  mostlyScottish(["Johns", "Davis", "MacKinney", "MacDonald", "MacIntyre"]) ===
    true
);
console.log(
  mostlyScottish(["Johns", "Davis", "MacDonald", "MacIntyre"]) === false
);

process.stdout.write("\n*8·53.\n");
/*
*8·53. Create a function called 'removeLetterNames' that takes a letter and an array of names (strings). It should return the names without any starting with the given letter.

The following lines should help test if your function works correctly. They should print true.
*/

const removeLetterNames = (letter, names) =>
  names.filter((name) => !name.startsWith(letter));

console.log("removeLetterNames");
console.log(
  eqArrays(
    removeLetterNames("B", ["Alice", "Bob", "Carol", "Dave", "Beatrice"]),
    ["Alice", "Carol", "Dave"]
  )
);
console.log(
  eqArrays(
    removeLetterNames("Z", ["Alice", "Bob", "Carol", "Dave", "Beatrice"]),
    ["Alice", "Bob", "Carol", "Dave", "Beatrice"]
  )
);

process.stdout.write("\n*8·54.\n");
/*
*8·54. Create a function called 'rpsPoints' that takes an array of rock-paper-scissors games and returns the number of games where the first player won.

The following lines should help test if your function works correctly. They should print true.
*/

const rpsPoints = (games) => games.filter((game) => rps(...game) === 1).length;

console.log("rpsPoints tests");
console.log(rpsPoints([["paper", "rock"]]) === 1);
console.log(
  rpsPoints([
    ["paper", "rock"],
    ["paper", "paper"],
    ["scissors", "rock"],
  ]) === 1
);
console.log(
  rpsPoints([
    ["paper", "rock"],
    ["rock", "scissors"],
    ["scissors", "paper"],
  ]) === 3
);

// Practice using the reduce() method

process.stdout.write("\n*8·6.\n");
/*
 *8·6. Create a function called 'sum' that takes an array of numbers and returns their sum, or 0 for an empty array.
 */

const sum = (numbers) => numbers.reduce((acc, x) => acc + x, 0);

console.log(sum([1, 2, 3, 4, 5, 6, 7]));
console.log(sum([]));

process.stdout.write("\n*8·601.\n");
/*
 *8·601. Create a function called 'product' that takes an array of numbers and returns their product, or 1 for an empty array.
 */

const product = (numbers) => numbers.reduce((acc, x) => acc * x, 1);

console.log(product([1, 2, 3, 4, 5, 6, 7]));
console.log(product([]));

process.stdout.write("\n*8·61.\n");
/*
*8·61. Create a function called 'duplicates' that takes an array and returns a new array containing each of the previous values twice.

The following lines should help test if your function works correctly. They should print true.
*/

const duplicates = (arr) => arr.reduce((acc, x) => [...acc, x, x], []);

console.log("duplicates tests");
console.log(eqArrays(duplicates([1, 2, 3, 4]), [1, 1, 2, 2, 3, 3, 4, 4]));
console.log(
  eqArrays(duplicates(["Alice", "Bob", "Carol"]), [
    "Alice",
    "Alice",
    "Bob",
    "Bob",
    "Carol",
    "Carol",
  ])
);

process.stdout.write("\n*8·62.\n");
/*
 *8·62. Create a function called 'maximum' that takes an array of numbers and returns the highest number.
 */

const maximum = (numbers) =>
  numbers.reduce((acc, x) => {
    if (acc > x) return acc;
    else return x;
  }, numbers[0]);

console.log(maximum([2, 800, 6, null, 9]));

process.stdout.write("\n*8·621.\n");
/*
 *8·621. Create a function called 'minimum' that takes an array of numbers and returns the lowest number.
 */

const minimum = (numbers) =>
  numbers.reduce((acc, x) => {
    if (acc < x) return acc;
    else return x;
  }, numbers[0]);

console.log(minimum([2, 4, 6, -6, 9]));

process.stdout.write("\n*8·63.\n");
/*
*8·63. Create a function called 'dropRepeats' that takes an array and returns a new array without any repeating elements.

The following lines should help test if your function works correctly. They should print true.
*/

const dropRepeats = (arr) => {
  return arr.filter((x, i) => arr.indexOf(x) === i);
};

console.log("dropRepeats tests");
console.log(eqArrays(dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]), [1, 2, 3, 4]));
console.log(eqArrays(dropRepeats([9, 8, 7, 8, 9]), [9, 8, 7]));

process.stdout.write("\n*8·64.\n");
/*
*8·64. Create a function called 'flatten' that takes a 2-dimensional array and returns a flattened (1-dimensional) array.

The following lines should help test if your function works correctly. They should print true.
*/

const flatten = (arr) => {
  return arr.reduce((acc, x) => {
    return [...acc, ...x];
  }, []);
};

console.log("flatten tests");
console.log(
  eqArrays(
    flatten([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [1, 2, 3, 4, 5, 6]
  )
);
console.log(
  eqArrays(flatten([["Alice", "Bob"], ["Carol", "Dave"], ["Eve"]]), [
    "Alice",
    "Bob",
    "Carol",
    "Dave",
    "Eve",
  ])
);
console.log(
  eqArrays(
    flatten([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [1, 2, 3, 4, 5, 6]
  )
);

process.stdout.write("\n*8·65.\n");
/*
 *8·65. Create a function called 'totalMinutes' that takes an array of time pairs and returns the total minutes. Each time pair is two numbers: [hours, minutes].
 */

const totalMinutes = (timePairs) => {
  return timePairs.reduce((acc, [hr, mn]) => {
    return acc + (hr * 60 + mn);
  }, 0);
};

console.log(
  totalMinutes([
    [2, 25],
    [1, 19],
    [2, 45],
  ])
);

// Bonus exercises

process.stdout.write("\n*8·7.\n");
/*
 *8·7. Create a function called 'intersperse' that takes a value and an array, and returns a new array with the value interspersed between each element of the original array.
 */

const intersperse = (val, arr) => {
  return arr.reduce((acc, x) => {
    return [...acc, x, val];
  }, []);
};

console.log(intersperse(5, [5, 4, 3, 2, 1]));
console.log(intersperse(100, [55, 44, 33, 22, 11, 0]));

process.stdout.write("\n*8·71.\n");
/*
 *8·71. Create a function called 'bigWordLetters' that takes an array of words (strings) and returns the total number of letters in all of the words that are more than 3 letters long.
 */

const bigWordLetters = (words) => {
  return words.reduce((acc, word) => {
    if (word.length > 3) {
      return acc + word.length;
    } else {
      return acc;
    }
  }, 0);
};

console.log(bigWordLetters(["Hey", "my", "name", "is", "Elvis"]) === 9);
console.log(bigWordLetters(["What's", "your", "name"]) === 14);

process.stdout.write("\n*8·72.\n");
/*
 *8·72. Create a function called 'gamePoints' that takes an array of game results and returns the total points, according to the following description. Each game result is a pair of scores: [home team score, away team score]. Games where the home team won are worth 3 points. Games where the home team lost are worth 0 points. Tie games are worth 1 point.
 */

const gamePoints = (gameResults) => {
  return gameResults.reduce((acc, [home, away]) => {
    if (home > away) return acc + 3;
    else if (home < away) return acc;
    else if (home === away) return acc + 1;
  }, 0);
};

console.log(
  gamePoints([
    [5, 4],
    [5, 3],
    [9, 8],
    [6, 6],
  ])
);

process.stdout.write("\n");
