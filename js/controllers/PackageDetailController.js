(function(){
	var packageMdl = angular.module('packageMdl');

	packageMdl.controller('PackageDetailController', ['$scope', function($scope){
		$scope.listOption = {
			dataList: [{
					src: 'stub/images/preview/lush.jpg',
				}, {
					src: 'stub/images/preview/aptamil.jpg'
				}, {
					src: 'stub/images/preview/lamy.jpg'
				}, {
					src: 'stub/images/preview/sausage.jpg'
				}, {
					src: 'stub/images/preview/choclate.jpg'
				}],
			windowSize: 3,
			focusPos: 1,
			isCircular: true
		};
	}]);
})();