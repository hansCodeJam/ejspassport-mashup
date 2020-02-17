const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');
const users = require('./models/randomUser')

require('dotenv').config();
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/movies', (req, res) => {
    res.render('main/movies');
    })

app.get('/random;', (req, res) => {
    res.render('main/random', {users})
})

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})