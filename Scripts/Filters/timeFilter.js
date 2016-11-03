(function () {
	var timeFilter = function () {
		return function (time) {
			var date = new Date(time);
			var formatedtime = "[" + ("0" + date.getHours()).slice(-2) + ":" +
					("0" + date.getMinutes()).slice(-2) + ":" +
					("0" + date.getSeconds()).slice(-2) + "] ";
			return formatedtime;
		};
	};
	var module = angular.module("lerniaChat");
	module.filter("time", [timeFilter]);
})();
