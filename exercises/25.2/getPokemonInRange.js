const axios = require('axios');
const fs = require('fs');

const getPokemonInRange = async (n, m) => {
  const promises = [];
  const pokemons = [];

  for (i = n; i <= m; i++) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    promises.push(response.data.name);
    // pokemons.push(response.data.name);
  }
  const results = await Promise.all(promises);
  results.forEach(async (res) => {
    await pokemons.push(res);
    await fs.promises.appendFile('pokemons.txt', `${res}\n`);
  });

  return pokemons;
}

module.exports = getPokemonInRange;