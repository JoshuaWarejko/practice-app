'use strict';

angular.module('app.controllers', [])

.controller('MainController', function($scope) {

})
.controller('NavigationController', function ($scope, $location, $state) {
	$scope.isActive = function (viewLocation) {
		var active = (viewLocation === $location.path());
		return active;
	};
})
.controller('GetUserController', ['$scope', 'GetUsers', function($scope, GetUsers) {
	GetUsers.fetchUsers().then(function(response) {
		$scope.users = response.data;
	});
}]);