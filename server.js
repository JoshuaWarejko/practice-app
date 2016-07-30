'use strict';

debugger;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// mongodb connection
mongoose.connect("mongodb://localhost:27017/practiceapp", function() {
	console.log("Mongodb Successfully Connected");
});
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
  secret: 'treehouse loves you',  // String used to sign session id cookie
  resave: true,     // forces session to be saved in the session store whether anything changed or not
  saveUninitialized: false      // forces uninitialized session to be saved in session store. New and not yet saved session.
}));

// Make user ID available in templates
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.userId;
  next();
});

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/api/routes'));

app.use(express.static(__dirname + '/www'));
app.use('*', require('./routes/static'));

var server = app.listen(port, function() {
	console.log('Server listening on', port);
});