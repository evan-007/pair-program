angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('friends.pending', {
    url: '/pending',
    templateUrl: 'ui/friends/pending/pending.html',
    controller: 'pendingCtrl',
    resolve: {
      PendingFriends: function(PendingFriendService){
        return PendingFriendService();
      }
    }
  });
})
.controller('pendingCtrl', function(PendingFriends, $scope){
  $scope.pendingFriends = PendingFriends;
})
