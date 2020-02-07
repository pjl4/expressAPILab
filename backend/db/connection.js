const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gifs', function(error) {
	if (error) console.log(error);
	console.log('connected to mongoDB');
});

module.exports = mongoose;
