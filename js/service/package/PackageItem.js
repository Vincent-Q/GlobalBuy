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

		/**
		 * calculate price of this package item
		 * @param  {String} unit 'euro' or 'rmb'
		 * @return {Money}      money value object
		 */
		proto.calculateItemPrice = function(unit){
			var priceMoney = this.__product.getPriceMoney(unit);
			return priceMoney.multiply(this.__quantity);
		};

		/**
		 * check if this package item bound to the specified product
		 * @param  {String}  productId id of product to be checked.
		 * @return {Boolean}
		 */
		proto.isBoundTo = function(productId){
			return this.__product.getId() === productId;
		};

		return PackageItem;
	}]);
})();