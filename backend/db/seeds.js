const Gif = require('./models/gifModel');

const seedData = require('./seeds.json');

Gif.deleteMany({})
	.then(() => Gif.insertMany(seedData))
	.then(() => {
		process.exit();
	});
