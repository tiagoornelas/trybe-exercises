const sayHello = (req, res, next) => {
  return res.status(200).send({
    message: 'Hello, fucking world!',
  })
}

module.exports = sayHello;
