const { TestWatcher } = require('@jest/core');

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

test('Exercício 1', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
});
test('Exercício 2', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
});
test('Exercício 3', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  expect(randomNumber(10, 2, 5)).toBe(100);
  expect(randomNumber).toHaveBeenCalled();
});
test('Exercício 3.1', () => {
  randomNumber = jest.fn().mockReset();
  randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
  expect(randomNumber(10)).toBe(20);
  expect(randomNumber).toHaveBeenCalled();
});

function uppercase(str) {
  return str.toUpperCase();
}

function firstLetter(str) {
  return str.split('')[0];
}

function concat(str1, str2) {
  return str1 + str2;
}

test('Testa função uppercase', () => {
  expect(uppercase('teste')).toBe('TESTE');
});
test('Testa função firstLetter', () => {
  expect(firstLetter('teste')).toBe('t');
});
test('Testa função concat', () => {
  expect(concat('teste', 'testando')).toBe('testetestando');
});
test('Exercícios 4 e 5', () => {
  uppercase = jest.fn().mockImplementationOnce((str) => str.toLowerCase());
  firstLetter = jest.fn().mockImplementationOnce((a) => {
    const arr = a.split('');
    const last = arr.length - 1;
    return arr[last];
  });
  concat = jest.fn().mockImplementationOnce((a, b, c) => a + b + c);

  expect(uppercase('TESTE')).toBe('teste');
  expect(firstLetter('teste')).toBe('e');
  expect(concat('teste', 'testando', 'testandomuito')).toBe(
    'testetestandotestandomuito'
  );

  uppercase = jest.fn().mockReset();
  uppercase = jest.fn().mockImplementationOnce((str) => str.toUpperCase());
  expect(uppercase('teste')).toBe('TESTE');
});

function fetchDog() {
  return fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

describe('Exercício 6', () => {
  fetchDog = jest.fn();
  afterEach(fetchDog.mockReset);

  test('Testando sucesso', async () => {
    fetchDog.mockResolvedValue('request sucess');

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog()).resolves.toBe('request sucess');
  });

  test('Testando falha', async () => {
    fetchDog.mockRejectedValue('request failed');
    expect(fetchDog()).rejects.toMatch('request failed');
  });
});
