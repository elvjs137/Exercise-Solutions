// Practice calling a function with no arguments

process.stdout.write("*5·1. ");
/*
 *5·1. Call the following function.
 */
const sayHello = () => {
  console.log("Hello, world!");
};

sayHello();

process.stdout.write("\n*5·11.\n");
/*
 *5·11. Call the following function.
 */
const sayHelloLonger = () => {
  console.log("Hello!");
  console.log("Bonjour!");
  console.log("Guten Tag!");
};

sayHelloLonger();

// Practice creating a function with no arguments

process.stdout.write("\n*5·2. ");
/*
 *5·2. Create a function so the following line of code prints the message 'Welcome!' when uncommented.
 */

const sayWelcome = () => console.log("Welcome!");

sayWelcome();

// Practice calling a function with one argument

process.stdout.write("\n*5·3. ");
/*
 *5·3. Call the following function, providing a language as the argument.
 */
const sayHelloLanguage = (language) => {
  if (language === "English") {
    console.log("Hello!");
  } else if (language === "French") {
    console.log("Bonjour!");
  } else if (language === "German") {
    console.log("Guten Tag!");
  } else {
    console.log("Unknown language");
  }
};

console.log(sayHelloLanguage("Chinese"));

// Practice creating a function with one argument

process.stdout.write("\n*5·4.\n");
/*
 *5·4. Create a function called 'greet' that takes a name as an argument. Call the function a few times to achieve the same goal as the following lines of code.
 */
const greet = (myName) => console.log("Hello, " + myName + "!");
greet("Elvis");
greet("Tim");
greet("Larry");

console.log("Hello, Alice!");
console.log("Hello, Bob!");
console.log("Hello, Carol!");
console.log("Hello, Dean!");

process.stdout.write("\n*5·41.\n");
/*
*5·41. Create a function called 'isPositive' that takes a number as an argument and returns true if the number is positive (greater than 0), otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const isPositive = (num) => (num > 0 ? true : false);
console.log(isPositive(-6));

console.log("10 is positive:", isPositive(10) === true);
console.log("-10 is not positive:", isPositive(-10) === false);

process.stdout.write("\n*5·411.\n");
/*
*5·411. Create a function called 'isNegative' that takes a number as an argument and returns true if the number is negative (less than 0), otherwise false.

The following lines should help test if your function works correctly.
*/

const isNegative = (num) => (num < 0 ? true : false);
console.log(isNegative(5));

console.log("10 is not negative:", isNegative(10) === false);
console.log("-10 is negative:", isNegative(-10) === true);

process.stdout.write("\n*5·42.\n");
/*
*5·42. Create a function called 'isEven' that takes a number as an argument and returns true if the number is even, otherwise false.

Write some lines of code to test if your function works correctly.
*/
const isEven = (num) => (num % 2 === 0 ? true : false);

console.log(isEven(5));
console.log(isEven(6));

process.stdout.write("\n*5·421.\n");
/*
 *5·421. Create a function called 'isOdd' similar to isEven. Can you use isEven to make this function?
 */
const isOdd = (num) => !isEven(num);

console.log(isOdd(5));
console.log(isOdd(6));

process.stdout.write("\n*5·43.\n");
/*
 *5·43. Create a function called 'isValidCreditCard' that takes a credit card number and returns true if it is valid, otherwise false. Refer to the credit card exercise in conditionals.
 */

