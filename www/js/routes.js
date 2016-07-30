'use strict';

angular.module('app.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider

	// Homepage
	.state('index', {
		url: '/',
		templateUrl: '/views/home.html'
	})
	// Register
	.state('register', {
		url: '/register',
		templateUrl: '/views/register.html',
	})
	// Login
	.state('login', {
		url: '/login',
		templateUrl: '/views/login.html',
	})
	// Profile
	.state('profile', {
		url: '/profile',
		templateUrl: '/views/profile.html',
	});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});