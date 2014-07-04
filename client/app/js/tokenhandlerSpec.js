describe('TokenHandler factory', function(){
	beforeEach(module('ppApp'));

	it('sets and gets a token', function(){
		inject(function(TokenHandler){
			TokenHandler.set('cat');
			expect(TokenHandler.get()).toEqual('cat');
		});
	});

	//make this more useful
	//probably will need to tell angular user is unauthorized
	it('does something different when no token', function(){
		inject(function(TokenHandler){
			expect(TokenHandler.get()).toEqual(null);
		});
	});
});