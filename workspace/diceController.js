const diceController = {
  rollDice: (req, res) => {
    const dice1Value = getRandomNumber(1, 6);
    const dice2Value = getRandomNumber(1, 6);

    res.json({ dice1_value: dice1Value, dice2_value: dice2Value });
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = diceController;
