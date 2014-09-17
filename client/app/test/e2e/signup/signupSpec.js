describe('Sign up page', function(){
  beforeEach(function(){

    nameInput = element(by.model('signup.username'));
    emailInput = element(by.model('signup.email'));
    passwordInput = element(by.model('signup.password'));
    passwordConInput = element(by.model('signup.password_confirmation'));
    locationInput = element(by.model('signup.location'));
    submitButton = element(by.name('SubmitButton'));

    browser.get('/#/signup');
  });

  afterEach(function(){
    browser.manage().deleteAllCookies();
  })

  it('should allow users to register a new account', function(){
    alert = element(by.css('.alert.alert-success'));

    nameInput.sendKeys('asdfasdf');
    emailInput.sendKeys('asdfasdf@gmail.com');
    passwordInput.sendKeys('password');
    passwordConInput.sendKeys('password');
    locationInput.sendKeys('boston');
    submitButton.click();

    expect(browser.getCurrentUrl()).toMatch('#/friends');
  });

  it('cannot be submited with invalid information', function(){
    //assumes seed data creates user 'test'
    error = element(by.id('signupForm-invalid'))
    nameInput.sendKeys('test');

    expect(submitButton.getAttribute('disabled')).toBeTruthy();
    expect(error.isDisplayed()).toBeTruthy();
  });
});
