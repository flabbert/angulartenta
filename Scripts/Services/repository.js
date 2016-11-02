(function() {
	var repository = function ($http) {
		var repositoryurl = "http://dummyapi.kodalagom.se/api/";
		var getAllChannels = function() {
			return $http.get("http://dummyapi.kodalagom.se/api/channels")
				.then(function(response) {
					return response.data;
				});
		};
		var getMessages = function(id) {
			return $http.get("http://dummyapi.kodalagom.se/api/channels/" + id)
				.then(function(response) {
					return response.data;
				});
		};
		var addChannel = function(name) {
			var data = {
				'name': name,
				'messages': []
			};
			return $http.post("http://dummyapi.kodalagom.se/api/channels", data)
				.then(
					function(response) {
						return response.data;
					}
				);
		};
		var deleteChannel = function (id) {
			return $http.delete("http://dummyapi.kodalagom.se/api/channels/" + id)
				.then(
					function (response) {
						return response.data;
					});
		};
		var addMessage = function (id, username, body) {
			var data = {
				'author': username,
				'body': body,
				'channelId': id
			};
			return $http.post(repositoryurl+"messages",data)
				.then(function (response) {
					return response.data;
				});
		};
		return {
			getAllChannels: getAllChannels,
			getMessages: getMessages,
			addChannel: addChannel,
			deleteChannel: deleteChannel,
			addMessage : addMessage
		};
	};
	var module = angular.module("lerniaChat");
	module.factory("repository", ["$http", repository]);
}());