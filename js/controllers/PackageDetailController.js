(function(){
	var packageMdl = angular.module('packageMdl');

	packageMdl.controller('PackageDetailController', ['$scope', function($scope){
		$scope.previewList = [{
			src: 'stub/images/preview/lush.jpg',
		}, {
			src: 'stub/images/preview/aptamil.jpg'
		}, {
			src: 'stub/images/preview/lamy.jpg'
		}, {
			src: 'stub/images/preview/sausage.jpg'
		}, {
			src: 'stub/images/preview/choclate.jpg'
		}];

		var focusPos = 1;
		$scope.isActive = function(index){
			return selectedIndex === index;
		};

		var selectedIndex = 1;

		$scope.isArrowShown = function(){
			return $scope.previewList.length > 3;
		};
		
		$scope.getPosition = function(index){
			var gap = 100;

			var diff = index - selectedIndex;

			return (diff + 1) * gap;
		};

		$scope.getPosClass = function(){
			var diff = selectedIndex - focusPos;
			return 'pos_' + diff;
		};

		$scope.next = function(){
			selectedIndex++;
		};

		$scope.previous = function(){
			selectedIndex--;
		};
	}]);
})();