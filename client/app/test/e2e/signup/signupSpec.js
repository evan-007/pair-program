describe('Sign in page', function(){
	it('should allow users to signin', function(){
		emailInput = element(by.model('signin.email'));
		passwordInput = element(by.model('signin.password'));
		submitButton = element(by.name('SigninButton'));
		alert = element(by.css('.container .userInfo p'));


		browser.get('/#signin');
		emailInput.sendKeys('test@test.com');
		passwordInput.sendKeys('password');
		submitButton.click();
		browser.get('/');

		expect(alert.getText()).toMatch(/Logged in as/);
	})
})
