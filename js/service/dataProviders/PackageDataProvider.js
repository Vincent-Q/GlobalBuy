(function(){
	var dataProviderModule = angular.module('dataProviderModule');

	dataProviderModule.factory('packageDataProvider', function(){
		var package = {
			id:'pck01',
			itemList:[{
				id: '001',
				productId: 'p01',
				quantity: 2,
				totalPrice: 19.8
			}, {
				id: '002',
				productId: 'p02',
				quantity: 8,
				totalPrice: 115.92
			}, {
				id: '003',
				productId: 'p03',
				quantity: 2,
				totalPrice: 39.8,
			}, {
				id: '004',
				productId: 'p04',
				quantity: 2,
				totalPrice: 4,
			}, {
				id: '004',
				productId: 'p05',
				quantity: 5,
				totalPrice: 9
			}]
		};

		function PackageDataProvider(){

		}

		var proto = PackageDataProvider.prototype;

		proto.getPackageDataById = function(packageId){
			return package;
		};

		return new PackageDataProvider();
	});
})();