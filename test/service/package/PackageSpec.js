describe('Test behaviors of Package', function(){
	beforeEach(module('packageModule'));

	var PackageClass;
	var MoneyClass;

	beforeEach(inject(function(_Package_, _Money_){
		PackageClass = _Package_;
		MoneyClass = _Money_;
	}));

	describe('Test calculateItemPrice logic of Package', function(){
		var package;
		beforeEach(function(){
			package = new PackageClass({
				id:'pck01',
				itemList:[{
					productId: '001',
					quantity: 8
				}]
			});
		});

		it('Normal case: productId can be found in this package', function(){
			var price = package.calculateItemPrice('001', 'euro');

			expect(price.equals(new MoneyClass(7.9 * 8, 'euro'))).toBeTruthy();
		});

		it('Exceptional case: productId cannot be found in this package', function(){
			var price = package.calculateItemPrice('002', 'euro');

			expect(price.equals(new MoneyClass(0))).toBeTruthy();
		});
	});

	describe('Test calculatePackagePrice logic of Package', function(){
		it('Normal case: calculate total price of package', function(){
			var package = new PackageClass({
				id:'pck01',
				itemList:[{
					productId: '001',
					quantity: 8
				}, {
					productId: '002',
					quantity: 4
				}]
			});

			var price = package.calculatePackagePrice('euro');

			expect(price.equals(new MoneyClass(63.2 + 57.96, 'euro'))).toBeTruthy();
		});
	});

	describe('Test toJson logic of PackageSpec', function(){
		it('Normal case: test package structure', function(){
			var package = new PackageClass({
				id:'pck01',
				itemList:[{
					productId: '001',
					quantity: 8
				}]
			});

			var convertedJson = package.toJson();

			expect(convertedJson).toEqual({
				id:'pck01',
				itemList:[{
					product: {
						id: '001',
						name: 'Lush New Soap',
						priceOptions: [{
							value: 7.9,
							unit:'euro'
						}],
						previewUrl: 'stub/images/preview/lush.jpg',
						sourceUrl: 'stub/images/source/lush.jpg'
					},
					quantity: 8
				}]
			});
		});
	});
});