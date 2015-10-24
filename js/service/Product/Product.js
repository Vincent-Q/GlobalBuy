(function(){
	var productMdl = angular.module('productModule', []);

	productMdl.factory('Product', function(){
		function Product(){}

		var proto = Product.prototype;

		return Product;
	});
})();