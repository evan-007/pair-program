var helper = require('../helpers/signinHelper')

describe('Friend requests', function(){

  beforeEach(function(){
    helper.login();
  });

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  var approvedRequest, rejectedRequest;

  it('can be approved', function(){
    friendsNav = element(by.name('friends-nav'));
    friendsRequests = element(by.name('friends-requests'));
    friendsAll = element(by.name('friends-all'));

    friendsNav.click();

    friendsRequests.click();

    pendingList = element.all(by.repeater('friend in requests.friendships'));

    firstPending = pendingList.first().then(function(friend){
      return friend.element(by.binding('friend.user.public_user.username')).getText()
    });

    //approve first friend and store username to check later
    approvalLink = element.all(by.buttonText('Approve')).first()
    approvedRequest = firstPending;
    approvalLink.click();

    //check approved friend shows on main friends list
    friendsAll.click();

    allFriends = element.all(by.repeater('friend in friends').column('friend.username')).map(function(elem){
      return elem.getText();
    })
    expect(allFriends).toContain(approvedRequest)
  })
  it('can be rejected', function(){
    friendsRequests = element(by.name('friends-requests'));
    friendsNav = element(by.name('friends-nav'));

    friendsNav.click();
    friendsRequests.click();

    pendingList = element.all(by.repeater('friend in requests.friendships'));

    firstPending = pendingList.first().then(function(friend){
      return friend.element(by.binding('friend.user.public_user.username')).getText()
    });

    rejectLink = element.all(by.buttonText('Reject')).first()

    rejectedRequest = firstPending;

    rejectLink.click();

    friendsRejected = element(by.name('friends-rejected'));

    friendsRejected.click();

    rejectedNames = element.all(by.repeater('friend in friends.friendships')
    .column('friend.user.public_user.username')).map(function(elem){
      return elem.getText();
    })

    expect(rejectedNames).toContain(rejectedRequest);
  })
  it('rejected friends can be approved again', function(){

    friendsNav = element(by.name('friends-nav'));
    friendsNav.click();

    friendsRejected = element(by.name('friends-rejected'));
    friendsRejected.click();

    rejectedFriendFirst = element.all(by.repeater('friend in friends.friendships')).first().then(function(elem){
      return elem.element(by.binding('friend.user.public_user.username')).getText();
    });

    reapprovedFriend = rejectedFriendFirst

    reApproveButton = element.all(by.buttonText('Approve')).first();

    reApproveButton.click();

    friendsAll = element(by.name('friends-all'));

    friendsAll.click();

    allFriends = element.all(by.repeater('friend in friends').column('friend.username')).map(function(elem){
      return elem.getText();
    })

    expect(allFriends).toContain(reapprovedFriend);
  })
})
