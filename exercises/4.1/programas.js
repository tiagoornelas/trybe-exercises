let a = 2;
let b = 3;
let c = 7;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

let maior;

if (a > b) {
    maior = "A é maior que B";
} else if ( a == b) {
    maior = "A e B são iguais";
} else {
    maior = "B é maior que A";
}

console.log(maior);

let maiorDeTres;

if (a > b && a > c) {
    maiorDeTres = "A é o maior dos três.";
} else if (b > a && b > c) {
    maiorDeTres = "B é o maior dos três.";
} else if (c > a && c > b) {
    maiorDeTres = "C é o maior dos três;";
}

console.log(maiorDeTres);

let sinal;

if (a > 0) {
    sinal = "Positive";
} else if (a < 0) {
    sinal = "Negative";
} else {
    sinal = "Zero"
}

console.log(sinal);

let angulo1 = 90;
let angulo2 = 60;
let angulo3 = 30;

let isTriangle;

if ((angulo1 + angulo2 + angulo3) == 180) {
    isTriangle = true;
} else {
    isTriangle = false;
}

console.log(isTriangle);

let peca = "Peao";

switch(peca.toLowerCase()) { // Ref.: https://www.w3schools.com/jsref/jsref_tolowercase.asp#:~:text=The%20toLowerCase()%20method%20converts,a%20string%20to%20uppercase%20letters.
    case "peao":
        console.log("Movimenta apenas uma casa para frente e somente captura outras peças na diagonal.");
        break;
    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de L, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "torre":
        console.log("Movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case "bispo":
        console.log("Move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "rainha":
        console.log("Move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
        break;
    case "rei":
        console.log("Move-se em, todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    default:
        console.log("Nenhuma peça identificada.");
        break;
}

let nota = 75;

switch(true) { // Ref.: https://stackoverflow.com/questions/32576618/switch-statement-to-compare-values-greater-or-less-than-a-number/32576647

    case (nota < 50 && nota > 0):
        console.log("Sua nota é F.");
        break;
    case (nota >= 50 && nota < 60):
        console.log("Sua nota é E.");
        break;
    case (nota >= 60 && nota < 70):
        console.log("Sua nota é D.");
        break;
    case (nota >= 70 && nota < 80):
        console.log("Sua nota é C.");
        break;
    case (nota >= 80 && nota < 90):
        console.log("Sua nota é B.");
        break;
    case (nota >= 90 && nota <= 100):
        console.log("Sua nota é A.");
        break;
    default:
        console.log("Erro.");
        break;        
}

let isEven;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    isEven = true;
} else {
    isEven = false;
}

console.log(isEven);

let isOdd;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    isOdd = true;
} else {
    isOdd = false;
}

console.log(isOdd);

let custo = 500;
let venda = 900;
let lucro = venda - (custo * 1,2);

if (custo < 0 || venda < 0 || lucro < 0) {
    console.log("Erro. Algum valor abaixo de zero.")
} else {
    console.log(lucro);
}

let salarioBruto = 3500;
let INSS;
let IR;

switch(true) {
    case (salarioBruto <= 1556.94):
        INSS = (0.08 * salarioBruto);
        break;
    case (salarioBruto > 1556.94 && salarioBruto <= 2594.92):
        INSS = (0.09 * salarioBruto);
        break;
    case (salarioBruto > 2594.92 && salarioBruto <= 5189.82):
        INSS = (0.11 * salarioBruto);
        break;
    case (salarioBruto > 5189.82):
        INSS = 570.88;
        break;
    default:
        INSS = null;
        break;
}

switch(true) {
    case ((salarioBruto - INSS)<= 1903.98):
        IR = 0;
        break;
    case ((salarioBruto - INSS)> 1903.98 && (salarioBruto - INSS)<= 2826.65):
        IR = ((0.075 * (salarioBruto - INSS)) - 142.80);
        break;
    case ((salarioBruto - INSS)> 2826.65 && (salarioBruto - INSS)<= 3751.05):
        IR = ((0.15 * (salarioBruto - INSS)) - 354.80);
        break;
    case ((salarioBruto - INSS)> 3751.05 && (salarioBruto - INSS)<= 4664.68):
        IR = ((0.225 * (salarioBruto - INSS)) - 636.13);
        break;
    case ((salarioBruto - INSS)> 4664.68):
        IR = ((0.275 * (salarioBruto - INSS)) - 869.36);
        break;
    default:
        IR = null;
        break;
}

let salarioLiquido = (salarioBruto - INSS - IR);
console.log(salarioLiquido);