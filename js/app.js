(function(){
	var globalBuyApp = angular.module('globalBuyApp', [
		'ngRoute',
		'loginMdl',
		'packageMdl'
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

	globalBuyApp.directive('useClass', [function(){
		
		function link(scope, element, attrs){

			function updateClass(className, expression){
				if(scope.$eval(expression)){
					element.addClass(className);
				} else {
					element.removeClass(className);
				}
			}

			var attrItemArr = attrs['useClass'].split(':');
			var className = attrItemArr[0].trim();
			var expression = attrItemArr[1].trim();

			scope.$watch(expression, function(){
				updateClass(className, expression);
			}, true);
		}

		return {
			link:link
		};
	}]);
})();