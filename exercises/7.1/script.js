// Parte I

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderByNb = (array) => {
  // For para verificar qual é o menor de todos.
  // Depois pega esse menor, adiciona na ordenada e tira do resto
  let ordened = [];
  let lowestNumber;
  for (let number = 0; number < 6; number += 1) {
    for (let index = 1; index < array.length; index += 1) {
      if (array[index - 1] > array[index]) {
        lowestNumber = array[index - 1];
        array[index - 1] = array[index];
        array[index] = lowestNumber;
      }
    }
  }
  console.log(
    `Os números ${array.join(', ')} se encontram ordenados de forma crescente!`
  );
};

orderByNb(oddsAndEvens);

oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);

// Parte II

// Exercicio 1

const fatorial = (number) => {
  let result = number;
  for (let index = number - 1; index > 0; index -= 1) {
    result *= index;
  }
  console.log(result);
};

fatorial(4);

//Exercicio 2

const longestWord = (phrase) => {
  let words = phrase.split(' ');
  let bigOne = words[0];
  for (let index = 1; index < words.length; index += 1) {
    if (words[index].length > bigOne.length) {
      bigOne = words[index];
    }
  }
  console.log(bigOne);
};

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

const strReplace = (string, replacement) => {
  var myStr = string;
  var newStr = myStr.replace(/x/g, replacement);

  console.log(newStr);
};

let resultFct1 = 'Tryber x aqui!';
let skills = ['JavaScript', 'HTML', '#goTrybe'];

const concatFunctions = (function1, skills) => {
  console.log(
    `${function1} Minhas cinco principais habilidades são ${skills.join(', ')}!`
  );
};

concatFunctions(resultFct1, skills);
