'use strict';

debugger;

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// mongodb connection
mongoose.connect("mongodb://localhost:27017/bookworm", function() {
	console.log("Mongodb Successfully Connected");
});
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(__dirname + './www/assets'));
app.use('/js', express.static(__dirname + './www/js'));
app.use('/lib', express.static(__dirname + './www/lib'));
app.use('/scss', express.static(__dirname + './www/scss'));
app.use('/views', express.static(__dirname + './www/views'));

app.use('/', require('./static'));

var server = app.listen(3000, function() {
	console.log('Server listening on', 3000);
});