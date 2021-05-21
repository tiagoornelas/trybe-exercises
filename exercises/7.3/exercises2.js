// 1

const assert = require('assert');

const addOne = (arr) => {
  let newArr = [];
  for (item in arr) {
    let insert = arr[item] + 1;
    newArr.push(insert);
  }
  return newArr;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// 2

const assert = require('assert');

const wordLengths = (arr) => {
  let newArr = [];
  for (item in arr) {
    let insert = arr[item].length;
    newArr.push(insert);
  }
  return newArr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// 3

const assert = require('assert');

const sumAllNumbers = (arr) => {
  let sum = 0;
  for (item in arr) {
    sum += arr[item];
  }
  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// 4

const assert = require('assert');

const findTheNeedle = (arr, word) => {
  return arr.indexOf(word);
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
