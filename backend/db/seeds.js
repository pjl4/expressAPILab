const Gif = require('./models/gifModel');

const seedData = require('./seeds.json');

Gif.remove({})
	.then(() => {
		Gif.collection.insert(seedData);
	})
	.then(() => {
		process.exit();
	});
