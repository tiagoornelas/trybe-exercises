const sayHello = require('./controllers/sayHello');
const getNames = require('./controllers/getNames');
const auth = require('./middlewares/auth');
const catchErrors = require('./middlewares/catchErrors');
const create = require('./middlewares/handler');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/hello', sayHello);
app.get('/secure/hello', auth, sayHello);
app.get('/names', auth, getNames);

app.post('/names', auth, create);

app.use(catchErrors);

app.listen(3000, () => {
  console.log('App running on port 3000');
});
