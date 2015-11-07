(function(){
	angular.module('dataProviderModule', []);
	angular.module('productModule', ['dataProviderModule']);
	angular.module('packageModule', ['dataProviderModule', 'productModule']);
})();