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
.directive('friendsList', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/friends/friendslist.html',
    scope: {
      friends: '=',
      type: '='
    },
  }
})
.controller('friendsCtrl', function(FriendsData, $scope, $filter){
  $scope.allFriends = FriendsData.friendships;
})
