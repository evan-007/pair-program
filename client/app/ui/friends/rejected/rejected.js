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
.controller('rejectedCtrl', function(Friends, $scope){
  $scope.friends = Friends;
})
