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

  const templateData = {text};
  // if statement for the hint to only show up when on the question side of the card
  if (side === 'question') {
    templateData.hint = hint;
  }
  res.render('card', templateData);
});

module.exports = router;