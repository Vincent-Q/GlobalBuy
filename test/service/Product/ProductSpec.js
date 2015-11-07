describe('Test behaviors of Product', function(){
	beforeEach(module('productModule'));

	var ProductClass;
	var product;

	beforeEach(inject(function(_Product_, _Money_){
		ProductClass = _Product_;
		MoneyClass = _Money_;

		var productData = {
			id: 'p01',
			name: 'test product',
			priceOptions: [{
				value: 10,
				unit: 'euro'
			}],
			price: {
				value: 10,
				unit: 'euro'
			}
		};

		product = new ProductClass(productData);
	}));

	describe('Test new getPrice logic of Product', function(){
		it('Normal case: specified unit price can be found', function(){
			var price = product.getPriceMoney('euro');

			expect(price.equals(new MoneyClass(10, 'euro'))).toBeTruthy();
		});

		it('Exceptional case: specified unit price cannot be found', function(){
			var price = product.getPriceMoney('rmb');

			expect(price.equals(new MoneyClass(0))).toBeTruthy();
		});
	});
});