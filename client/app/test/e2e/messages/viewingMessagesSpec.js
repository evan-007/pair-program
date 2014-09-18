var helper = require('../helpers/signinHelper');

describe('Viewing messages', function(){
  beforeEach(function(){
    helper.login();
  });
  afterEach(function(){
    browser.manage().deleteAllCookies();
  })

  it('users can read messages in their inbox', function(){
    messagesNav = element(by.name('messages-nav'))
    inboxLink = element(by.name('messages-inbox'))
    messagesList = element.all(by.repeater('message in showMessages').
      column('message.title'));
    messageTitle = element(by.binding('message.subject'))

    messagesNav.click();
    inboxLink.click();
    messagesList.first().click();

    expect(messageTitle.isDisplayed()).toBeTruthy();
  })
})
