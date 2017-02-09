describe('removeAllVowels Filter', function () {
	var $controller, noVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function ($filter){
		noVowels = $filter('removeAllVowels');
	}))

	it('removes all vowels', function(){
		expect(noVowels('test')).toEqual('tst');
	})

});
