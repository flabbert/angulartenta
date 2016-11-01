(function () {
	var app = angular.module("lerniaChat");

	var MainController = function ($scope,$route) {
		$scope.route = $route;
	};
	app.controller("MainController", ["$scope", "$route", MainController]);
})();