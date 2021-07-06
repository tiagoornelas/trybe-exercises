import React from 'react';
import Input from './Input';
import States from './States';

class Fieldset extends React.Component {
  render() {
    return (
      <fieldset>
        <Input label="Nome" type="text" maxlength="40" />
        <Input label="E-mail" type="text" maxlength="50" />
        <Input label="CPF" type="text" maxlength="11" />
        <Input label="Endereço" type="text" maxlength="200" />
        <Input label="Cidade" type="text" maxlength="28" />
        <States label="Estado" />
      </fieldset>
    );
  }
}

export default Fieldset;
