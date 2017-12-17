const express = require('express');
const router = express.Router();

// require the data
const data = require('../data/flashcardData.json').data; // same way written as const {data} = ...
const cards = data.cards; // same way written as const {cards} = data

// make second page route
router.get('/:id', (req, res) => { // ':' tells express to treat this part of the url as a variable, stored in request object param property
  res.render('card', {
    prompt: cards[req.params.id].question, // using id property on params
    hint: cards[req.params.id].hint});
});

module.exports = router;