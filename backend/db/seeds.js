const Gif = require('./models/gifModel');

const seedData = require('./seeds.json');

Gif.remove({})
	.then(() => {
		console.log('inserting data');
		console.log('Seed data', seedData);
		Gif.collection.insertMany(seedData);
	})
	.then(() => {
		process.exit();
	});
