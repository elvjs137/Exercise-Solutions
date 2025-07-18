/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Practice creating arrays

process.stdout.write("*7·1. ");
/*
 *7·1. Create a variable to hold an array of numbers and print it.
 */

const arr = [2, 5, 8, 11, 14, 17];

console.log(arr);

process.stdout.write("\n*7·11. ");
/*
 *7·11. Print an array of your top 3 favorite colors (as strings) without creating a variable.
 */

console.log(["blue", "green", "red"]);

process.stdout.write("\n*7·12. ");
/*
 *7·12. Print an array of 4 different types of values.
 */

console.log([5, true, "true", [undefined]]);

process.stdout.write("\n*7·13. ");
/*
 *7·13. Print a 2-dimensional array of numbers.
 */

console.log([
  [2, 5, 7],
  [9, 3, 1],
  [6, 11, 16],
]);

// Practice using array index

process.stdout.write("\n*7·2. ");
/*
 *7·2. Print the fourth name (Dave) of the array.
 */
const names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"];

console.log(names[3]);

process.stdout.write("\n*7·21. ");
/*
 *7·21. Print the last name of the array, without using the length property.
 */
console.log(names.slice(-1));

process.stdout.write("\n*7·22. ");
/*
 *7·22. Print each of the names at even indexes of the array.
 */

console.log(names[2]);
console.log(names[4]);

process.stdout.write("\n*7·23.\n");
/*
*7·23. Create a function called 'head' that takes an array and returns its first element. What does it return when given an empty array?

Remember to write tests!
*/

const head = (arr) => {
  return arr[0];
};

console.log("return 4 for this array: [4, 6, 4, 8]", head([4, 6, 4, 8]) === 4);
console.log(
  "return 6 for this array: [6, 9, 12, 15]",
  head([6, 9, 12, 15]) === 6
);

process.stdout.write("\n*7·24.\n");
/*
*7·24. Create a function called 'isAtIndex' that takes a value, a number, and an array. It should return true if the value is found at the index number of the array, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const isAtIndex = (value, number, array) => {
  return array[number] === value ? true : false;
};

console.log("Bob is at index 1 in names:", isAtIndex("Bob", 1, names));
console.log("Bob is not at index 0 in names:", !isAtIndex("Bob", 0, names));
console.log("3 is at index 0 in these numbers:", isAtIndex(3, 0, [3, 2, 1]));
console.log(
  "2 is not at index 2 in these numbers:",
  !isAtIndex(2, 2, [3, 2, 1])
);

process.stdout.write("\n*7·25.\n");
/*
*7·25. Create a function called 'area' that takes a rectangle and returns its area. The rectangle is represented by an array with 2 numbers: [length, width].

The following lines should help test if your function works correctly. They should print true.
*/

const area = ([length, width]) => {
  return length * width;
};

console.log("area tests");
console.log(area([1, 2]) === 2);
console.log(area([2, 2]) === 4);
console.log(area([6, 3]) === 18);
console.log(area([0, 9]) === 0);

process.stdout.write("\n*7·251.\n");
/*
*7·251. Create a function called 'areaDifference' that takes two rectangles and returns the difference between the areas of the rectangles. Each rectangle is represented by an array with 2 numbers: [length, width].

Tip: Look up the Math.abs() function.
*/
const areaDifference = ([length1, width1], [length2, width2]) => {
  const area1 = area([length1, width1]);
  const area2 = area([length2, width2]);
  return Math.abs(area1 - area2);
};

console.log(areaDifference([5, 10], [6, 15]) === 40);
console.log(areaDifference([7, 9], [6, 10]) === 3);
console.log(areaDifference([5, 5], [5, 5]) === 0);

process.stdout.write("\n*7·252.\n");
/*
 *7·252. Create a function called 'volumeDifference' that takes two cuboids and returns the difference between the volumes of the cuboids. Each cuboid is represented by an array with 3 numbers: [length, width, height]. The volume of a cuboid can be calculated by multiplying length x width x height.
 */

const volumeDifference = ([l1, w1, h1], [l2, w2, h2]) => {
  const volume1 = l1 * w1 * h1;
  const volume2 = l2 * w2 * h2;
  return Math.abs(volume1 - volume2);
};

