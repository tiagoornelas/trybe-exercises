const assert = require('assert');

const sum = (...items) => {
  if (items.length > 0) {
    return items.reduce((acc, curr) => acc + curr);
  } else {
    return 0;
  }
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
