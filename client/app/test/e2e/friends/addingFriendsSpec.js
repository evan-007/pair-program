var helper = require('../helpers/signinHelper')

describe('Adding friends', function(){
  beforeEach(function(){
    helper.login();
  })

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can request any user to be their friend', function(){
    friendIcon = element(by.name('finder-nav'));
    firstFriend = element(by.repeater('user in activeUsers').row(0));
    alert = element(by.name('growl'));

    friendIcon.click();
    firstFriend.click();
    expect(alert.getText()).toMatch(/sent to/)
  })
})
