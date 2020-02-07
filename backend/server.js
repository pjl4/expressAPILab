const express = require('express');
const app = express();
const gifController = require('./controllers/gifController');
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use('/gifs', gifController);
//server setup
app.listen(3000, () => {
  console.log('App is running on port 3000');
});
