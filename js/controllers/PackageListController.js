(function(){
	var mdl = angular.module('packageMdl', []);

	mdl.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/packageList/search', {
			templateUrl: 'page/Search.html',
			controller: 'PackageListController'
		});
	}]);

	mdl.controller('PackageListController', ['$state', function($state){
		this.__activeTab = $state.$current.name;

		this.packageList = [{
			'id': 1,
			'status': 'preparing',
			'deliveryDate': '2015.10.07',
			'goods': ' lush , Aptmil Milk Powder ',
			'price': '$33.5'
		}, {
			'id': 2,
			'status': 'delivery',
			'deliveryDate': '2015.09.30',
			'goods': ' lush , Hipp Milk Powder ',
			'price': '$37.5'
		}, {
			'id': 3,
			'status': 'finished',
			'deliveryDate': '2015.09.25',
			'goods': ' lush , Aptmil Milk Powder ',
			'price': '$89.5'
		}, {
			'id': 4,
			'status': 'finished',
			'deliveryDate': '2015.09.20',
			'goods': ' Sausage , Hipp Milk Powder ',
			'price': '$67.5'
		}, {
			'id': 5,
			'status': 'finished',
			'deliveryDate': '2015.09.15',
			'goods': ' lush , Aptmil Milk Powder ',
			'price': '$33.5'
		}];

		this.selectMyPackages = function(){
			this.__activeTab = 'packageList.myPackages';
		};

		this.selectSearch = function(){
			this.__activeTab = 'packageList.search';
		};

		this.isMyPackagesActive = function(){
			return this.__activeTab === 'packageList.myPackages';
		};

		this.isSearchActive = function(){
			return this.__activeTab === 'packageList.search';
		};

		this.clickItem = function(index){
			var selectedItem = this.packageList[index];
			if(selectedItem){
				$state.go('packageDetail', {'id': selectedItem.id});
			}
		};
	}]);
})();