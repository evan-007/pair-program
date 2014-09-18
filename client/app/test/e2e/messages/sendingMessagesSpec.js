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

  it('users can send messages in response to postings', function(){
    postingsNav = element(by.name('postings-nav'));
    allPostings = element.all(by.repeater('posting in activePostings').column('posting.title'))
    newMessageButton = element(by.buttonText('Message'));
    messageBodyInput = element(by.model('newMessage.body'))
    messageSubmit = element(by.buttonText('Send'));

    postingsNav.click();
    allPostings.first().click();
    newMessageButton.click();
    messageBodyInput.sendKeys('hi i wanna code with you');
    messageSubmit.click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/postings');
  });
});
