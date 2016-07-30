'use strict';

debugger;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// mongodb connection
mongoose.connect("mongodb://localhost:27017/practiceapp", function() {
	console.log("Mongodb Successfully Connected");
});
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/www'));

app.use('*', require('./static'));

var server = app.listen(port, function() {
	console.log('Server listening on', port);
});