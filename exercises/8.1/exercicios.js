// 1

const createEmail = (nome) => {
  let array = nome.toLowerCase();
  array = array.split(' ');
  let email = array[0];
  for (let index = 1; index < array.length; index += 1) {
    email += `_${array[index]}`;
  }
  email += `@trybe.com`;
  return email;
};

const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees());

// 2
const checkWin = (a, b) =>
  a === b ? 'Parabéns você ganhou!' : 'Tente novemente!';

const guess = (numb, funct) => {
  let random = parseInt(Math.random() * 5);
  console.log(funct(random, numb));
};

guess(4, checkWin);

// 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctExam = (right, student) => {
  let grade = 0;
  for (let answer in right) {
    if (right[answer] !== student[answer]) {
      grade -= 0.5;
    } else {
      grade += 1;
    }
  }
  console.log(grade);
};

const exam = (a, b, funct) => {
  funct(a, b);
};

exam(rightAnswers, studentAnswers, correctExam);
