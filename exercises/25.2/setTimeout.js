const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  })
}

module.exports = setTimeoutPromise;