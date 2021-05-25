const createEmail = (nome) => {
  let array = nome.toLowerCase();
  array = array.split(' ');
  let email = array[0];
  for (let index = 1; index < array.length; index += 1) {
    email += `_${array[index]}`;
  }
  email += `@trybe.com`;
  return email;
};

const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees());
