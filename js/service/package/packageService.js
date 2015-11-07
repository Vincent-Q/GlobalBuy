(function(){
	var packageModule = angular.module('packageModule');

	packageModule.factory('packageService', ['packageDataProvider', 'Package', function(pckDataProvider, Package){
		function PackageService(){}

		var proto = PackageService.prototype;

		proto.getPackageById = function(pckId){
			var pckData = pckDataProvider.getPackageDataById(pckId);
			var pckObject = new Package(pckData);
			return pckObject.toJson();
		};

		proto.getPackageObjectById = function(pckId){
			var pckData = pckDataProvider.getPackageDataById(pckId);
			var pckObject = new Package(pckData);
			return pckObject;
		};

		proto.calculateProductTotalPrice = function(pckId, productId, unit){
			var package = this.getPackageObjectById(pckId);
			return package.calculateItemPrice(productId, unit).toJson();
		};

		return new PackageService();
	}]);
})();