(function(){
	var packageMdl = angular.module('packageMdl');

	packageMdl.controller('PackageDetailController', ['$scope', function($scope){
		$scope.listOption = {
			dataList: [{
					previewUrl: 'stub/images/preview/lush.jpg',
					sourceUrl: 'stub/images/preview/lush.jpg'
				}, {
					previewUrl: 'stub/images/preview/aptamil.jpg',
					sourceUrl: 'stub/images/source/aptamil.jpg',
					product: {
						name: 'Aptamil Kindermilch 2+',
						price: 14.49,
						quantity: 8,
						totalPrice: 115.92,
					}
				}, {
					previewUrl: 'stub/images/preview/lamy.jpg',
					sourceUrl: 'stub/images/preview/lamy.jpg'
				}, {
					previewUrl: 'stub/images/preview/sausage.jpg',
					sourceUrl: 'stub/images/preview/sausage.jpg'
				}, {
					previewUrl: 'stub/images/preview/choclate.jpg',
					sourceUrl: 'stub/images/preview/choclate.jpg'
				}],
			windowSize: 3,
			focusPos: 1,
			onFocus: function(data){
				$scope.product = data.product;
				$scope.sourceUrl = data.sourceUrl;
			}
		};

		$scope.sourceUrl = $scope.listOption.dataList[1].sourceUrl;
		$scope.product = $scope.listOption.dataList[1].product;
	}]);
})();