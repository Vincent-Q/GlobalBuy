(function(){
	var packageMdl = angular.module('packageMdl');

	packageMdl.controller('PackageDetailController', ['$scope', function($scope){
		$scope.previewList = [{
			src: 'stub/images/preview/lush.jpg',
		}, {
			src: 'stub/images/preview/aptamil.jpg'
		}];
	}]);
})();