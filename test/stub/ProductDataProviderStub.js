(function(){
	var dataProviderMdl = angular.module('dataProviderModule', []);

	dataProviderMdl.factory('productDataProvider', function(){
		var productMap = {
			'001': {
				id:'001',
				name: 'Lush New Soap',
				price: {
					value: 7.9,
					unit:'euro'
				},
				priceOptions: [{
					value: 7.9,
					unit:'euro'
				}],
				previewUrl: 'stub/images/preview/lush.jpg',
				sourceUrl: 'stub/images/source/lush.jpg'
			},
			'002': {
				id: '002',
				name: 'Aptamil Kindermilch 2+',
				price: {
					value: 14.49,
					unit: 'euro'
				},
				priceOptions: [{
					value: 14.49,
					unit: 'euro'
				}, {
					value: 70,
					unit: 'rmb'
				}],
				previewUrl: 'stub/images/preview/aptamil.jpg',
				sourceUrl: 'stub/images/source/aptamil.jpg'
			}
		};

		function ProductDataProvider(){

		}

		var proto = ProductDataProvider.prototype;

		proto.getProductDataById = function(productId){
			return productMap[productId];
		};

		return new ProductDataProvider();
	});
})();