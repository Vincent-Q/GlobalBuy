(function(){
	var productMdl = angular.module('productModule');

	productMdl.factory('productService', ['productDataProvider', 'Product', function(productDataProvider, Product){
		function ProductService(){

		}

		var proto = ProductService.prototype;

		proto.getProductById = function(productId){
			var productData = productDataProvider.getProductDataById(productId);
			var product = new Product(productData);

			return product;
		};

		return new ProductService();
	}]);
})();