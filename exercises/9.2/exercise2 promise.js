const randomArray = () => {
  let arr = [];
  for (let index = 0; index < 10; index += 1) {
    let number = Math.round(Math.random() * 50);
    arr.push(number);
  }
  arr = arr.map((number) => number * number);
  return arr.reduce((acc, curr) => acc + curr);
};

const result = (sum) => {
  const myPromise = new Promise((resolve, reject) => {
    sum < 8000
      ? resolve(sum)
      : reject('É mais de oito mil! Essa promise deve estar quebrada!');
  });
  myPromise
    .then((msg) => {
      const arr = [msg * 2, msg * 3, msg * 5, msg * 10];
      return arr;
    })
    .then((arr) => console.log(arr.reduce((acc, curr) => acc + curr)))
    .catch((e) => console.log(e));
};

result(randomArray());
