angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friends', {
    url: '/friends',
    abstract: true,
    templateUrl: 'ui/friends/layout.html'
  })
  .state('friends.all', {
    url: '',
    templateUrl: 'ui/friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService.getAll();
    }}
  })
})
.directive('friendNavbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/friends/friendnavbar.html'
  }
})
.controller('friendsCtrl', function(FriendsData, $scope, $filter){
  console.log(FriendsData)
  $scope.allFriends = FriendsData.friendships;
})
