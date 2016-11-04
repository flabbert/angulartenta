(function () {
	var app = angular.module("lerniaChat");

	var AdminController = function ($scope, repository) {
		$scope.drop = null;
		$scope.channels = null;
		$scope.addFav = null;
		$scope.remFav = null;
		var onChannelLoad = function (response) {
			$scope.channels = response;
		};
		var getAllChannels = function () {
			repository.getAllChannels()
				.then(onChannelLoad);
		};
		$scope.checkFavorite = function (id) {
			return repository.checkFavorite(id);
		};
		$scope.deleteChannel = function(id) {
			repository.deleteChannel(id)
			.then(function (response) {
				getAllChannels();
			});
		};
		$scope.setFavorite = function (id) {
			repository.setFavorite(id)
			getAllChannels();
		};
		$scope.unSetFavorite = function (id) {
			repository.unSetFavorite(id);
			getAllChannels();
		};
		$scope.addFavorite = function () {
			repository.setFavorite($scope.addFav.id);
			getAllChannels();
		};
		$scope.removeFavorite = function () {
			repository.unSetFavorite($scope.remFav.id);
			getAllChannels();
		};
		$scope.spawnofdarkness = function () {
			$scope.deleteChannel($scope.drop.id);
		};
		getAllChannels();
	};
	app.controller("AdminController", ["$scope","repository", AdminController]);
})();