'use strict';

angular.module('app.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider

	// Homepage
	.state('index', {
		url: '/',
		templateUrl: 'views/home.html'
	});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});