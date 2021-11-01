const express = require('express');
const charactersRouter = require('./routers/characters');

const app = express();
const PORT = 3000;

app.use('/characters', charactersRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
