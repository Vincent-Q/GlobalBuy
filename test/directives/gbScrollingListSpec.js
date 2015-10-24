describe('Test behavious of gbScrollingListSpec.js', function(){
	beforeEach(module('globalBuyApp'));

	var $compile,
		$rootScope;

	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	describe('Scenario1: data list is larger than window size', function(){
		var element;

		beforeEach(function(){
			$rootScope.selectedData = null;
			$rootScope.lastData = null;

			$rootScope.listOption = {
				dataList: [{
					product: {
						previewUrl: 'stub/images/preview/lush.jpg',
					}
				}, {
					product: {
						previewUrl: 'stub/images/preview/aptamil.jpg'
					}
				}, {
					product: {
						previewUrl: 'stub/images/preview/lamy.jpg'
					}
				}, {
					product: {
						previewUrl: 'stub/images/preview/sausage.jpg'
					}
				}, {
					product: {
						previewUrl: 'stub/images/preview/choclate.jpg'
					}
				}],
				windowSize: 3,
				focusPos: 1,
				onFocus: function(data){
					$rootScope.selectedData = data;
				},
				onBlur: function(data){
					$rootScope.lastData = data;
				}
			};

			element = $compile('<gb-scrolling-list gb-init="listOption"></gb-scrolling-list>')($rootScope);

			$rootScope.$digest();
		});

		it('gbScrollingList -> initialize', function(){
			expect(element.find('li').length).toEqual(3);
			expect(element.find('li')[1].className).toContain('active');

			expect($rootScope.selectedData.product.previewUrl).toContain('stub/images/preview/aptamil.jpg');
		});

		it('gbScrollingList -> next()', function(){
			expect(element.find('.arrow.down')[0].className).not.toContain('ng-show');

			var downArrow$ = element.find('.arrow.down')[0];
			downArrow$.click();

			expect($rootScope.lastData.product.previewUrl).toContain('stub/images/preview/aptamil.jpg');
			expect($rootScope.selectedData.product.previewUrl).toContain('stub/images/preview/lamy.jpg');

			expect(element.find('li')[1].className).toContain('active');

			expect(element.find('li > img')[0].src).toContain('stub/images/preview/aptamil.jpg');
			expect(element.find('li > img')[1].src).toContain('stub/images/preview/lamy.jpg');
			expect(element.find('li > img')[2].src).toContain('stub/images/preview/sausage.jpg');
		});

		it('gbScrollingList -> previous()', function(){
			expect(element.find('.arrow.up')[0].className).not.toContain('ng-show');

			var upArrow$ = element.find('.arrow.up')[0];
			upArrow$.click();

			expect($rootScope.lastData.product.previewUrl).toContain('stub/images/preview/aptamil.jpg');
			expect($rootScope.selectedData.product.previewUrl).toContain('stub/images/preview/lush.jpg');

			expect(element.find('li')[1].className).toContain('active');

			expect(element.find('li > img')[0].src).toContain('stub/images/preview/choclate.jpg');
			expect(element.find('li > img')[1].src).toContain('stub/images/preview/lush.jpg');
			expect(element.find('li > img')[2].src).toContain('stub/images/preview/aptamil.jpg');
		});
	});

	describe('Scenario2: data list is smaller than or same as window size', function(){
		it('gbScrollingList -> initialize', function(){
			$rootScope.listOption = {
				dataList: [{
					product: {
						previewUrl: 'stub/images/preview/lush.jpg',
					}
				}, {
					product: {
						previewUrl: 'stub/images/preview/aptamil.jpg'
					}
				}, {
					product: {
						previewUrl: 'stub/images/preview/lamy.jpg'
					}
				}],
				windowSize: 3,
				focusPos: 1,
				isCircular: true
			};

			var element = $compile('<gb-scrolling-list gb-init="listOption"></gb-scrolling-list>')($rootScope);

			$rootScope.$digest();

			expect(element.find('.arrow.up')[0].className).toContain('ng-hide');
			expect(element.find('.arrow.down')[0].className).toContain('ng-hide');

			expect(element.find('li').length).toEqual(3);
			expect(element.find('li')[1].className).toContain('active');
		});
	});
});