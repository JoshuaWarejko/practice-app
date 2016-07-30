var router = require('express').Router();
var User = require('../../models/user');

router.get('/users', function(req,res,next) {
	User.find(function(err, users) {
		if (err) { 
			return next(err) 
		} else {
			res.json(users);
		}
	});
});
router.post('/users', function(req,res,next) {
	// Confirm that user typed same password twice
	if(req.body.password !== req.body.confirmPassword) {
		var err = new Error('Passwords do not match');
		err.status = 400;
		return next(err);
	}
	// Create object from input
	var userData = new User({
		name: req.body.name,
		email: req.body.email,
		favoriteProgrammingLang: req.body.favoriteProgrammingLang,
		password: req.body.password
	});
	// use schema's create method to insert document into Mongo
	User.create(userData, function(error, user) {
		if(error) {
			return next(error);
		} else {
			req.session.userId = user._id;
			return res.redirect('/');
		}
	});
});

// POST /login
router.post('/login', function(req,res,next) {
	if(req.body.email && req.body.password) {
		User.authenticate(req.body.email, req.body.password, function(error, user) {
			if(error || !user) {
				var err = new Error('Wrong email or password.');
				err.status = 401;
				return next(err);
			} else {
				req.session.userId = user._id;
				res.send(req.user);
				return res.redirect('/profile');
			}
		});
	} else {
		var err = new Error("Email and password are required.");
		err.status = 401;
		return next(err);
	}
});

module.exports = router;