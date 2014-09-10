describe('Sign up page', function(){
  it('should allow users to register a new account', function(){
    nameInput = element(by.model('signup.username'));
    emailInput = element(by.model('signup.email'));
    passwordInput = element(by.model('signup.password'));
    passwordConInput = element(by.model('signup.password_confirmation'));
    locationInput = element(by.model('signup.location'));
    submitButton = element(by.name('SubmitButton'));


    browser.get('/#/signup');
    nameInput.sendKeys('asdfasdf');
    emailInput.sendKeys('asdfasdf@gmail.com');
    passwordInput.sendKeys('password');
    passwordConInput.sendKeys('password');
    locationInput.sendKeys('boston');
    submitButton.click();
    expect(browser.getCurrentUrl()).toMatch('#/friends');
  });
});
