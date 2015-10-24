(function(){
	var packageMdl = angular.module('packageMdl', ['packageModule']);

	packageMdl.controller('PackageDetailController', ['$scope', 'packageService', function($scope, packageService){
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
	}]);
})();