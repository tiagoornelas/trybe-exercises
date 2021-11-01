const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
} = require('./exercise1.js');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Testa com Jest os exercicios do dia 7.3', () => {
  test('Testa a função sum', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(4, '5')).toEqual('parameters must be numbers');
  });
  test('Testa a função myRemove', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  test('Testa a função myRemoveWithoutCopy', () => {
    const arr2 = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr2, 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(arr2).not.toEqual([1, 2, 3, 4]);
  });
  test('Testa a função myFizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('dale')).toBe(false);
  });
  test('Testa os objetos', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
  });
});
