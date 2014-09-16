var helper = require('../helpers/signinHelper')


describe('Adding friends', function(){
  beforeEach(function(){
    helper.login();
  })

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can make friend requests', function(){
    //get find growl-notifications to test for alert
    //checks that first user is dropped from
    //user list when friend request is sent.
    //so bad, refactor to check for notification

    friendIcon = element(by.name('finder-nav'));
    friendsList = element(by.name('friends-nav'));
    firstFriend = element(by.repeater('user in activeUsers').row(0));

    friendIcon.click();
    var firstUser = firstFriend.element(by.binding('user.username')).then(function(elem){
      return elem.getText();
    });
    // .getText();

    firstFriend.click();
    expect(firstFriend.getText()).not.toBe(firstUser);
    friendsList.click();

    pendingFriends = element(by.name('friends-pending'));

    pendingFriends.click();

    allPending = element.all(by.repeater('friend in friends').column('friend.username')).map(function(elem){
      return elem.getText();
    })

    expect(allPending).toContain(firstUser)
    // allPending.last().then(function(elem){
    //   elem.findElement(by.binding('friend.username')).then(function(nameElem){
    //     expect(nameElem.getText()).toBe(firstUser)
    //   })
    // })
  })
})
