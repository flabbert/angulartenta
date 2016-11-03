(function () {
	var app = angular.module("lerniaChat");
	var channelController = function ($scope, repository,$interval,$filter) {
		$scope.channels = null;
		$scope.messages = null;
		$scope.name = null;
		$scope.countdown = 1;
		$scope.activeChannel = null;
		$scope.author = null;
		$scope.body = null;

		var onChannelLoad = function (response) {
			$scope.channels = response;
		};
		var onError = function (response) {
		// do error shit in here ty great job many
		};

		var getAllChannels = function () {
			repository.getAllChannels()
				.then(onChannelLoad, onError);
		};

		var poll = function () {
			getAllChannels();
			if ($scope.activeChannel) {
				$scope.getMessages($scope.activeChannel);
			}
		};
		$scope.getMessages = function(id) {
			repository.getMessages(id)
				.then(function (response) {
					$scope.activeChannel = id;
					$scope.messages = response.messages;
				});
		};
		$scope.addChannel = function(name) {
			repository.addChannel(name).then(function(){
				getAllChannels();
			});
		};
		$scope.deleteChannel = function(id) {
			repository.deleteChannel(id)
			.then(function() {
				getAllChannels();
				});
		};
		$scope.addMessage = function(id, author, body) {
			repository.addMessage(id, author, body)
				.then(function() {
					getAllChannels();
					$scope.getMessages(id);
					$scope.body = null;
				});
		};
		$scope.formatTime = function (time) {
			var date = new Date(time);
			var formatedtime = "["+date.getHours() + ":" + date.getMinutes()+"]";
			return formatedtime;
		};
		poll();


	};
	app.controller("ChannelController", ["$scope","repository","$interval","$filter", channelController]);
})();
