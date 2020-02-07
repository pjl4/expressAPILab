const express = require('express');
const app = express();
const gifController = require('./controllers/gifController');
const cors = require('cors');
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use('/gifs', gifController);
//server setup
app.listen(3000, () => {
	console.log('App is running on port 3000');
});
