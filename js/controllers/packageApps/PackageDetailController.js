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
				$scope.switchCurrencyUnit($scope.selectedItem.product.priceOptions[0].unit);
			}
		};

		var findPrice = function(unit, isOpposite){
			var priceOptions = $scope.selectedItem.product.priceOptions;
			var price;
			for(var i=0, l=priceOptions.length; i<l; i++){
				price = priceOptions[i];
				if(!isOpposite){
					if(price.unit === unit){
						return price;
					}
				} else {
					if(price.unit !== unit){
						return price;
					}
				}
			}
		};

		$scope.switchCurrencyUnit = function(unit){
			if(!unit){
				unit = $scope.availablePrice.unit;
			}

			var pckId = $scope.selectedItem.id;
			var productId = $scope.selectedItem.product.id;

			$scope.selectedPrice = findPrice(unit);
			$scope.availablePrice = findPrice(unit, true);

			$scope.selectedTotalPrice = packageService.calculateProductTotalPrice('pck01', productId, unit);
		};

		$scope.selectedItem = package.itemList[1];
		$scope.switchCurrencyUnit($scope.selectedItem.product.priceOptions[0].unit);
	}]);
})();