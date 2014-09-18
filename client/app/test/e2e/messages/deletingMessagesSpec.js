var helper = require('../helpers/signinHelper')

describe('Deleting messages', function(){
  beforeEach(function(){
    helper.login();
  });
  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can delete messages from their inboxes', function(){
    messagesLink = element(by.name('messages-nav'));
    inboxLink = element(by.name('messages-inbox'));
    messageList = element.all(by.repeater('message in showMessages').column('message.title'));
    firstMessage = messageList.first();
    var firstTitle;
    trashButton = element(by.buttonText('Trash'));
    trashLink = element(by.name('messages-trash'));

    messagesLink.click();
    inboxLink.click();
    firstTitle = firstMessage.getText();
    messageList.first().click();
    trashButton.click();
    trashLink.click();
    expect(messageList.map(function(elem){
      return elem.getText();
    })).toContain(firstTitle);
  })
})
