(function(){
	var mdl = angular.module('packageMdl', []);

	mdl.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/packageList/search', {
			templateUrl: 'page/Search.html',
			controller: 'PackageListController'
		});
	}]);

	mdl.controller('PackageListController', function(){
		this.activeTab = "My Packages";

		this.packageList = [{
			'status': 'preparing',
			'deliveryDate': '2015.10.07',
			'goods': ' lush , Aptmil Milk Powder ',
			'price': '$33.5'
		}, {
			'status': 'delivery',
			'deliveryDate': '2015.09.30',
			'goods': ' lush , Hipp Milk Powder ',
			'price': '$37.5'
		}, {
			'status': 'finished',
			'deliveryDate': '2015.09.25',
			'goods': ' lush , Aptmil Milk Powder ',
			'price': '$89.5'
		}, {
			'status': 'finished',
			'deliveryDate': '2015.09.20',
			'goods': ' Sausage , Hipp Milk Powder ',
			'price': '$67.5'
		}, {
			'status': 'finished',
			'deliveryDate': '2015.09.15',
			'goods': ' lush , Aptmil Milk Powder ',
			'price': '$33.5'
		}];

		this.click = function(activeTab){
			this.activeTab = activeTab;
		};
	});
})();