describe('SignUpService', function(){
	beforeEach(module('ppApp'));

	it('redirects to "/" on success', function(){
		inject(function($httpBackend, $route, $rootScope, SignUpService, $location){
			$httpBackend.expectPOST(/\/api\/v1\/users/).respond(200);
			$httpBackend.expectGET(/home\/home\.html/).respond('..');

			//set location to test redirect
			expect($route.current).toBeUndefined();
			
			SignUpService();
			
			$httpBackend.flush;
			$httpBackend.verifyNoOutstandingExpectation();

			expect($route.current.originalPath).toMatch(/\//);
		});
	});
});