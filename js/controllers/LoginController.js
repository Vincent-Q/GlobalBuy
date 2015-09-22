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

	mdl.directive('useClass', [function(){
		
		function link(scope, element, attrs){

			function updateClass(className, expression){
				if(scope.$eval(expression)){
					element.addClass(className);
				} else {
					element.removeClass(className);
				}
			}

			var attrItemArr = attrs['useClass'].split(':');
			var className = attrItemArr[0].trim();
			var expression = attrItemArr[1].trim();

			scope.$watch(expression, function(){
				updateClass(className, expression);
			}, true);
		}

		return {
			link:link
		};
	}]);
})();