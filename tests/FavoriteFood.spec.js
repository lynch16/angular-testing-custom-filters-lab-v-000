describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function ($filter){
		favoriteFood = $filter('favoriteFood');
	}))

	var items = [
 		{ name: 'Will',
			favoriteFood: 'Pizza'
		},{
			 name: 'Jenna',
			 favoriteFood: 'Ice Cream'
		}]

		var food = "Ice Cream"

	it('should return the favorite food', function(){
		expect(favoriteFood(items, food)[0]).toEqual(items[1])
	});
});
