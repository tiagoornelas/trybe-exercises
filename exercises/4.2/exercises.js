let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let groceryItem = 0; groceryItem < groceryList.length; groceryItem += 1) {
    console.log(groceryList[groceryItem]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let person of names) {
    console.log(person);
}