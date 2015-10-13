(function(){
	var globalBuyApp = angular.module('globalBuyApp', [
		'ngRoute',
		'loginMdl',
		'packageMdl',
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
			});
	}]);

	globalBuyApp.directive('useClass', [function(){
		
		function link(scope, element, attrs){

			function updateClass(className, expression){
				if(scope.$eval(expression)){
					element.addClass(className);
				} else {
					element.removeClass(className);
				}
			}

			function watch(className, expression){
				scope.$watch(expression, function(){
					updateClass(className, expression);
				}, true);
			}

			var attArr = attrs['useClass'].split(';');

			for(var i=0; i<attArr.length; i++){
				var attrItemArr = attArr[i].split(':');
				var className = attrItemArr[0].trim();
				var expression = attrItemArr[1].trim();

				watch(className, expression);
			}
		}

		return {
			link:link
		};
	}]);
})();