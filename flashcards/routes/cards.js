const express = require('express');
const router = express.Router();

// require the data
const data = require('../data/flashcardData.json').data; // same way written as const {data} = ...
const cards = data.cards; // same way written as const {cards} = data

// including logic to randomize cards to display
router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardID = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardID}`);
});

// make second page route
router.get('/:id', (req, res) => { // ':' tells express to treat this part of the url as a variable, stored in request object param property
  const {side} = req.query;
  const {id} = req.params;

  if(!side) {
    return res.redirect(`/cards/${id}?side=question`) // if side does not exist on the card number, it will redirect
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  const {hint} = cards[id];

  const templateData = {id, text, name};
  // if statement for the hint to only show up when on the question side of the card, switch between the sides to show
  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';
  } else if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }
  res.render('card', templateData);
});

module.exports = router;