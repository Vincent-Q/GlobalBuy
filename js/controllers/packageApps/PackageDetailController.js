(function(){
	var packageMdl = angular.module('packageApp');

	packageMdl.controller('PackageDetailController', ['$scope', 'packageService', 'productService', function($scope, packageService, productService){
		var package = packageService.getPackageById(1);

		$scope.listOption = {
			dataList: package.itemList,
			windowSize: 3,
			focusPos: 1,
			onFocus: function(data){
				$scope.selectedItem = data;
			}
		};

		$scope.selectedItem = package.itemList[1];

		$scope.switchCurrencyUnit = function(unit){
			var pckId = $scope.selectedItem.id;
			var productId = $scope.selectedItem.product.id;

			$scope.selectedItem.product.price = {
				value: productService.getPrice(productId, unit),
				unit: unit
			};

			$scope.selectedItem.totalPrice = packageService.calculateProductTotalPrice(pckId, productId, unit);
		};
	}]);
})();