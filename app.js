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
app.use
app.use('/auth', authRouter);

app.get('/signup', (req, res) => {
  res.render('signup');
});

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.get('/dashboard', (req, res) => {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
    { name: 'Tux', organization: "Linux", birth_year: 1996 },
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('dashboard', {
    mascots: mascots,
    tagline: tagline
  });
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
    res.render('index');
  }
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});

// app.post('/signup', (req, res) => 
// Facebook  ----> ask for mobile, password
// Aakash: -----> Submit click
// facebook ----> please enter all fields
// Akash  ---> enter email, enter password
// Facebook -----> Chaeck credentials from db by mobile number
// Facebook -----> mobile number not exist?
// Facebook ----> Please create an account first
// Facebook ----> if mobile number found
// Facebook ----f> acebook will validate password
// facebook ----> password is worng
// akash ----> new correct password
// facebook ---> mobile , password
// facebook ---> create session
// facebook ----> redirect to main page
//https://www.figma.com/file/5mMBPPZEakGtd5QANwSHQH/Untitled?type=whiteboard&node-id=0%3A1&t=jH2r426VKUCovNRg-1