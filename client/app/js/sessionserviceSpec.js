describe('SessionService', function(){
	beforeEach(module('ppApp'));

  var responseData = {user: {username: 'test', token: 's3cr3t'}}

	xit('sets a token when given proper credentials', function(done){
		inject(function(CookieHandler, $httpBackend, SessionService, $route){
			$httpBackend.when('GET', /api\/v1\/sessions/).respond(responseData);
		});
	});

	xit('does something when credentials are invalid', function(){

	});
});
