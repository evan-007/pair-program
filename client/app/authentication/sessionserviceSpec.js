describe('SessionService', function(){
	beforeEach(module('ppApp'));

  var responseData = {user: {username: 'test', token: 's3cr3t'}}
	var auth = {email: 'blabla@bla.com', password: 'password'}

	it('sets a token when given proper credentials', function(){
		inject(function(CookieHandler, $httpBackend, SessionService, $route){
			$httpBackend.when('POST', 'api/v1/sessions').respond(responseData);
			$httpBackend.when('GET', 'home/home.html').respond('...');

			SessionService(auth);

			//MUST flush before expectations otherwise
			//everything is undefined.

			$httpBackend.flush();
			$httpBackend.verifyNoOutstandingRequest();

			expect($route.current.originalPath).toEqual('/');
			expect(CookieHandler.get()).toEqual(responseData.user);
		});
	});

	xit('does something when credentials are invalid', function(){

	});
});
