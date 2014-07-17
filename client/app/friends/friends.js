angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friends', {
    templateUrl: 'friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService.getAll();
    }}
  })
  .state('friends.pending', {
    templateUrl: 'friends/pending.html',
    controller: 'friendsCtrl',
   
  })
  .state('friends.requests', {
    templateUrl: 'friends/requests.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendRequestService){
      return FriendRequestService();
    }}
  })
  .state('friends.rejected', {
    templateUrl: 'friends/rejected.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService();
    }}
  })
})
.directive('friendNavbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'friends/friendnavbar.html'
  }
})
.controller('friendsCtrl', function(FriendsData, $scope, $filter){
  //must define filtered array before calling filter!!!
  // oh god refactor this mess, multiple ctrls
  $scope.allFriends = FriendsData.friendships;
  $scope.friends = $filter('filter')($scope.allFriends, {workflow_state:'approved'}, true);
  $scope.pending = $filter('filter')($scope.allFriends, {workflow_state:'unapproved'}, true);
  $scope.rejectedRequests = $filter('filter')($scope.allFriends, {workflow_state:'rejected'}, true);
})