(function(){
	var packageModule = angular.module('packageModule', []);

	packageModule.factory('packageService', function(){
		var getPackageById = function(id){
			return {
				'itemList':[{
					id: '001',
					product:{
						id:'p01',
						name: 'Lush New Soap',
						price: {
							value: 7.9,
							unit:'euro'
						},
						previewUrl: 'stub/images/preview/lush.jpg',
						sourceUrl: 'stub/images/source/lush.jpg'
					},
					quantity: 2,
					totalPrice: 19.8
				}, {
					id: '002',
					product:{
						id: 'p02',
						name: 'Aptamil Kindermilch 2+',
						price: {
							value: 14.49,
							unit: 'euro'
						},
						previewUrl: 'stub/images/preview/aptamil.jpg',
						sourceUrl: 'stub/images/source/aptamil.jpg'
					},
					quantity: 8,
					totalPrice: 115.92
				}, {
					id: '003',
					product:{
						id:'p03',
						name: 'Lamy Pen',
						price: {
							value: 18.9,
							unit: 'euro'
						},
						previewUrl: 'stub/images/preview/lamy.jpg',
						sourceUrl: 'stub/images/source/lamy.jpg'
					},
					quantity: 2,
					totalPrice: 39.8,
				}, {
					id: '004',
					product: {
						id: 'p04',
						name: 'German Sausage',
						price: {
							value: 2,
							unit: 'euro'
						},
						previewUrl: 'stub/images/preview/sausage.jpg',
						sourceUrl: 'stub/images/source/sausage.jpg'
					},
					quantity: 2,
					totalPrice: 4,
				}, {
					id: '004',
					product: {
						id: 'p05',
						name: 'Lindt Choclate',
						price: {
							value: 1.8,
							unit: 'euro'
						},
						previewUrl: 'stub/images/preview/choclate.jpg',
						sourceUrl: 'stub/images/source/choclate.jpg'
					},
					quantity: 5,
					totalPrice: 9
				}]
			};
		};

		return {
			'getPackageById': getPackageById
		};
	});
})();