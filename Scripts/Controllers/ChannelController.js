(function () {
	var app = angular.module("lerniaChat");
	var channelController = function ($scope, repository) {
		$scope.channels = null;
		$scope.messages = null;
		$scope.name = null;
		var getAllChannels = function() {
			repository.getAllChannels()
				.then(function(response) {
					console.log(response);
					$scope.channels = response;
					$scope.$apply();
				});
		};
		$scope.getMessages = function(id) {
			repository.getMessages(id)
				.then(function (response) {
					$scope.messages = response.messages;
				});
		};
		$scope.addChannel = function(name) {
			repository.addChannel(name);
			getAllChannels();

		};
		$scope.deleteChannel = function(id) {
			repository.deleteChannel(id).then(function() {
				getAllChannels();
			});

		};
		getAllChannels();

	};
	app.controller("ChannelController", ["$scope","repository", channelController]);
})();