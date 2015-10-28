(function(){
	var productModule = angular.module('productModule');

	productModule.factory('Money', function(){
		function Money(value, unit){
			this.__value = value;
			this.__unit = unit || 'euro';
		}

		var proto = Money.prototype;

		proto.getValue = function(){
			return this.__value;
		};

		proto.getUnit = function(){
			return this.__unit;
		};

		proto.isUnit = function(unit){
			return unit && unit.toLowerCase() === this.__unit.toLowerCase();
		};

		proto.equals = function(money){
			return this.__value === money.getValue() && this.isUnit(money.getUnit());
		};

		return Money;
	});
})();