console.log(volumeDifference([2, 3, 4], [4, 5, 6]) === 96);

process.stdout.write("\n*7·26.\n");
/*
*7·26. Create a function called 'suitValue' that takes a card suit (string) and returns its number value. The suits and their values are as follows.

clubs: 0
diamonds: 1
hearts: 2
spades: 3
*/

const suitValues = [0, 1, 2, 3];

const suitValue = (str) => {
  if (str === "clubs") {
    return suitValues[0];
  } else if (str === "diamonds") {
    return suitValues[1];
  } else if (str === "hearts") {
    return suitValues[2];
  } else if (str === "spades") {
    return suitValues[3];
  }
};

console.log(suitValue("diamonds") === 1);
console.log(suitValue("hearts") === 2);
console.log(suitValue("spades") === 3);

process.stdout.write("\n*7·261.\n");
/*
*7·261. Create a function called 'highCard' that takes two cards and returns the higher card of the two. A card is represented by an array: [card value, card suit]. If two cards have different values, the card with the higher value is the higher card. If two cards have the same values, the card with the higher suit value is the higher card.

The card values are numbers: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (Jack), 12 (Queen), 13 (King), 14 (Ace).
The card suits are strings: clubs, diamonds, hearts, spades.

For example, given the two cards [3, 'spades'] and [4, 'hearts'], the second one is the higher card. Given the two cards [11, 'spades'] and [11, 'hearts'], the first one is the higher card (because the Jack of Spades beats the Jack of Hearts).

The following lines should help test if your function works correctly. They should print true.
*/

const highCard = ([cardValue1, cardSuit1], [cardValue2, cardSuit2]) => {
  if (cardValue1 === cardValue2) {
    return suitValue(cardSuit1) > suitValue(cardSuit2)
      ? [cardValue1, cardSuit1]
      : [cardValue2, cardSuit2];
  } else {
    return cardValue1 > cardValue2
      ? [cardValue1, cardSuit1]
      : [cardValue2, cardSuit2];
  }
};

console.log("highCard tests");
const highCardTest1 = highCard([3, "spades"], [4, "spades"]);
console.log(highCardTest1[0] === 4 && highCardTest1[1] === "spades");
const highCardTest2 = highCard([3, "spades"], [3, "hearts"]);
console.log(highCardTest2[0] === 3 && highCardTest2[1] === "spades");

process.stdout.write("\n*7·27. ");
/*
 *7·27. Print the number 8 from the following 2D array.
 */
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(matrix1[1][3]);

process.stdout.write("\n*7·271.\n");
/*
 *7·271. Create a function called 'valueInMatrix' that takes 4 arguments: value (number), row (number), column (number), matrix (2D array of numbers). It should return true if the value is found at the specified row and column in the matrix, otherwise false. For example, the value 10 is found at row 3, column 2 in the above matrix1.
 */

const valueInMatrix = (value, row, column, matrix) => {
  return matrix[row - 1][column - 1] === value ? true : false;
};

console.log(valueInMatrix(6, 2, 2, matrix1));
console.log(valueInMatrix(1, 1, 1, matrix1));
console.log(valueInMatrix(12, 3, 4, matrix1));

// Practice using length

process.stdout.write("\n*7·3. ");
/*
 *7·3. Print the length of the names array.
 */

console.log(names.length);

process.stdout.write("\n*7·31. ");
/*
 *7·31. Print the last name in the array, using the length property.
 */

console.log(names[names.length - 1]);

process.stdout.write("\n*7·32. ");
/*
 *7·32. Print the sum of the lengths of the following arrays.
 */
const groceries = [
  "rice",
  "bananas",
  "avocados",
  "blueberries",
  "spinach",
  "chickpeas",
  "canned beans",
];
const officeSupplies = ["pen", "paper", "tape", "stapler"];

console.log(groceries.length + officeSupplies.length);

process.stdout.write("\n*7·33. ");
/*
 *7·33. Print the length of the first row in the following 2D array.
 */
