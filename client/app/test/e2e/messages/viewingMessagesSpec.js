var helper = require('../helpers/signinHelper');

describe('Viewing messages', function(){
  beforeEach(function(){
    helper.login();

    messagesNav = element(by.name('messages-nav'))
    messagesList = element.all(by.repeater('message in showMessages').
      column('message.title'));
    messageTitle = element(by.binding('message.subject'))
  });
  afterEach(function(){
    browser.manage().deleteAllCookies();
  })

  it('users can read messages in their inbox', function(){
    inboxLink = element(by.name('messages-inbox'))


    messagesNav.click();
    inboxLink.click();
    messagesList.first().click();

    expect(messageTitle.isDisplayed()).toBeTruthy();
  });

  it('users can read messages in their sentbox', function(){
    sentboxLink = element(by.name('messages-sent'));

    messagesNav.click();
    sentboxLink.click();
    messagesList.first().click();

    expect(messageTitle.isDisplayed()).toBeTruthy();
  })

  it('users can read messages in their trash', function(){
    trashLink = element(by.name('messages-trash'));

    messagesNav.click();
    trashLink.click();
    messagesList.first().click();

    expect(messageTitle.isDisplayed()).toBeTruthy();
  })
})
