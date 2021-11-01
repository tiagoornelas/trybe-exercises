let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let item = 0; item < numbers.length; item += 1) {
    console.log(numbers[item]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let resultado = 0;
for (let item = 0; item < numbers.length; item += 1) {
    resultado += numbers[item];
}
console.log(`O resultado da soma é ${resultado}.`);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = resultado / numbers.length;
console.log(`A média do resultado é ${media}.`);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor ou igual a 20');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (let item = 0; item < numbers.length; item += 1) {
        if (numbers[item] > maiorValor) {
            maiorValor = numbers[item];
        }
    }
console.log(`O maior valor é ${maiorValor}!`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;
for (let item = 0; item < numbers.length; item += 1) {
    if (numbers[item] % 2 != 0) {
        numerosImpares += 1;
    }
}
if (numerosImpares > 0) {
    console.log(`Temos ${numerosImpares} número(s) ímpares!`);
} else {
    console.log(`Nenhum valor ímpar encontrado!`);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = maiorValor;

for (let item = 0; item < numbers.length; item += 1) {
        if (numbers[item] < menorValor) {
            menorValor = numbers[item];
        }
    }
console.log(`O menor valor é ${menorValor}!`);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (item = 1; item <= 25; item += 1) {
    array.push(item);
}

console.log(array);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayD2 = [];

for (indice = 0; indice < array.length; indice += 1) {
    arrayD2.push((array[indice]) / 2);
}

console.log(arrayD2);