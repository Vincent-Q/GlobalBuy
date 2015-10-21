(function(){
	var packageMdl = angular.module('packageMdl');

	packageMdl.controller('PackageDetailController', ['$scope', function($scope){
		$scope.listOption = {
			dataList: [{
					previewUrl: 'stub/images/preview/lush.jpg',
					src: 'stub/images/preview/lush.jpg'
				}, {
					previewUrl: 'stub/images/preview/aptamil.jpg',
					src: 'stub/images/source/aptamil.jpg'
				}, {
					previewUrl: 'stub/images/preview/lamy.jpg',
					src: 'stub/images/preview/lamy.jpg'
				}, {
					previewUrl: 'stub/images/preview/sausage.jpg',
					src: 'stub/images/preview/sausage.jpg'
				}, {
					previewUrl: 'stub/images/preview/choclate.jpg',
					src: 'stub/images/preview/choclate.jpg'
				}],
			windowSize: 3,
			focusPos: 1,
			onFocus: function(data){
				$scope.selectedData = data;
			}
		};

		$scope.selectedData = $scope.listOption.dataList[1];
	}]);
})();