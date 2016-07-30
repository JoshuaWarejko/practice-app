'use strict';

angular.module('app.services', [])

.service('RandomService', function($scope) {

})

.service('GetUsers', ['$http', function($http) {
	this.fetchUsers = function() {
		return $http.get("/api/users");
	};
}]);