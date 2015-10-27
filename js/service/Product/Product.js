(function(){
	var productMdl = angular.module('productModule');

	productMdl.factory('Product', function(){
		function Product(json){
			this.__json = json;
		}

		var proto = Product.prototype;

		proto.getPrice = function(unit){
			var length = this.__json.priceOptions.length;

			var price;
			for(var i=0; i<length; i++){
				price = this.__json.priceOptions[i];

				if(unit.toLowerCase() === price.unit.toLowerCase()){
					return price.value;
				}
			}
		};

		proto.toJson = function(){
			return this.__json;
		};

		return Product;
	});
})();