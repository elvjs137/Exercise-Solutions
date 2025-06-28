const isEven = (n) => n % 2 === 0;

const isOdd = (n) => n % 2 !== 0;

const divisibleBy = (x, y) => x % y === 0;

const eqArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((x, i) => {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        return eqArrays(arr1[i], arr2[i]);
      } else return arr1[i] === arr2[i];
    })
  );
};

const buildArray = (num) => new Array(num);

const append = (n, arr) => {
  arr.push(n);
  return arr;
};

const head = (arr) => arr[0];

const tail = (arr) => arr.slice(1);

const last = (arr) => arr[arr.length - 1];

const init = (arr) => arr.slice(0, -1);

const isEmpty = (arr) => arr.length === 0;

const take = (n, arr) => arr.slice(0, n);

const drop = (n, arr) => arr.slice(n);

const flatten = (arr) => arr.flat(Infinity);

const intersperce = (sep, arr) => arr.reduce((acc, x) => [...acc, x, sep], []);

const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

const product = (arr) => arr.reduce((acc, x) => acc * x, 1);

const maximum = (arr) => Math.max(...arr);

const minimum = (arr) => Math.min(...arr);

const range = (start, end) => {
  let numbers = [];
  for (let i = start; i <= end; i++) numbers.push(i);
  return numbers;
};

const eqObjects = (obj1, obj2) => {
  return (
    eqArrays(Object.keys(obj1), Object.keys(obj2)) &&
    eqArrays(Object.values(obj1), Object.values(obj2))
  );
};

const setProp = (k, v, obj) => ({ ...obj, [k]: v });

const removeProp = (k, obj) => ({ ...obj, [k]: undefined });

module.exports = {
  isEven,
  isOdd,
  divisibleBy,
  eqArrays,
  buildArray,
  append,
  head,
  tail,
  last,
  init,
  isEmpty,
  take,
  drop,
  flatten,
  intersperce,
  sum,
  product,
  maximum,
  minimum,
  range,
  eqObjects,
  setProp,
  removeProp,
};
