(function(){
	var globalBuyApp = angular.module('globalBuyApp');

	globalBuyApp.factory('packageService', function(){
		var getPackageById = function(id){
			return {
				'itemList':[{
					previewUrl: 'stub/images/preview/lush.jpg',
					sourceUrl: 'stub/images/source/lush.jpg',
					product:{
						name: 'Lush New Soap',
						price: 7.9,
						quantity: 2,
						totalPrice: 19.8,
						unit:'euro'
					}
				}, {
					previewUrl: 'stub/images/preview/aptamil.jpg',
					sourceUrl: 'stub/images/source/aptamil.jpg',
					product:{
						name: 'Aptamil Kindermilch 2+',
						price: 14.49,
						quantity: 8,
						totalPrice: 115.92,
						unit:'euro'
					}
				}, {
					previewUrl: 'stub/images/preview/lamy.jpg',
					sourceUrl: 'stub/images/source/lamy.jpg',
					product:{
						name: 'Lamy Pen',
						price: 18.9,
						quantity: 2,
						totalPrice: 39.8,
						unit: 'euro'
					}
				}, {
					previewUrl: 'stub/images/preview/sausage.jpg',
					sourceUrl: 'stub/images/source/sausage.jpg',
					product: {
						name: 'German Sausage',
						price: 2,
						quantity: 2,
						totalPrice: 4,
						unit: 'euro'
					}
				}, {
					previewUrl: 'stub/images/preview/choclate.jpg',
					sourceUrl: 'stub/images/source/choclate.jpg',
					product: {
						name: 'Lindt Choclate',
						price: 1.8,
						quantity: 5,
						totalPrice: 9,
						unit: 'euro'
					}
				}]
			};
		};

		return {
			'getPackageById': getPackageById
		};
	});
})();