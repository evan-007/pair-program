var helper = require('../helpers/signinHelper')

describe('Friend requests', function(){

  beforeEach(function(){
    helper.signin();
    friendsNav = element(by.name('friends-nav'));
    friendsRequests = element(by.name('friends-requests'));
  });

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  var approvedRequest, rejectedRequest;

  it('can be approved', function(){
    friendsAll = element(by.name('friends-all'));
    pendingList = element.all(by.repeater('friend in requests.friendships'));
    firstPending = element.all(by.repeater('friend in requests.friendships')
      .column('friend.user.public_user.username')).first();
    approvalLink = element.all(by.buttonText('Approve')).first()

    friendsNav.click();
    friendsRequests.click();
    approvedRequest = firstPending.getText();
    approvalLink.click();
    friendsAll.click();

    allFriends = element.all(by.repeater('friend in friends').column('friend.username')).map(function(elem){
      return elem.getText();
    })

    expect(allFriends).toContain(approvedRequest)
  })
  it('can be rejected', function(){
    firstPending = element.all(by.repeater('friend in requests.friendships')
      .column('friend.user.public_user.username')).first();
    friendsRejected = element(by.name('friends-rejected'));
    rejectLink = element.all(by.buttonText('Reject')).first()

    friendsNav.click();
    friendsRequests.click();
    rejectedRequest = firstPending.getText();
    rejectLink.click();
    friendsRejected.click();

    rejectedNames = element.all(by.repeater('friend in friends.friendships')
    .column('friend.user.public_user.username')).map(function(elem){
      return elem.getText();
    })

    expect(rejectedNames).toContain(rejectedRequest);
  })
  it('rejected friends can be approved again', function(){
    friendsRejected = element(by.name('friends-rejected'));
    rejectedFriendFirst = element.all(by.repeater('friend in friends.friendships')
      .column('friend.user.public_user.username')).first();
    reApproveButton = element.all(by.buttonText('Approve')).first();
    friendsAll = element(by.name('friends-all'));

    friendsNav.click();
    friendsRejected.click();
    reapprovedFriend = rejectedFriendFirst.getText();
    reApproveButton.click();
    friendsAll.click();

    allFriends = element.all(by.repeater('friend in friends').column('friend.username')).map(function(elem){
      return elem.getText();
    })

    expect(allFriends).toContain(reapprovedFriend);
  })
})
