(function(){
	var globalBuyApp = angular.module('globalBuyApp');

	globalBuyApp.filter('currency', function(){
		return function(money, unit){
			var symbol = '€';
			if(unit.toLowerCase() === 'rmb'){
				symbol = '￥';
			}
			return money + ' ' + symbol;
		};
	});
})();