'use strict';

debugger;

var express = require('express');

var app = express();

app.use('/', function(req,res) {
	res.sendFile(__dirname + '/www/index.html');
});

var server = app.listen(3000, function() {
	console.log('Server listening on', 3000);
});