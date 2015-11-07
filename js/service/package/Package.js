(function(){
	var packageModule = angular.module('packageModule');

	packageModule.factory('Package', ['productService', 'PackageItem', 'Money', function(productService, PackageItem, Money){
		function Package(json){
			this.__json = json;

			this.__parseJson(json);
		}

		var proto = Package.prototype;

		/******************************************************************************
		 * ****************  Begin: do refactoring of Package   ***********************
		 ******************************************************************************/

		proto.__parseJson = function(json){
			this.__id = json.id;

			this.__itemList = [];
			var length = json.itemList.length;
			for(var i=0; i<length; i++){
				this.__itemList.push(new PackageItem(json.itemList[i]));
			}
		};

		proto.calculatePackagePrice = function(unit){
			var totalPrice = new Money(0, unit), packageItem;
			for(var i=0; i<this.__itemList.length; i++){
				packageItem = this.__itemList[i];
				totalPrice = totalPrice.add(packageItem.calculateItemPrice(unit));
			}
			return totalPrice;
		};

		proto.calculateItemPrice = function(productId, unit){
			var packageItem;
			for(var i=0; i<this.__itemList.length; i++){
				packageItem = this.__itemList[i];
				if(packageItem.isBoundTo(productId)){
					return packageItem.calculateItemPrice(unit);
				}
			}

			return new Money(0);
		};

		/******************************************************************************
		 * ****************  End: do refactoring of Package   ***********************
		 ******************************************************************************/

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