const batteries = require("./batteries.js");
console.log("Testing isEven:");
console.log(batteries.isEven(4) === true);
console.log(batteries.isEven(5) === false);
console.log(batteries.isEven(0) === true);
console.log(batteries.isEven(1) === false);

process.stdout.write("\n");

console.log("Testing isOdd:");
console.log(batteries.isOdd(4) === false);
console.log(batteries.isOdd(-55) === true);
console.log(batteries.isOdd(0) === false);
console.log(batteries.isOdd(7) === true);

process.stdout.write("\n");

console.log("Testing divisibleBy:"); // redo tests
console.log(batteries.divisibleBy(28, 7) === true);
console.log(batteries.divisibleBy(-55, 7) === false);
console.log(batteries.divisibleBy(0, 8) === true);
console.log(batteries.divisibleBy(-7, -7) === true);

process.stdout.write("\n");

console.log("Testing eqArrays:");
console.log(batteries.eqArrays([26, 15, 9], [26, 15, 9]) === true);
console.log(batteries.eqArrays([], [2, 6, 8]) === false);
console.log(batteries.eqArrays([[[0]]], [[[0]]]) === true);

process.stdout.write("\n");

console.log("Testing buildArray:");
console.log(batteries.buildArray(4).length === 4);
console.log(batteries.buildArray(55).length === 55);
console.log(batteries.buildArray(0).length === 0);

process.stdout.write("\n");

console.log("Testing append:");
console.log(batteries.eqArrays(batteries.append(4, [1, 2, 3]), [1, 2, 3, 4]));
console.log(batteries.eqArrays(batteries.append(8, []), [8]));
console.log(
  batteries.eqArrays(batteries.append("", [25, 8, 4]), [25, 8, 4, ""])
);

process.stdout.write("\n");

console.log("Testing head:");
console.log(batteries.head([2, 4, 6, 8]) === 2);
console.log(batteries.head([]) === undefined);
console.log(batteries.head([null, undefined, false]) === null);

process.stdout.write("\n");

console.log("Testing tail:");
console.log(batteries.eqArrays(batteries.tail([2, 4, 6, 8]), [4, 6, 8]));
console.log(batteries.eqArrays(batteries.tail([]), []));
console.log(batteries.eqArrays(batteries.tail([-2, "4", 6, -8]), ["4", 6, -8]));

process.stdout.write("\n");

console.log("Testing last:");
console.log(batteries.last([2, 4, 6, 8]) === 8);
console.log(batteries.last([2, 4, 6, null]) === null);
console.log(batteries.last([2, 4, 6, undefined]) === undefined);
console.log(batteries.last([]) === undefined);

process.stdout.write("\n");

console.log("Testing init:");
console.log(batteries.eqArrays(batteries.init([2, 4, 6, 8]), [2, 4, 6]));
console.log(batteries.eqArrays(batteries.init([]), []));
console.log(batteries.eqArrays(batteries.init([null, 4, 6, 8]), [null, 4, 6]));

process.stdout.write("\n");

console.log("Testing isEmpty:");
console.log(batteries.isEmpty([]));
console.log(!batteries.isEmpty([null]));
console.log(!batteries.isEmpty([2, 5, 8]));

process.stdout.write("\n");

console.log("Testing take:");
console.log(
  batteries.eqArrays(batteries.take(3, [2, 4, 6, 7, 8, 9]), [2, 4, 6])
);
console.log(batteries.eqArrays(batteries.take(3, []), []));
console.log(batteries.eqArrays(batteries.take(0, [2, 4, 6, 7, 8, 9]), []));

process.stdout.write("\n");

console.log("Testing drop:");
console.log(batteries.eqArrays(batteries.drop(3, [2, 4, 5, 6, 7]), [6, 7]));
console.log(batteries.eqArrays(batteries.drop(3, []), []));
console.log(
  batteries.eqArrays(batteries.drop(0, [2, 4, 5, 6, 7]), [2, 4, 5, 6, 7])
);

process.stdout.write("\n");

console.log("Testing flatten:");
console.log(
  batteries.eqArrays(batteries.flatten([2, 4, 9.0, [1]]), [2, 4, 9.0, 1])
);
console.log(
  batteries.eqArrays(batteries.flatten([2, [4], 9.0, [1]]), [2, 4, 9.0, 1])
);
console.log(
  batteries.eqArrays(
    batteries.flatten([2, 4, 9.0, [[[[[1]]]]]]),
    [2, 4, 9.0, 1]
  )
);

process.stdout.write("\n");

console.log("Testing intersperse:");
console.log(
  batteries.eqArrays(
    batteries.intersperce(2, [2, 4, 6, 8]),
    [2, 2, 4, 2, 6, 2, 8, 2]
  )
);
console.log(batteries.eqArrays(batteries.intersperce(2, []), []));

process.stdout.write("\n");

console.log("Testing sum:");
console.log(batteries.sum([2, 4, 5, 10]) === 21);
console.log(batteries.sum([]) === 0);
console.log(!batteries.sum([2, undefined, 5, 10]));

process.stdout.write("\n");

console.log("Testing product:");
console.log(batteries.product([2, 4, 5, 10]) === 400);
console.log(batteries.product([]) === 1);
console.log(!batteries.product([2, undefined, 5, 10]));

process.stdout.write("\n");

console.log("Testing maximum:");
console.log(batteries.maximum([2, 4, 5, 10]) === 10);
console.log(!!batteries.maximum([]));
console.log(batteries.maximum([2, Infinity, 5, 10]) === Infinity);

process.stdout.write("\n");

console.log("Testing minimum:");
console.log(batteries.minimum([2, 4, 5, 10]) === 2);
console.log(!!batteries.minimum([]));
console.log(batteries.minimum([-Infinity, Infinity, 5, 10]) === -Infinity);

process.stdout.write("\n");

console.log("Testing range:");
console.log(batteries.eqArrays(batteries.range(2, 5), [2, 3, 4, 5]));
console.log(batteries.eqArrays(batteries.range(2, 2), [2]));
console.log(batteries.eqArrays(batteries.range(2, 1), []));

process.stdout.write("\n");

console.log("Testing eqObjects:");
console.log(
  batteries.eqObjects(
    { name: "Elvis", age: 21, language: "JavaScript", rank: "5kyu" },
    { name: "Elvis", age: 21, language: "JavaScript", rank: "5kyu" }
  )
);
console.log(batteries.eqObjects({}, {}));
console.log(
  !batteries.eqObjects(
    { name: "Elvis", age: 21, language: "JavaScript", rank: "5kyu" },
    { name: "Elvis", age: 21, language: "Haskell", rank: "1kyu" }
  )
);

process.stdout.write("\n");

console.log("Testing setProp:");
console.log(
  batteries.eqObjects(
    batteries.setProp("rank", "5kyu", {
      name: "Elvis",
      age: 21,
      language: "JavaScript",
    }),
    { name: "Elvis", age: 21, language: "JavaScript", rank: "5kyu" }
  )
);

process.stdout.write("\n");

console.log("Testing removeProp:");
console.log(
  batteries.eqObjects(
    batteries.removeProp("rank", {
      name: "Elvis",
      age: 21,
      language: "JavaScript",
      rank: "5kyu",
    }),
    { name: "Elvis", age: 21, language: "JavaScript", rank: undefined }
  )
);
