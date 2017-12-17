const express = require('express');
const router = express.Router();

// make second page route
router.get('/', (req, res) => {
  res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whoes tomb it is"});
});

module.exports = router;