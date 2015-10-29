(function(){
	var packageModule = angular.module('packageModule');

	packageModule.factory('PackageItem', ['productService', 'Money', function(productService, Money){
		function PackageItem(json){
			this.__parseJson(json);
		}

		var proto = PackageItem.prototype;

		proto.__parseJson = function(json){
			this.__quantity = json.quantity;
			this.__product = productService.getProductById(json.productId);
		};

		proto.calculateItemPrice = function(unit){
			var priceMoney = this.__product.getPriceMoney(unit);
			return new Money(priceMoney.getValue() * this.__quantity, priceMoney.getUnit());
		};

		return PackageItem;
	}]);
})();