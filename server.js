'use strict';

// bring in our dependencies 

const express = require('express');
const superagent = require('superagent');
const cors = require('cors');

require('dotenv').config();

// create PORT
const PORT = process.env.PORT || 3000;

// instantiate express app
const app = express();

// cors
app.use(cors());

// Where our server will look for pages to serve to the browser. Is this "serving our static CSS files??"
app.use(express.static('./public'));

// Decode our POST data - makes sure our data doesn't show in the URL
app.use(express.urlencoded({ extended: true }));

// Set default view engine
app.set('view engine', 'ejs');


// Start our server
app.listen(PORT, () => console.log(`Now listening on port ${PORT}.`));


