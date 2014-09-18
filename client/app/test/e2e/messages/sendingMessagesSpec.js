var helper = require('../helpers/signinHelper')

describe('New messages', function(){
  beforeEach(function(){
    helper.login();
  });
  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can send messages to their friends', function(){
    messagesNav = element(by.name('messages-nav'));
    newMessage = element(by.name('messages-new'));
    // 1test comes from seed data, so fragile!
    selectDropDown = element(by.cssContainingText('option', '1test'))
    titleInput = element(by.model('message.title'));
    bodyInput = element(by.model('message.body'));
    submitButton = element(by.buttonText('Send'));

    messagesNav.click();
    newMessage.click();
    selectDropDown.click();
    titleInput.sendKeys('hey let\'s code');
    bodyInput.sendKeys('angular is annoying, right?');
    submitButton.click();

    // depends on test port
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/messages');
  });

  xit('users can send messages in response to postings', function(){

  });
});
