var express = require('express');
var path = require('path');
var session = require('express-session');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://flyeraa0408:1TY9CJdIbxYyKife@cluster0.k4i1iki.mongodb.net/node-database', {
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection established');
});


var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
var authRouter = require('./routes/auth');
var packageRouter = require('./routes/package');
app.use('/auth', authRouter);
app.use('/', packageRouter);

app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/package', (req, res) => {
  res.render('partials/package');
});
app.get('/staff', (req, res) => {
  res.render('partials/staff');
});
app.get('/booking', (req, res) => {
  res.render('partials/staff');
});

// res.render('dashboard');
// });

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {

  if (req.session.views) {
    req.session.views++;
    res.send(`You have visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.render('login');
  }
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});

//https://www.figma.com/file/5mMBPPZEakGtd5QANwSHQH/Untitled?type=whiteboard&node-id=0%3A1&t=jH2r426VKUCovNRg-1