angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('friends.rejected', {
    url: '/rejected',
    templateUrl: 'ui/friends/rejected/rejected.html',
    controller: 'rejectedCtrl',
    resolve: { Friends: function(RejectedFriendService){
      return RejectedFriendService();
    }}
  })
})
.controller('rejectedCtrl', function(Friends, FriendApproveService, $scope){
  $scope.friends = Friends.data;
  console.log(Friends)
  $scope.approve = function(friend){
    FriendApproveService(friend.id);
    //cleaner way to rm one value from array???
    //doing it here assumes success from server
    //avoids extra http.GET to refresh data
    var array = $scope.friends.friendships
    var index = array.indexOf(friend)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
})
