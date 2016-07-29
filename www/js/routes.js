'use strict';

angular.module('app.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider

	// Homepage
	.state('index', {
		url: '/',
		templateUrl: 'views/home.html'
	})
	// Register
	.state('index.register', {
		url: 'register',
		templateUrl: 'views/register.html',
	});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});