const express = require('express');
const Gif = require('../db/models/gifModel');
const router = express.Router();

router.get('/', (req, res) => {
	Gif.find({})
		.then((gifs) => {
			res.json(gifs);
		})
		.catch(console.error);
});

router.post('/', (req, res) => {
	Gif.create(req.body)
		.then((gif) => {
			Gif.find({}).then((gifs) => {
				res.json(gifs);
			});
		})
		.catch(console.error);
});
router.put('/:id/', (req, res) => {
	Gif.findByIdAndUpdate(req.params.id, req.body)
		.then((gif) => {
			Gif.find({}).then((gifs) => {
				res.json(gifs);
			});
		})
		.catch(console.error);
});
router.delete('/:id/', (req, res) => {
	Gif.findByIdAndDelete(req.params.id)
		.then((gif) => {
			Gif.find({}).then((gifs) => {
				res.json(gifs);
			});
		})
		.catch(console.error);
});

module.exports = router;
