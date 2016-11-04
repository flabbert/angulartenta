(function () {
	var app = angular.module("lerniaChat");

	var AdminController = function ($scope, repository) {
		$scope.channels = null;

		var getAllChannels = repository.getAllChannels().then(
			function (data) {
				$scope.channels = data;
			});
		$scope.checkFavorite = function (id) {
			repository.checkFavorite(id);
		}
		$scope.deleteChannel = function(id) {
			repository.deleteChannel(id)
			.then(function () {
				getAllChannels();
			});
		};
		$scope.setFavorite = function (id) {
			repository.setFavorite(id)
				.then(function () {
					getAllChannels();

				});
		};
	};
	app.controller("AdminController", ["$scope","repository", AdminController]);
})();