const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Exercício 1', () => {
  test('Teste a função uppercase', (done) => {
    uppercase('teste', (str) => {
      expect(str).toBe('TESTE');
      done();
    });
  });
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('Exercício 2 e 3', () => {
  test('Testando função getUserName : usuário existente', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toBe('Mark');
    });
  });
  test('Testando função getUserName : usuário inexistente', () => {
    expect.assertions(1);
    return getUserName(7).catch((user) => {
      expect(user).toEqual({ error: 'User with 7 not found.' });
    });
  });
  test('Testando função getUserName : usuário existente com async', async () => {
    expect.assertions(1);
    const username = await getUserName(4);
    expect(username).toBe('Mark');
  });
  test('Testando função getUserName : usuário inexistente com async', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Exercício 4', () => {
  test('Testando função getRepos : To Do List', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(
      (repos) => {
        expect(repos).toContain('sd-01-week4-5-project-todo-list');
      }
    );
  });
  test('Testando função getRepos: Meme Generator', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(
      (repos) => {
        expect(repos).toContain('sd-01-week4-5-project-meme-generator');
      }
    );
  });
});

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }
      return reject({ error: 'Não possui esse animal.' });
    }, 100);
  });

const getAnimal = (name) => {
  return findAnimalByName(name).then((list) => list);
};
// ---------------------

describe('Exercício 6', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual({ error: 'Não possui esse animal.' })
      );
    });
  });
});

const findAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.age === age);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }
      return reject({ error: 'Não possui esse animal.' });
    }, 100);
  });

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then((list) => list);
};
// ---------------------

describe('Exercício 6.2', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(1).then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(70).catch((error) =>
        expect(error).toEqual({ error: 'Não possui esse animal.' })
      );
    });
  });
});
