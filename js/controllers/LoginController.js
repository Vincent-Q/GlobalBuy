(function(){
	var mdl = angular.module('loginMdl', []);
	
	mdl.controller('LoginController',['$state', function($state){
		this.userName = '';
		this.pwd = '';
		this.isStored = false;

		this.login = function(){
			$state.go('packageList.myPackages');
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