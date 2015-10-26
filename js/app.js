(function(){
	var globalBuyApp = angular.module('globalBuyApp', [
		'ngRoute',
		'loginMdl',
		'packageApp',
		'ngAnimate',
		'ui.router'
	]);
	
	globalBuyApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'page/login.html',
				controller: 'LoginController'
			})
			.state('packageList', {
				templateUrl: 'page/packageListLayout.html'
			})
			.state('packageList.myPackages', {
				url: '/myPackages',
				templateUrl: 'page/packageList.html',
				controller: 'PackageListController'
			})
			.state('packageList.search', {
				url: '/search',
				templateUrl: 'page/packageListNew.html',
				controller: 'PackageListController'
			})
			.state('packageDetail', {
				url: '/packageDetail/:id',
				templateUrl: 'page/packageDetail.html',
				controller: 'PackageDetailController'
			});
	}]);
})();