const cardService = require('./cardService');

const cardController = {
  drawCard: (req, res) => {
    const cardValue = cardService.getRandomCard();

    res.json({ card_value: cardValue });
  },
};

module.exports = cardController;
