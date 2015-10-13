(function(){
	var mdl = angular.module('loginMdl', []);
	
	mdl.controller('LoginController',['$location', function($location){
		this.userName = '';
		this.pwd = '';
		this.isStored = false;

		this.login = function(){
			$location.url('packageList');
		};

		this.select = function(){
			if(this.isStored){
				this.isStored = false;
			} else {
				this.isStored = true;
			}
		};
	}]);
})();