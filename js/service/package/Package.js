(function(){
	var packageModule = angular.module('packageModule');

	packageModule.factory('Package', ['productService', function(productService){
		function Package(json){
			this.__json = json;
		}

		var proto = Package.prototype;

		proto.toJson = function(){
			var itemList = this.__json.itemList;
			for(var i=0; i<itemList.length; i++){
				var item = itemList[i];

				if(item.productId){
					var product = productService.getProductById(item.productId);
					item.product = product.toJson();
				}
			}

			return this.__json;
		};

		proto.calculateProductTotalPrice = function(productId, unit){
			var product = productService.getProductById(productId);
			return this.__findItem(productId).quantity * product.getPrice(unit);
		};

		proto.__findItem = function(productId){
			var length = this.__json.itemList.length;
			
			var item;
			for(var i=0; i<length; i++){
				item = this.__json.itemList[i];

				if(item.productId === productId){
					return item;
				}
			}
		};

		return Package;
	}]);
})();