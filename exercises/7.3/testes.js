const assert = require('assert');

function sum(a, b) {
  let result = a + b;
  return result;
}

const expected = sum(3, 5);

assert.strictEqual(expected, 8, 'Erro, malandro');

function isN(value) {
  return value === 'n';
}

function testFilter() {
  let teste = ['n', 's', 'l', 'o'].filter(isN).length;
  console.log(teste);
}

testFilter();
