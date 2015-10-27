(function(){
	var packageModule = angular.module('packageModule');

	packageModule.factory('packageService', ['packageDataProvider', 'Package', function(pckDataProvider, Package){
		var getPackageById = function(pckId){
			var pckData = pckDataProvider.getPackageDataById(pckId);
			var pckObject = new Package(pckData);
			return pckObject.toJson();
		};

		var calculateProductTotalPrice = function(pckId, productId, unit){
			var pckData = pckDataProvider.getPackageDataById(pckId);
			var pckObject = new Package(pckData);

			return pckObject.calculateProductTotalPrice(productId, unit);
		};

		return {
			'getPackageById': getPackageById,
			'calculateProductTotalPrice': calculateProductTotalPrice
		};
	}]);
})();