const express = require('express');
const errorCatch = require('./middlewares/error');

const app = express();

app.get('/health', (req, res, next) => {
  res.status(200).send({
    message: 'Api is online',
  })
});

const products = [
  {
    id: 1,
    nome: "cadeira",
    preco: 459.90,
  },
  {
    id: 2,
    nome: "mesa",
    preco: 959.90,
  },
  {
    id: 1,
    nome: "cama",
    preco: 859.90,
  },
];

const router = express.Router();

app.use('/product', (req, res, next) => {
  try {
    router;
  } catch(err) {
    next(err)
  }
});

router.get('/', (req, res, next) => {
  try {
    res.status(200).send(products);
  } catch(err) {
    next(err);
  }
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).send({ product: products[id] });
});

app.use(errorCatch);

app.listen(3000, () => console.log("Running on port 3000"));