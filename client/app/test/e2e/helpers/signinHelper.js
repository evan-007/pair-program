module.exports = {
  login: function() {
    emailInput = element(by.model('signin.email'));
    passwordInput = element(by.model('signin.password'));
    submitButton = element(by.name('SigninButton'));


    browser.get('/#signin');
    emailInput.sendKeys('test@test.com');
    passwordInput.sendKeys('password');
    submitButton.click();
  }
}
