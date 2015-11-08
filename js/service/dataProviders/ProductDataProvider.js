(function(){
	var dataProviderMdl = angular.module('dataProviderModule');

	dataProviderMdl.factory('productDataProvider', function(){
		var productMap = {
			'p01': {
				id:'p01',
				name: 'Lush New Soap',
				priceOptions: [{
					value: 7.9,
					unit:'euro'
				}],
				previewUrl: 'stub/images/preview/lush.jpg',
				sourceUrl: 'stub/images/source/lush.jpg'
			},
			'p02': {
				id: 'p02',
				name: 'Aptamil Kindermilch 2+',
				priceOptions: [{
					value: 14.49,
					unit: 'euro'
				}, {
					value: 70,
					unit: 'rmb'
				}],
				previewUrl: 'stub/images/preview/aptamil.jpg',
				sourceUrl: 'stub/images/source/aptamil.jpg'
			},
			'p03': {
				id:'p03',
				name: 'Lamy Pen',
				priceOptions: [{
					value: 18.9,
					unit: 'euro'
				}],
				previewUrl: 'stub/images/preview/lamy.jpg',
				sourceUrl: 'stub/images/source/lamy.jpg'
			},
			'p04': {
				id: 'p04',
				name: 'German Sausage',
				priceOptions: [{
					value: 2,
					unit: 'euro'
				}],
				previewUrl: 'stub/images/preview/sausage.jpg',
				sourceUrl: 'stub/images/source/sausage.jpg'
			},
			'p05': {
				id: 'p05',
				name: 'Lindt Choclate',
				priceOptions: [{
					value: 1.8,
					unit: 'euro'
				}],
				previewUrl: 'stub/images/preview/choclate.jpg',
				sourceUrl: 'stub/images/source/choclate.jpg'
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