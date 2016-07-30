'use strict';

angular.module('app.directives', [])

.directive('randomDirective', function($scope) {

})

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