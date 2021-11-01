import React from 'react';

class Input extends React.Component {
  render() {
    const { label } = this.props;
    const states = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espirito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso do Sul',
      'Mato Grosso',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];
    return (
      <label>
        {label}
        <select>
          {states.map((state) => (
            <option>{state}</option>
          ))}
        </select>
      </label>
    );
  }
}

export default Input;
