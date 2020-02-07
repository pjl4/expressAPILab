const express = require('express');
const Gif = require('../db/models/gifModel');
const router = express.Router();

router.get('/', (req, res) => {
  Gif.find({})
    .then(gifs => {
      res.json(gifs);
    })
    .catch(console.error);
});

router.post('/', (req, res) => {
  Gif.create(req.body)
    .then(gif => {
      res.redirect('/');
    })
    .catch(console.error);
});

module.exports = router;
