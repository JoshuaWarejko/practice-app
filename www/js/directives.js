'use strict';

angular.module('app.directives', [])

.directive('randomDirective', function($scope) {

})

// Header for site
.directive('header', function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: '../views/header.html'
	}
})

.directive('footer', function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: '../views/footer.html'
	}
})
;