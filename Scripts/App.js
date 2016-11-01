(function () {
	var app = angular.module("lerniaChat", ["ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider
		.when("/main",
		{
			templateUrl: "/Views/main.html",
			controller: "MainController"
		})
		.when("/channels",
		{
			templateUrl: "/Views/channel.html",
			controller: "ChannelController"
		})
		.when("/admin", {
			templateUrl: "Views/admin.html",
			controller: "AdminController"
		})
		.otherwise({redirectTo : "/main" });

});
}());