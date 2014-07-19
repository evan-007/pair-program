describe('CookieHandler', function(){
	beforeEach(module('ppApp'));

	it('sets, gets and deletes user information', function(){
		inject(function(CookieHandler){
			var user = {
				username: 'catman',
				token: 'me0w'
			}
			CookieHandler.set(user);

			expect(CookieHandler.get()).toEqual(user);

			CookieHandler.delete();
			expect(CookieHandler.get()).toEqual(undefined);
		});
	});
});