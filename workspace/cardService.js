const cardDeck = require('./cardDeck');

const cardService = {
  getRandomCard: () => {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    return cardDeck[randomIndex];
  },
};

module.exports = cardService;
