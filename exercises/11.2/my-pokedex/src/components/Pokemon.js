import React from 'react';

class Pokemon extends React.Component {
  render() {
    const obj = this.props.obj;
    return (
      <article>
        <img src={obj.image} alt={obj.name}></img>
        <br />
        <span>Name: {obj.name}</span>
        <br />
        <span>Tipo: {obj.type}</span>
        <br />
        <span>
          Peso: {obj.averageWeight.value} {obj.averageWeight.measurementUnit}
        </span>
      </article>
    );
  }
}

export default Pokemon;
