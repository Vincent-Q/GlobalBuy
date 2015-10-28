(function(){
	var packageModule = angular.module('packageModule');

	packageModule.factory('PackageItem', ['productService', function(productService){
		function PackageItem(json){
			this.__parseJson(json);
		}

		var proto = PackageItem.prototype;

		proto.__parseJson = function(json){
			this.__quantity = json.quantity;
			this.__product = productService.getProductById(json.productId);
		};

		proto.calculateItemPrice = function(unit){
			return 0;
		};

		return PackageItem;
	}]);
})();