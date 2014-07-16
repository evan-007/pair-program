angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/friends', {
    templateUrl: 'friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService();
    }}
  });
})
.controller('friendsCtrl', function(FriendsData, $scope){
  $scope.friends = FriendsData;
})