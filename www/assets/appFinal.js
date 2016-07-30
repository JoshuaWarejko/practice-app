var app = angular.module('app', [
	'app.routes',
	'ngCookies',
	'ngAnimate',
	'ngTouch',
	'ui.router',
	'ui.bootstrap',
	'app.controllers',
	'app.services',
	'app.directives'
	]);
app.run();
'use strict';

angular.module('app.controllers', [])

.controller('MainController', ["$scope", function($scope) {

}]);
'use strict';

angular.module('app.directives', [])

.directive('randomDirective', ["$scope", function($scope) {

}])

// Header for site
.directive('header', function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: '../templates/header.html'
	}
})
// Header for site
.directive('footer', function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: '../templates/footer.html'
	}
})
;
'use strict';

angular.module('app.routes', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {

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
	});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);
'use strict';

angular.module('app.services', [])

.service('RandomService', ["$scope", function($scope) {

}]);