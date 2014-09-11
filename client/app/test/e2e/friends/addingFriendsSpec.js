var helper = require('../helpers/signinHelper')

describe('Adding friends', function(){
  beforeEach(function(){
    helper.login();
  })

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can request any user to be their friend', function(){
    //get find growl-notifications to test for alert
    //checks that first user is dropped from
    //user list when friend request is sent.
    //so bad, refactor to check for notification

    friendIcon = element(by.name('finder-nav'));
    firstFriend = element(by.repeater('user in activeUsers').row(0));

    friendIcon.click();
    var firstUser = firstFriend.getText();

    firstFriend.click();
    expect(firstFriend.getText()).not.toBe(firstUser);
  })
})
