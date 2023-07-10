const express = require('express');
const diceController = require('./diceController');
const cardController = require('./cardController');

const app = express();

app.get('/dice', diceController.rollDice);
app.get('/card', cardController.drawCard);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
