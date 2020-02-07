const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gif', function(error) {
	if (error) console.log(error);
	console.log('connected to mongoDB');
});

module.exports = mongoose;