const matrix2 = [
  ["a", "b", "c", "d", "e", "f", "g", "h"],
  ["i", "j", "k", "l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
];

console.log(matrix2[0].length);

process.stdout.write("\n*7·34.\n");
/*
 *7·34. Create a function called 'last' that takes an array and returns its last element.
 */

const last = (arr) => {
  return arr[arr.length - 1];
};

console.log(last(matrix2[2]));

process.stdout.write("\n*7·35. ");
/*
 *7·35. Print the length of the last row in the following 2D array.
 */
const bigMatrix = [
  [45, 39, 89, 67, 7, 71, 85, 44, 47, 39],
  [89, 32, 81, 19, 43, 17, 47, 10, 6, 58],
  [8, 59, 79, 3, 14, 21, 83, 18, 27, 49],
  [24, 32, 72, 3, 22, 32, 5, 69, 15, 61],
  [64, 31, 73, 28, 5, 98, 6, 29, 90, 4],
  [54, 6, 92, 92, 56, 84, 81, 7, 53, 62],
  [6, 33, 41, 77, 23, 3, 46, 19, 57, 40],
  [3, 79, 65, 30, 79, 54, 25, 53, 35, 71],
  [60, 1, 54, 49, 44, 61, 42, 50, 18, 43],
  [91, 46, 7, 50, 95, 14, 45, 4, 98, 22],
];

console.log(bigMatrix[bigMatrix.length - 1].length);

process.stdout.write("\n*7·36.\n");
/*
 *7·36. Create a function called 'isEmpty' that takes an array and returns true if it is empty, otherwise false.
 */

const isEmpty = (arr) => (arr.length === 0 ? true : false);

console.log(isEmpty(bigMatrix[3]));

// Practice using the includes() method

process.stdout.write("\n*7·4.\n");
/*
 *7·4. Create a function called 'goodColor' that takes a single color (string) and an array of good colors (strings). It should return true if the color is in the array, otherwise false.
 */

const goodColor = (color, arrOfColors) =>
  arrOfColors.includes(color) ? true : false;

console.log(goodColor("red", ["green", "blue", "white", "black"]) === false);
console.log(goodColor("white", ["green", "blue", "white", "black"]) === true);

process.stdout.write("\n*7·41.\n");
/*
 *7·41. Create a function called 'needToBuy' that takes a single item (string) and an array of owned items (strings). It should return true if the item isn't in the owned list (meaning we need to buy it!), otherwise false.
 */

const needToBuy = (item, arrOfItems) =>
  arrOfItems.includes(item) ? true : false;

process.stdout.write("\n*7·42.\n");
/*
 *7·42. Create a function called 'hasNull' that takes an array and returns true if any of the values are null, otherwise false.
 */

const hasNull = (arr) => (arr.includes(null) ? true : false);

console.log(hasNull([67, 24, 6, 15, null]) === true);
console.log(hasNull([6, 8, "hey", undefined]) === false);

process.stdout.write("\n*7·43.\n");
/*
 *7·43. Create a function called 'badMatrix' that takes a 2D array with 3 rows. It should return true if any of the 3 rows contain a null value, otherwise false.
 */

const badMatrix = (arr) => {
  return arr[0].includes(null) || arr[1].includes(null) || arr[2].includes(null)
    ? true
    : false;
};

console.log(badMatrix(matrix1) === false);

process.stdout.write("\n*7·44.\n");
/*
 *7·44. Create a function called 'goodMatrix' that takes a 2D array with 3 rows. It should return true if none of the 3 rows contain a null value, otherwise false.
 */

const goodMatrix = (arr) => {
  return arr[0].includes(null) && arr[1].includes(null) && arr[2].includes(null)
    ? true
    : false;
};

console.log(goodMatrix(matrix1) === false);

process.stdout.write("\n*7·45.\n");
/*
*7·45. Create a function called 'middleIndex' that takes an array and returns the index of the middle element, as per the following tests.

Tip: Look up the Math.floor() function.
*/

const middleIndex = (arr) => Math.floor((arr.length - 1) / 2);

console.log("middleIndex tests");
console.log(middleIndex([1]) === 0);
console.log(middleIndex([1, 2]) === 0);
console.log(middleIndex([1, 2, 3]) === 1);
console.log(middleIndex([1, 2, 3, 4]) === 1);
console.log(middleIndex([1, 2, 3, 4, 5]) === 2);

process.stdout.write("\n*7·46.\n");
/*
 *7·46. Create a function called 'middle' that takes an array and returns the middle element, as per the following tests.
 */

const middle = (arr) => arr[middleIndex(arr)];

console.log("middle tests");
console.log(middle([1]) === 1);
console.log(middle([1, 2]) === 1);
console.log(middle([1, 2, 3]) === 2);
console.log(middle([1, 2, 3, 4]) === 2);
console.log(middle([1, 2, 3, 4, 5]) === 3);
console.log(middle([1, 2, 3, 4, 5, 6]) === 3);

// Practice using the slice() method

process.stdout.write("\n*7·5. ");
/*
 *7·5. Print the first 3 elements of the following array, using slice().
 */
const randomNumbers = [82, 31, 21, 59, 67, 2, 36, 86, 18];

console.log(randomNumbers.slice(0, 3));

process.stdout.write("\n*7·501. ");
/*
 *7·501. Print the middle 3 random numbers, using slice().
 */

console.log(randomNumbers.slice(3, 6));

process.stdout.write("\n*7·502. ");
/*
 *7·502. Print the last 3 random numbers, using slice().
 */

console.log(randomNumbers.slice(6));

process.stdout.write("\n*7·51.\n");
/*
*7·51. Create a function called 'tail' that takes an array and returns the "tail" end of it; everything but the first element.

We can't use equality for comparing arrays, so it's tricky to write proper tests for functions like this, which return an array. For now, we can simply print the result and see if it looks right. The following lines should help you see if your function works correctly.
*/

const tail = (arr) => arr.slice(1);

console.log("tail tests");
console.log(tail([1, 2, 3]), "=== [2, 3]");
console.log(tail([1, 2]), "=== [2]");
console.log(tail([1]), "=== []");
console.log(tail([]), "=== []");

process.stdout.write("\n*7·511.\n");
/*
 *7·511. Create a function called 'firstIsRepeated' that takes an array and returns true if the first element exists more than once in the array, otherwise false. Try to use tail() as a helper function.
 */

const firstIsRepeated = (arr) => (tail(arr).includes(arr[0]) ? true : false);

console.log(firstIsRepeated([2, 6, 7, 8, 2, 5]) === true);
console.log(firstIsRepeated([2, 4, 6, 8, 10, 12]) === false);

process.stdout.write("\n*7·52.\n");
/*
*7·52. Create a function called 'init' that takes an array and returns all the elements except the last one.

The following lines should help you see if your function works correctly.
*/

const init = (arr) => {
  return arr.slice(0, arr.length - 1);
};

console.log("init tests");
console.log(init([1, 2, 3, 4]), "=== [1, 2, 3]");
console.log(init([1, 2, 3]), "=== [1, 2]");
console.log(init([9]), "=== []");
console.log(init([]), "=== []");

process.stdout.write("\n*7·521.\n");
/*
 *7·521. Create a function called 'lastIsRepeated' that takes an array and returns true if the last element exists more than once in the array, otherwise false. Try using init() and last() as helpers.
 */

const lastIsRepeated = (arr) => init(arr).includes(last(arr));

console.log(lastIsRepeated([5, 10, 15, 20, 5]) === true);
console.log(lastIsRepeated([5, 10, 15, 20, 10]) === true);
console.log(lastIsRepeated([5, 10, 15, 20, 25]) === false);

process.stdout.write("\n*7·522.\n");
/*
 *7·522. Create a function called 'inner' that takes an array and returns all the elements except the first and last.
 */

const inner = (arr) => tail(init(arr));

console.log(inner([2, 4, 6, 8, 10, 12, 14, 16]));
console.log(inner([4, 6, 8, 10, 12, 14, 16]));
console.log(inner([2, 4, 6, 8, 10]));

process.stdout.write("\n*7·53.\n");
/*
*7·53. Create a function called 'take' that takes a number (n) and an array. It should return the first n elements of the array.

The following lines should help you see if your function works correctly.
*/

const take = (n, arr) => {
  return arr.slice(0, n);
};

console.log("take tests");
console.log(take(3, [1, 2, 3, 4]), "=== [1, 2, 3]");
console.log(take(1, [1, 2, 3, 4]), "=== [1]");
console.log(take(0, [1, 2, 3, 4]), "=== []");
console.log(take(9, [1, 2, 3, 4]), "=== [1, 2, 3, 4]");

process.stdout.write("\n*7·54.\n");
/*
*7·54. Create a function called 'drop' that takes a number (n) and an array. It should drop the first n elements of the array and return the rest.

The following lines should help you see if your function works correctly.
*/

const drop = (n, arr) => {
  return arr.slice(n);
};

console.log("drop tests");
console.log(drop(0, [1, 2, 3, 4]), "=== [1, 2, 3, 4]");
console.log(drop(1, [1, 2, 3, 4]), "=== [2, 3, 4]");
console.log(drop(2, [1, 2, 3, 4]), "=== [3, 4]");
console.log(drop(3, [1, 2, 3, 4]), "=== [4]");
console.log(drop(4, [1, 2, 3, 4]), "=== []");
console.log(drop(9, [1, 2, 3, 4]), "=== []");

process.stdout.write("\n*7·55.\n");
/*
*7·55. Create a function called 'middle3' that takes an array (of at least 3 elements) and returns the middle 3 elements (as an array), as per the following tests.

The following lines should help you see if your function works correctly.
*/

const middle3 = (arr) => {
  return arr.slice(middleIndex(arr) - 1, middleIndex(arr) + 2);
};

console.log("middle3 tests");
console.log(middle3([1, 2, 3]), "=== [1, 2, 3]");
console.log(middle3([1, 2, 3, 4]), "=== [1, 2, 3]");
console.log(middle3([1, 2, 3, 4, 5]), "=== [2, 3, 4]");
console.log(middle3([1, 2, 3, 4, 5, 6]), "=== [2, 3, 4]");
console.log(middle3([1, 2, 3, 4, 5, 6, 7]), "=== [3, 4, 5]");

process.stdout.write("\n*7·551.\n");
/*
*7·551. Create a function called 'middleN' that takes a number (n) and an array (of at least n elements). It should return the middle n elements.

The following lines should help you see if your function works correctly.
*/

const middleN = (n, arr) => {
  const side = Math.floor(n / 2);
  const left = middleIndex(arr) - side;
  const right = left + n;

  return arr.slice(left, right);
};

console.log("middleN tests");
console.log(middleN(1, [1, 2, 3, 4, 5]), "=== [3]");
console.log(middleN(1, [1, 2, 3, 4, 5, 6]), "=== [3]");
console.log(middleN(2, [1, 2, 3, 4, 5]), "=== [2, 3]");
console.log(middleN(2, [1, 2, 3, 4, 5, 6]), "=== [2, 3]");
console.log(middleN(3, [1, 2, 3]), "=== [1, 2, 3]");
console.log(middleN(3, [1, 2, 3, 4, 5]), "=== [2, 3, 4]");
console.log(middleN(3, [1, 2, 3, 4, 5, 6, 7]), "=== [3, 4, 5]");
console.log(middleN(3, [1, 2, 3, 4, 5, 6, 7, 8]), "=== [3, 4, 5]");
console.log(middleN(4, [1, 2, 3, 4, 5, 6, 7, 8, 9]), "=== [3, 4, 5, 6]");
console.log(middleN(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "=== [3, 4, 5, 6]");

// Practice using the sort() method

process.stdout.write("\n*7·6.\n");
/*
*7·6. Create a function called 'top3' that takes an array (of at least 3 strings) and returns the first 3 strings that occur in alphabetical order.

The following lines should help you see if your function works correctly.
*/

const top3 = (arr) => {
  return arr.sort().slice(0, 3);
};

console.log("top3 tests");
console.log(
  top3(["apple", "date", "cherry", "banana"]),
  "=== ['apple', 'banana', 'cherry']"
);
console.log(
  top3(["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['apple', 'apple', 'apple']"
);
console.log(
  top3(["cherry", "banana", "apple"]),
  "=== ['apple', 'banana', 'cherry']"
);
console.log(
  top3(["date", "cherry", "banana", "Elderberry"]),
  "=== ['Elderberry', 'banana', 'cherry']"
);

process.stdout.write("\n*7·61.\n");
/*
*7·61. Create a function called 'topN' that takes a number (n) and an array (of at least n strings). It should return the first n strings that occur in alphabetical order.

The following lines should help you see if your function works correctly.
*/

const topN = (n, arr) => {
  return arr.sort().slice(0, n);
};

console.log("topN tests");
console.log(
  topN(3, ["apple", "date", "cherry", "banana"]),
  "=== ['apple', 'banana', 'cherry']"
);
console.log(
  topN(2, ["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['apple', 'apple']"
);
console.log(
  topN(1, ["apple", "date", "cherry", "Elderberry", "apple", "banana"]),
  "=== ['Elderberry']"
);
console.log(topN(1, ["apple"]), "=== ['apple']");

// Practice using the reverse() method

process.stdout.write("\n*7·7.\n");
/*
*7·7. Create a function called 'bottom3' that takes an array (of at least 3 strings) and returns the last 3 strings that occur in reverse alphabetical order.

The following lines should help you see if your function works correctly.
*/

const bottom3 = (arr) => arr.sort().reverse().slice(0, 3);

console.log("bottom3 tests");
console.log(
  bottom3(["apple", "date", "cherry", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottom3(["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottom3(["apple", "banana", "cherry"]),
  "=== ['cherry', 'banana', 'apple']"
);

process.stdout.write("\n*7·71.\n");
/*
*7·71. Create a function called 'bottomN' that takes a number (n) and an array (of at least n strings). It should return the last n strings that occur in reverse alphabetical order.

The following lines should help you see if your function works correctly.
*/

const bottomN = (n, arr) => {
  return arr.sort().reverse().slice(0, n);
};

console.log("bottomN tests");
console.log(
  bottomN(3, ["apple", "date", "cherry", "banana"]),
  "=== ['date', 'cherry', 'banana']"
);
console.log(
  bottomN(2, ["apple", "date", "cherry", "apple", "apple", "banana"]),
  "=== ['date', 'cherry']"
);
console.log(
  bottomN(1, ["apple", "date", "cherry", "Elderberry", "apple", "banana"]),
  "=== ['date']"
);
console.log(bottomN(1, ["apple"]), "=== ['apple']");

// Practice adding elements to arrays

process.stdout.write("\n*7·8. ");
/*
 *7·8. Print the following array with the number 4 added to the end, so we get [1, 2, 3, 4].
 */
const oneTwoThree = [1, 2, 3];
oneTwoThree.push(4);

console.log(oneTwoThree);

process.stdout.write("\n*7·801. ");
/*
 *7·801. Print the following array with the number 1 added to the beginning, so we get [1, 2, 3, 4].
 */
const twoThreeFour = [2, 3, 4];
twoThreeFour.unshift(1);

console.log(twoThreeFour);

process.stdout.write("\n*7·802. ");
/*
 *7·802. Print the following array with the name 'Dave' added to the end, so we get ['Alice', 'Bob', 'Carol', 'Dave'].
 */
const someNames = ["Alice", "Bob", "Carol"];
someNames.push("Dave");

console.log(someNames);

process.stdout.write("\n*7·803. ");
/*
 *7·803. Print the following two arrays added together, so we get ['apple', 'banana', 'cherry', 'date', 'elderberry'].
 */
const fruits = ["apple", "banana", "cherry"];
const moreFruits = ["date", "elderberry"];

console.log([...fruits, ...moreFruits]);

process.stdout.write("\n*7·804.\n");
/*
 *7·804. Print the following 2D array with another row added to the end.
 */
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

matrix3.push([7, 8, 9]);
console.log(matrix3);

process.stdout.write("\n*7·81.\n");
/*
*7·81. Create a function called 'nullHead' that takes an array and returns a new array with the first element replaced with null.

The following lines should help you see if your function works correctly.

Tip: Try using your tail() function to help.
*/

const nullHead = (arr) => [null, ...tail(arr)];

console.log("nullHead tests");
console.log(nullHead([1, 2, 3]), "=== [null, 2, 3]");
console.log(nullHead(["a", "b", "c"]), "=== [null, b, c]");

process.stdout.write("\n*7·82.\n");
/*
*7·82. Create a function called 'append' that takes a value and an array, and returns a new array with the value added to the end.

The following lines should help you see if your function works correctly.
*/

const append = (n, arr) => {
  return [...arr, n];
};

console.log("append tests");
console.log(append(3, [1, 2]), "=== [1, 2, 3]");
console.log(append(4, [1, 2, 3]), "=== [1, 2, 3, 4]");

process.stdout.write("\n*7·821.\n");
/*
*7·821. Create a function called 'appendHead' that takes an array and returns a new array with its first value added to the end.

The following lines should help you see if your function works correctly.
*/

const appendHead = (arr) => [...arr, arr[0]];

console.log("appendHead tests");
console.log(appendHead([1, 2, 3]), "=== [1, 2, 3, 1]");
console.log(appendHead(["a", "b", "b"]), "=== [a, b, b, a]");

process.stdout.write("\n*7·83.\n");
/*
*7·83. Create a function called 'swapEnds' that takes an array and returns a new array with the first and last elements swapped.

The following lines should help you see if your function works correctly.

Tip: Try using your head(), last(), and inner() functions to help.
*/

const swapEnds = (arr) => {
  return [arr[arr.length - 1], ...inner(arr), arr[0]];
};

console.log("swapEnds tests");
console.log(swapEnds([1, 2, 3]), "=== [3, 2, 1]");
console.log(swapEnds([1, 2, 3, 4]), "=== [4, 2, 3, 1]");

process.stdout.write("\n*7·84.\n");
/*
*7·84. Create a function called 'countUp' that takes an array of numbers counting up and returns a new array with the next number added to the end.

The following lines should help you see if your function works correctly.

Tip: Try using your last() function to help.
*/

const countUp = (arr) => [...arr, last(arr) + 1];

console.log("countUp tests");
console.log(countUp([1, 2, 3]), "=== [1, 2, 3, 4]");
console.log(countUp([25, 26, 27, 28, 29]), "=== [25, 26, 27, 28, 29, 30]");

process.stdout.write("\n*7·841.\n");
/*
*7·841. Create a function called 'countMore' that takes an array of numbers in a sequence (with a constant interval) and returns a new array with the next number in the sequence added to the end.

The following lines should help you see if your function works correctly.
*/

const countMore = (arr) => {
  const difference = arr[1] - arr[0];
  return [...arr, last(arr) + difference];
};

console.log("countMore tests");
console.log(countMore([1, 2, 3]), "=== [1, 2, 3, 4]");
console.log(countMore([2, 4, 6]), "=== [2, 4, 6, 8]");
console.log(countMore([1, 3, 5, 7]), "=== [1, 3, 5, 7, 9]");
console.log(countMore([10, 20, 30, 40, 50]), "=== [10, 20, 30, 40, 50, 60]");
console.log(countMore([-1, -2, -3]), "=== [-1, -2, -3, -4]");

process.stdout.write("\n*7·85.\n");
/*
*7·85. Create a function called 'insertAt' that takes an index, a value, and an array. It should return a new array with the given value inserted at the given index.

The following lines should help you see if your function works correctly.

Tip: Try using your take() and drop() functions to help.
*/

const insertAt = (index, value, array) => [
  ...take(index, array),
  value,
  ...drop(index, array),
];

console.log("insertAt tests");
console.log(insertAt(3, 4, [1, 2, 3, 5]), "=== [1, 2, 3, 4, 5]");
console.log(insertAt(4, 5, [1, 2, 3, 4]), "=== [1, 2, 3, 4, 5]");
console.log(insertAt(2, "c", ["a", "b", "d"]), "=== [a, b, c, d]");

process.stdout.write("\n*7·86.\n");
/*
 *7·86. Create a function called 'addToShoppingList' that takes a shopping list (array of strings) and an item (string). It should return a shopping list with the new item added to it. If the item is already in the shopping list, return the shopping list unchanged.
 */

const addToShoppingList = (arr, str) => {
  if (arr.includes(str)) {
    return arr;
  } else {
    return [...arr, str];
  }
};

console.log(
  addToShoppingList(["toothbrush", "toothpaste", "towel", "shirt"], "shirt")
);
console.log(
  addToShoppingList(["toothbrush", "toothpaste", "towel", "shirt"], "watch")
);

process.stdout.write("\n");
