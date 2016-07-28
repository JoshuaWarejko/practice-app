'use strict';

debugger;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/www'));

var server = app.listen(3000, function() {
	console.log('Server listening on', 3000);
});