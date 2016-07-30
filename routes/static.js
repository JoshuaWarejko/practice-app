var express = require('express');
var router = require('express').Router();

router.get('*', function(req,res) {
	res.sendFile('/index.html', { root: __dirname + "/../www" });
});

module.exports = router;