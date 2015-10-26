(function(){
	var productMdl = angular.module('productModule');

	productMdl.factory('Product', function(){
		function Product(json){
			this.__json = json;
		}

		var proto = Product.prototype;

		proto.toJson = function(){
			return this.__json;
		};

		return Product;
	});
})();