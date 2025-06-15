// This is a comment because it begins with two slashes. It has no effect on the code and is only for humans to read.
// You will see many comments in code as a way of adding clarification or helpful notes
const temperatureF = 77;
const temperatureC = (temperatureF - 32) * (5 / 9);
console.log(temperatureC); // should be 25
console.log(temperatureF > temperatureC); // true

const weatherToday = "rain";
const weatherTomorrow = "sunny";
const rainTodayOrTomorrow =
  weatherToday === "rain" || weatherTomorrow === "rain"; // brackets for clarity
console.log(rainTodayOrTomorrow); // true, because today is rainy
const rainTodayAndTomorrow =
  weatherToday === "rainy" && weatherTomorrow === "rain";
console.log(rainTodayAndTomorrow); // false, because tomorrow is sunny

const berry = "nightshade";
const berryIsEdible =
  berry === "blueberry" ||
  berry === "raspberry" ||
  berry === "blackberry" ||
  berry === "strawberry" ||
  berry === "cranberry";
console.log(berryIsEdible); // only true if the berry is one of the edible berries

const pokeBowlSize = "small";
const pokeBowlBase = "mixed rice";
const pokeBowlProtein = "salmon";
const pokeBowlSauce = "shoyu";
// This is a long one, but with clever formatting it is not hard to read
const validPokeBowl =
  (pokeBowlSize === "small" ||
    pokeBowlSize === "medium" ||
    pokeBowlSize === "large") &&
  (pokeBowlBase === "sushi rice" ||
    pokeBowlBase === "mixed rice" ||
    pokeBowlBase === "zucchini") &&
  (pokeBowlProtein === "tuna" ||
    pokeBowlProtein === "salmon" ||
    pokeBowlProtein === "shrimp" ||
    pokeBowlProtein === "beef") &&
  (pokeBowlSauce === "sesame" ||
    pokeBowlSauce === "shoyu" ||
    pokeBowlSauce === "ginger honey" ||
    pokeBowlSauce === "hot sauce");
console.log(validPokeBowl);
