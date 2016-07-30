var app = angular.module('app', [
	'app.routes',
	'ngCookies',
	'ngAnimate',
	'ngTouch',
	'ui.router',
	'ui.bootstrap',
	'app.services',
	'app.controllers',
	'app.directives'
	]);
app.run();
'use strict';

angular.module('app.controllers', [])

.controller('MainController', ["$scope", function($scope) {

}])
.controller('NavigationController', ["$scope", "$location", "$state", function ($scope, $location, $state) {
	$scope.isActive = function (viewLocation) {
		var active = (viewLocation === $location.path());
		return active;
	};
}])
.controller('GetUserController', ['$scope', 'GetUsers', function($scope, GetUsers) {
	GetUsers.fetchUsers().then(function(response) {
		$scope.users = response.data;
	});
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
// Navigaion for header
.directive('navbar', function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: '../templates/navbar.html'
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

}]);
'use strict';

angular.module('app.services', [])

.service('RandomService', ["$scope", function($scope) {

}])

.service('GetUsers', ['$http', function($http) {
	this.fetchUsers = function() {
		return $http.get("/api/users");
	};
}]);