const isValidCreditCard = (creditCard) => {
  if (
    creditCard.toString().length === 5 &&
    !creditCard.toString().startsWith("0") &&
    (3 * creditCard) % 2 === 0 &&
    (creditCard % 5 === 0 || creditCard % 7 === 0)
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isValidCreditCard(45010);

process.stdout.write("\n*5·44.\n");
/*
 *5·44. Create a function called 'dollarsToCents' that takes a value in dollars and returns the corresponding value in cents.
 */

const dollarsToCents = (dollars) => dollars * 100;

console.log(dollarsToCents(6.7));

process.stdout.write("\n*5·45.\n");
/*
 *5·45. Create a function called 'fToC' that takes a temperature in Fahrenheit and returns the temperature in Celsius.
 */
const fToC = (temp) => {
  return ((temp - 32) * 5) / 9;
};

console.log(fToC(100));

process.stdout.write("\n*5·451.\n");
/*
 *5·451. Create a function called 'cToF' that takes a temperature in Celsius and returns the temperature in Fahrenheit.
 */
const cToF = (temp) => {
  return (temp * 9) / 5 + 32;
};
console.log(cToF(37));

// Practice calling a function with multiple arguments

process.stdout.write("\n*5·5.\n");
/*
 *5·5. Call the following function, providing a name and a language.
 */
const greetLanguage = (name, language) => {
  if (language === "English") {
    console.log("Hello, " + name + "!");
  } else if (language === "French") {
    console.log("Bonjour, " + name + "!");
  } else if (language === "German") {
    console.log("Guten Tag, " + name + "!");
  } else {
    console.log("Unknown language");
  }
};

greetLanguage("Tim", "German");

process.stdout.write("\n*5·51.\n");
/*
 *5·51. Write some lines of code to test if the following function multiplies 3 numbers together correctly.
 */
const multiplyAll = (a, b, c) => {
  return a * b * c;
};

console.log(multiplyAll(3, 4, 5)); // should return 60
console.log(multiplyAll(2, 3, 4)); // should return 24

// Practice creating a function with multiple arguments

process.stdout.write("\n*5·6.\n");
/*
*5·6. Create a function called 'languageGreeting' that takes a name and a language and returns a greeting instead of printing it.

The following lines should help test if your function works correctly. They should print true.
*/
const languageGreeting = (myName, language) => {
  if (language === "English") {
    return "Hello, " + myName + "!";
  } else if (language === "French") {
    return "Bonjour, " + myName + "!";
  } else if (language === "German") {
    return "Guten Tag, " + myName + "!";
  } else {
    return "Unknown language";
  }
};
console.log(
  "English greeting works:",
  languageGreeting("Alice", "English") === "Hello, Alice!"
);
console.log(
  "French greeting works:",
  languageGreeting("Alice", "French") === "Bonjour, Alice!"
);
console.log(
  "German greeting works:",
  languageGreeting("Alice", "German") === "Guten Tag, Alice!"
);
console.log(
  "Unknown language works:",
  languageGreeting("Alice", "gibberish") === "Unknown language"
);

process.stdout.write("\n*5·61.\n");
/*
*5·61. Create a function called 'lovers' that takes two names and returns a string that the first name loves the second name.

The following lines should help test if your function works correctly. They should print true.
*/

const lovers = (name1, name2) => {
  return name1 + " loves " + name2;
};

console.log("Alice loves Bob:", lovers("Alice", "Bob") === "Alice loves Bob");
console.log("Bob loves Alice:", lovers("Bob", "Alice") === "Bob loves Alice");

process.stdout.write("\n*5·62.\n");
/*
*5·62. Create a function called 'convertTemperature' that takes a number and either 'FtoC' or 'CtoF', and returns the converted temperature. How can you use the functions from *5·45 and *5·451 to make this easier?

The following lines should help test if your function works correctly. They should print true.
*/

const convertTemperature = (number, func) => {
  if (func === "FtoC") {
    return fToC(number);
  } else if (func === "CtoF") {
    return cToF(number);
  }
};

console.log("32 F = 0 C:", convertTemperature(32, "FtoC") === 0);
console.log("0 C = 32 F:", convertTemperature(0, "CtoF") === 32);

process.stdout.write("\n*5·63.\n");
/*
*5·63. Create a function called 'divisibleBy' that takes two numbers and returns true if the first number is divisible by the second, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const divisibleBy = (a, b) => {
  return a % b === 0 ? true : false;
};

console.log("5 is not divisible by 3:", divisibleBy(5, 3) === false);
console.log("1 is divisible by 1:", divisibleBy(1, 1) === true);
console.log("6 is divisible by 2:", divisibleBy(6, 2) === true);
console.log("6 is divisible by 3:", divisibleBy(6, 3) === true);

process.stdout.write("\n*5·64.\n");
/*
*5·64. Create a function called 'bonusTime' that takes a number (salary) and a boolean (bonus). If the second argument is true, return the salary multiplied by 10, otherwise the original salary.

Write some lines of code to test if your function works correctly.
*/

const bonusTime = (salary, bonus) => {
  if (bonus === true) {
    return salary * 10;
  } else {
    return salary;
  }
};

console.log(bonusTime(2675, false));

process.stdout.write("\n*5·65.\n");
/*
*5·65. Create a function called 'rps' for playing the game Rock, Paper, Scissors. It should take two arguments, which should each be either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, return 1. If the first hand loses, return -1. In the case of a draw, return 0.

Write some lines of code to test if your function works correctly.
*/

const rps = (player1, player2) => {
  if (player1 === player2) {
    return 0;
  } else if (
    (player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Paper" && player2 === "Rock") ||
    (player1 === "Scissors" && player2 === "Paper")
  ) {
    return 1;
  } else {
    return -1;
  }
};

console.log(rps("Scissors", "Rock"));

process.stdout.write("\n");
