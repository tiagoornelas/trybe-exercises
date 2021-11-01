window.onload = function () {
  let clickCount = 0;
  document.querySelector('span').innerHTML = clickCount;

  document.querySelector('button').addEventListener('click', function () {
    clickCount += 1;
    document.querySelector('span').innerHTML = clickCount;
  });
};
