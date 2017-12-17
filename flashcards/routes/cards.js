const express = require('express');
const router = express.Router();

// require the data
const data = require('../data/flashcardData.json').data; // same way written as const {data} = ...
const cards = data.cards; // same way written as const {cards} = data

// make second page route
router.get('/:id', (req, res) => { // ':' tells express to treat this part of the url as a variable, stored in request object param property
  const {side} = req.query;
  const {id} = req.params;
  const text = cards[id][side];
  const {hint} = cards[id];

  const templateData = {id, text};
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