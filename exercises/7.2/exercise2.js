const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

function modifyObj(obj, x, y) {
  obj[x] = y;
  console.log(obj);
}

modifyObj(lesson2, 'turno', 'manhã');

// Exercício 2

function allKeys(obj) {
  console.log(Object.keys(obj));
}

allKeys(lesson1);

// Exercício 3

function objLength(obj) {
  console.log(Object.keys(obj).length);
}

objLength(lesson3);

// Exercício 4

function objEntries(obj) {
  console.log(Object.entries(obj));
}

objEntries(lesson2);

// Exercício 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// Exercício 6

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Exercício 7

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

// Exercício 8

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));
