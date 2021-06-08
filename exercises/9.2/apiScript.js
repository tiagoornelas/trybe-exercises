// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then(
      (data) => (document.querySelector('#jokeContainer').innerHTML = data.joke)
    );
};

async function crazyArray() {
  let arr = [];
  for (let index = 0; index < 10; index += 1) {
    let number = Math.round(Math.random() * 50);
    arr.push(number);
  }
  arr = arr.map((number) => number * number);
  let sum = arr.reduce((acc, curr) => acc + curr);
  if (sum < 8000) {
    return sum;
  }
  throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
}

crazyArray()
  .then((msg) => {
    let arr = [msg * 2, msg * 3, msg * 5, msg * 10];
    return arr;
  })
  .then((arr) => console.log(arr.reduce((acc, curr) => acc + curr)))
  .catch((e) => console.log(e));

window.onload = () => fetchJoke();
