(function(){
	var globalBuyApp = angular.module('globalBuyApp', [
		'ngRoute',
		'loginMdl'
	]);

	globalBuyApp.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/login', {
			templateUrl: 'page/login.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/packageList', {
			templateUrl: 'page/packageList.html',
			controller: 'PackageListController'
		});
	}]);
})();