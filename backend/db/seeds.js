const Gif = require('./models/gifModel');

const seedData = require('./seeds.json');

Gif.remove({})
	.then(() => {
		console.log('inserting data');
		Gif.collection.insert(seedData);
	})
	.then(() => {
		process.exit();
	});
