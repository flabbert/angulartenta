(function() {
	var repository = function($http,$q) {
		var getAllChannels = function() {
			return $http.get("http://dummyapi.kodalagom.se/api/channels")
				.then(function(response) {
					return response.data;
				});
		}
		var getMessages = function(id) {
			return $http.get("http://dummyapi.kodalagom.se/api/channels/" + id)
				.then(function (response) {
					return response.data;
				});
		}
		var addChannel = function (name) {
			var data = {
				'name' : name,
				'messages' : []
			};
			$http.post("http://dummyapi.kodalagom.se/api/channels", data)
				.then(
					function(response) {
						return response.data;
					},
					function(response) {

					}
				);
		}
		var deleteChannel = function (id) {
			$http.delete("http://dummyapi.kodalagom.se/api/channels/" + id)
				.then(
					function (response) {
						return response.data;
					});
		};
		return {
			getAllChannels: getAllChannels,
			getMessages: getMessages,
			addChannel: addChannel,
			deleteChannel : deleteChannel
		};
	};
	var module = angular.module("lerniaChat");
	module.factory("repository", ["$http","$q", repository]);
}());