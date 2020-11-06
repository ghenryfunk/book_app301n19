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

// Routes
// default route to test proof of life
app.get('/', function (req, res) {
  res.render('pages/index');
});

//render the Search Form
app.get('/searches/new', showForm);

// Create new search to Google Book API
app.post('/searches', createSearch);

//Creating handler functions
function showForm(req, res) {
  // // const URLAuthor = `https://www.googleapis.com/books/v1/volumes?q=${req}+intitle:${req}`;
  // // const URLTitle = `https://www.googleapis.com/books/v1/volumes?q=${req}+inauthor:${req}`;
  // const searchURL = {
  //   URLTitle: `https://www.googleapis.com/books/v1/volumes?q=${req}+intitle:${req}`,
  //   URLAuthor: `https://www.googleapis.com/books/v1/volumes?q=${req}+inauthor:${req}`
  // };
  res.render('pages/searches/new');
}



function createSearch(req, res) {
  console.log('hello route');
  let url = `https://www.googleapis.com/books/v1/volumes?q=`;

  console.log('req.body is ', req.body);
  console.log('req.body.search is ', req.body.search);

  if (req.body.sort === 'title') {
    url += `+intitle:${req.body.search}`;
  }
  if (req.body.sort === 'author') {
    url += `+inauthor:${req.body.search}`;
  }



  console.log(url);
  superagent
    .get(url)
    .then(apiResponse => {
      const newArr = apiResponse.body.items.map(
        bookResult => new Book(bookResult.volumeInfo)
      );
      res.render('pages/searches/show', { searchResults: newArr });
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).render('Something went wrong with the Book Results... maybe because you used .render instead of .send?');
    });
}

// Start our server
app.listen(PORT, () => console.log(`Now listening on port ${PORT}.`));

// Constructors
function Book(obj) {
  this.author = obj.authors;
  this.title = obj.title;
  this.description = obj.description;
  this.image_url =
    obj.imageLinks.thumbnail || 'https://i.imgur.com/J5LVHEL.jpg';
}

// Ternary Operator
