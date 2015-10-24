(function(){
	var packageMdl = angular.module('packageMdl');

	packageMdl.controller('PackageDetailController', ['$scope', 'packageService', function($scope, packageService){
		var package = packageService.getPackageById(1);

		$scope.listOption = {
			dataList: package.itemList,
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