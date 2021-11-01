const calculateBMI = require('./bmi');
const readline = require('readline-sync');

const weight = readline.questionInt('What\'s your weight in kilos?');
const height = readline.questionFloat('What\'s your height in meters?');

console.log(calculateBMI(weight, height));
