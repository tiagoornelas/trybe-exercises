const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce(
    (acc, name) =>
      acc +
      name.split('').reduce((acumulator, nam) => {
        if (nam === 'a' || nam === 'A') return acumulator + 1;
        return acumulator;
      }, 0),
    0
  );
}

assert.deepStrictEqual(containsA(), 20);
