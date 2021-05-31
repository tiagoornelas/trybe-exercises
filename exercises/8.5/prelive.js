// Faça uma lista com as suas frutas favoritas
const specialFruit = ['pêra', 'banana', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'nutella', 'sucrilhos'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));

// resto dos exercicios pre live

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [saudacao = 'Olá'] = saudacoes;
console.log(saudacao);

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const print = ['gato', 'água', 'arroz'];

const [printOne, printTwo, printThree] = print;

console.log(printOne, printTwo, printThree);

//EXERCICIO 3 PG 2

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

[...numerosPares] = numerosPares;
console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// OUTRO EXERCICIO

const getNationality = ({ firstName, nationality = 'Brazilian' }) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const { nationality = 'Brazilian' } = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// OUTRO EXERCICIO

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

//EXERCICIO FINAL

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
