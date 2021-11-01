import React from 'react';
import catalog from '../data';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return catalog.map((pokemon) => <Pokemon key={pokemon.id} obj={pokemon} />);
  }
}

export default PokeList;
