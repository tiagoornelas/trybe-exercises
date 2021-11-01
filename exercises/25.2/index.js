const setTimeoutPromise = require('./setTimeout');
const getPokemonInRange = require('./getPokemonInRange');
const fs = require('fs');
// const axios = require('axios');
// console.log('Hello, world!');

async function main() {
  try {
    // await setTimeoutPromise();
    // console.log('Time passed');
    // console.log('End of main');
    // const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    // console.log(response.data.name);
    // const pokes = await getPokemonInRange(1,10);
    // console.log(pokes);
    const pokemons = await fs.promises.readFile('pokemons.txt');
    console.log(pokemons.toString());
  } catch(err) {
    console.log('Erro: ', err.message);
  }
}

main();
