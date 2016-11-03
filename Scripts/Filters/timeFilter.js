(function () {
	var timeFilter = function () {
		return function(time){
			var date = new Date(time);
			var formatedtime = "[" + date.getHours() + ":" + date.getMinutes() + "]";
			return formatedtime;
		}
	};
	var module = angular.module("lerniaChat");
	module.filter("timeFilter", ["time",timeFilter]);
})();
