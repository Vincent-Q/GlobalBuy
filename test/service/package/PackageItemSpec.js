describe('Test behaviours of PackageItem', function(){
	beforeEach(module('packageModule'));

	var PackageItemClass;
	var MoneyClass;

	beforeEach(inject(function(_PackageItem_, _Money_){
		PackageItemClass = _PackageItem_;
		MoneyClass = _Money_;
	}));

	describe('Test calculateItemPrice logic of PackageItem', function(){
		it('Test normal case', function(){
			var packageItem = new PackageItemClass({
				productId: '001',
				quantity: 8
			});

			var itemPrice = packageItem.calculateItemPrice('euro');

			expect(itemPrice.equals(new MoneyClass(7.9 * 8, 'euro'))).toBeTruthy();
		});
	});
});