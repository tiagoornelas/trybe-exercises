const assert = require('assert');
const { reverse } = require('dns');

const myList = [1, 2, 3];

const swap = ([firstNumb, secondNumb, thirdNumb]) => [
  thirdNumb,
  secondNumb,
  firstNumb,
];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
