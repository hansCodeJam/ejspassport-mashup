const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || '3000';
const movies = require('./models/moviesList');
const users = require('./models/randomUser');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/movies', (req, res) => {
    res.render('main/movies', {movies});
    })

app.get('/random', (req, res) => {
    res.render('main/random', {users});
})

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})