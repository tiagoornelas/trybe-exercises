const { a, b, sayHello } = require('./hello');
const { bmi } = require('./bmi');
const readline = require('readline-sync');

const askName = () => {
  const name = readline.question('What\'s your name?\n');
  return name
}

// sayHello('Tiago');

// console.log(a + b);

const askWeight = () => {
  const weight = readline.questionFloat('Weight in kg?\n');
  return weight
};

const askHeight = () => {
  const height = readline.questionFloat('Height in m?\n');
  return height;
}

const main = () => {
  const name = askName();
  console.log(`${name} Your BMI is `, bmi(askWeight(), askHeight()));
}

main();

// O ideal é criar uma função main que será a unica coisa a ser executada em todo o modulo, o resto será apenas declaração.
// Top level (nível global), apenas o main() será executado;