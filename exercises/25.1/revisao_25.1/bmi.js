const bmi = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(1);
}

module.exports = { bmi };