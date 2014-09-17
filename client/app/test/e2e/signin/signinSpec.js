describe('Sign in page', function(){

	afterEach(function(){
		browser.manage().deleteAllCookies();
	});

	iit('should allow users to signin', function(){
		emailInput = element(by.model('signin.email'));
		passwordInput = element(by.model('signin.password'));
		submitButton = element(by.name('SigninButton'));
		icon = element(by.css('.fa.fa-newspaper-o.fa-3x'));

		browser.get('/#signin');
		emailInput.sendKeys('test@test.com');
		passwordInput.sendKeys('password');
		submitButton.click();
		expect(icon.isPresent()).toBe(true);
	})
})
