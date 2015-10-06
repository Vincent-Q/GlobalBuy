(function(){
	var mdl = angular.module('packageMdl', []);

	mdl.controller('PackageListController', function(){
		this.clickSearch = function(){
			$('.cursor').css({
				'transform':'translateX(274px)',
				'width': '110px'
			});
		};
	});
})();