var helper = require('../helpers/signinHelper')


describe('Adding friends', function(){
  beforeEach(function(){
    helper.signin();
  })

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can make friend requests', function(){

    friendIcon = element(by.name('finder-nav'));
    friendsList = element(by.name('friends-nav'));
    firstUser = element.all(by.repeater('user in activeUsers').column('user.username')).first();
    addButton = element.all(by.repeater('user in activeUsers')).first().then(function(elem){
      return elem.element(by.buttonText('Add friend'))
    })
    pendingFriends = element(by.name('friends-pending'));


    friendIcon.click();

    var firstUser = firstUser.then(function(elem){
      return elem.getText();
    });
    addButton.click();

    expect(firstUser.getText()).not.toBe(firstUser);

    friendsList.click();
    pendingFriends.click();

    //must be declared here, will throw not found error if put above
    allPending = element.all(by.repeater('friend in friends').column('friend.username')).map(function(elem){
      return elem.getText();
    })

    expect(allPending).toContain(firstUser)
  })
})
