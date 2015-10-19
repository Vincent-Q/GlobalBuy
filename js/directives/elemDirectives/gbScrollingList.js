(function(){
	var globalBuyApp = angular.module('globalBuyApp');

	globalBuyApp.directive('gbScrollingList', [function(){

		function ScrollingList(dataList, windowSize, selectedIndex, focusPos){
			this.__dataList = dataList;
			this.__windowSize = windowSize || 3;
			this.__selectedIndex = selectedIndex || 0;
			this.__focusPos = focusPos || 1;

			this.__isCircular = true;
		}

		var proto = ScrollingList.prototype;

		proto.previous = function(){
			this.__selectedIndex = this.__validateIndex(this.__selectedIndex - 1);
		};

		proto.next = function(){
			this.__selectedIndex = this.__validateIndex(this.__selectedIndex + 1);
		};

		proto.getVisibleItems = function(){
			var items = [];
			var startIndex = this.__selectedIndex - this.__focusPos;
			for(var i=0; i<this.__windowSize; i++){
				items.push(this.__dataList[this.__validateIndex(startIndex + i)]);
			}

			return items;
		};

		proto.__validateIndex = function(index){
			if(index < 0){
				index = index + this.__dataList.length;
			}

			if(index > this.__dataList.length - 1){
				index = index - this.__dataList.length;
			}

			return index;
		};
		
		function link(scope, element, attrs){
			var option = scope.option;
			var scrollingList = new ScrollingList(option.dataList, option.windowSize, option.focusPos);

			option.list = scrollingList.getVisibleItems();

			if(!option.isArrowShown){
				option.isArrowShown = function(){
					return option.dataList.length > option.windowSize;
				};
			}

			var previous = function(){
				scrollingList.previous();
				option.list = scrollingList.getVisibleItems();
			};

			var next = function(){
				scrollingList.next();
				option.list = scrollingList.getVisibleItems();
			};

			var isActive = function(index){
				return index === option.focusPos;
			};

			option.previous = previous;
			option.next = next;
			option.isActive = isActive;
		}

		return {
			template:	'<div class="arrow up" ng-show="option.isArrowShown()" ng-click="option.previous()"></div>' +
							'<ul id="pckPreviewList" class="list-group">' +
								'<li class="list-group-item previewItem" ng-repeat="preview in option.list" use-class="active: option.isActive($index)">' +
									'<img ng-src="{{preview.src}}">' +
								'</li>' +
							'</ul>' +
						'<div class="arrow down" ng-show="option.isArrowShown()" ng-click="option.next()"></div>',
			scope: {
				option: '=gbInit'
			},
			link: link
		};
	}]);
})();