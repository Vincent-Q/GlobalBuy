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
			var pckObject = this.getPackageObjectById(pckId);
			return pckObject.calculateProductTotalPrice(productId, unit);
		};

		return new PackageService();
	}]);
})();