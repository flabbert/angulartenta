(function () {
	var app = angular.module("lerniaChat");

	var ChannelController = function ($scope) {
		console.log("channelcontroller");
	};
	app.controller("ChannelController", ["$scope", ChannelController]);
})();