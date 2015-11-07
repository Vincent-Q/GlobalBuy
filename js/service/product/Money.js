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

		/**
		 * add parameter money to current money object and return a new money object
		 * 
		 * @param {Money} money money to be added
		 *
		 * @return {Money} new money object
		 * 
		 * @throws {Error} If parameter money is not same unit as current money
		 */
		proto.add = function(money){
			if(!this.isUnit(money.getUnit())){
				throw new Error('Different unit money cannot be calculated.');
			}

			return new Money(this.__value + money.getValue(), this.__unit);
		};

		/**
		 * multiply specific multiple of this money
		 * 
		 * @param  {number} multiple number to be multiplied, cannot be a minus number;
		 * 
		 * @return {Money}  new money object
		 *
		 * @throws {Error} If parameter multiple is a minus number
		 */
		proto.multiply = function(multiple){
			if(multiple < 0){
				throw new Error('Money multiple cannot be a minus number.');
			}

			return new Money(this.__value * multiple, this.__unit);
		};

		proto.toJson = function(){
			return {
				value: this.__value,
				unit: this.__unit
			};
		};

		return Money;
	});
})();