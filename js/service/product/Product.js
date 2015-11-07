(function(){
	var productMdl = angular.module('productModule');

	productMdl.factory('Product', ['Money', function(Money){
		function Product(json){
			this.__json = json;

			this.__parseJson(json);
		}

		var proto = Product.prototype;

		/******************************************************************************
		 * ****************  Begin: do refactoring of Package   ***********************
		 ******************************************************************************/

		proto.__parseJson = function(json){
			this.__id = json.id;
			this.__name = json.name;
			this.__sourceUrl = json.sourceUrl;
			this.__previewUrl = json.previewUrl;

			this.__priceOptions = [];
			var length = json.priceOptions.length;
			for(var i=0; i<length; i++){
				var price = json.priceOptions[i];
				this.__priceOptions.push(new Money(price.value, price.unit));
			}
		};

		proto.getId = function(){
			return this.__id;
		};

		/**
		 * get price of specified currency unit, name to be changed to "getPrice"
		 * @param  {String} unit options are 'euro', 'rmb', etc. Capital case ignorance.
		 * @return {Money}      found price object, if no matched unit found, 0 value money will be returned.
		 */
		proto.getPriceMoney = function(unit){
			var length = this.__priceOptions.length;
			for(var i=0; i<length; i++){
				var price = this.__priceOptions[i];
				if(price.isUnit(unit)){
					return price;
				}
			}

			return new Money(0);
		};

		/******************************************************************************
		 * ****************  End: do refactoring of Package   ***********************
		 ******************************************************************************/

		proto.toJsonOld = function(){
			return this.__json;
		};

		proto.toJson = function(){
			var json = {
				id: this.__id,
				name: this.__name,
				sourceUrl: this.__sourceUrl,
				previewUrl: this.__previewUrl,
				priceOptions: []
			};

			var price;
			for(var i=0, l=this.__priceOptions.length; i<l; i++){
				price = this.__priceOptions[i];
				json.priceOptions.push(price.toJson());
			}

			return json;
		};

		return Product;
	}]);
})();