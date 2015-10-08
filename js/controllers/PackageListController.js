(function(){
	var mdl = angular.module('packageMdl', []);

	mdl.controller('PackageListController', function(){
		this.activeTab = "My Packages";

		this.click = function(activeTab){
			this.activeTab = activeTab;
		};
	});
})();