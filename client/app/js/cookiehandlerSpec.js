describe('CookieHandler', function(){
	beforeEach(module('ppApp'));

	it('sets, gets and deletes a token', function(){
		inject(function(CookieHandler){
			CookieHandler.set('asdf');

			expect(CookieHandler.get()).toEqual('asdf');

			CookieHandler.delete();
			expect(CookieHandler.get()).toEqual(undefined);
		});
	});
});