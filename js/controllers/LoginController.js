(function(){
	var mdl = angular.module('loginMdl', []);
	
	mdl.controller('LoginController', function(){
		this.userName = '';
		this.pwd = '';
		this.isStored = false;

		this.login = function(){
			alert('user name: ' + this.userName + '; pwd: ' + this.pwd);
		};

		this.select = function(){
			if(this.isStored){
				this.isStored = false;
			} else {
				this.isStored = true;
			}
		};
	});
})();