describe('ppApp', function(){
	beforeEach(module('ppApp'));

	it('loads the home template', function(){
		inject(function($httpBackend, $rootScope, $route, $location){
			$httpBackend.expectGET(/home\/home\.html/).respond('...');
			$rootScope.$apply(function(){
				$location.path('/');
			});

			$httpBackend.flush();
			$httpBackend.verifyNoOutstandingExpectation();

			expect($route.current.templateUrl).toMatch(/home\/home\.html/);

		});
	});
});