angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/friends', {
    templateUrl: 'friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService();
    }}
  })
  .when('/friends/pending', {
    templateUrl: 'friends/pending.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService();
    }}
  })
  .when('/friends/requests', {
    templateUrl: 'friends/requests.html',
    controller: 'friendsCtrl',
  })
  .when('/friends/rejected', {
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
  $scope.allFriends = FriendsData.friendships;
  $scope.friends = $filter('filter')($scope.allFriends, {workflow_state:'approved'}, true);
  $scope.pending = $filter('filter')($scope.allFriends, {workflow_state:'unapproved'}, true);
  $scope.rejectedRequests = $filter('filter')($scope.allFriends, {workflow_state:'rejected'}, true);
  console.log($scope.friends)
  console.log($scope.requests)
  console.log($scope.rejectedRequests)
})