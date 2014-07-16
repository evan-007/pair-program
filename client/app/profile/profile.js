angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl as profile',
    resolve: {
      ProfileData: function(ProfileService){
        return ProfileService();
      },
      FriendsData: function(FriendshipService){
        return FriendshipService();
      }
    }
  });
})
.controller('profileCtrl', function(ProfileData, FriendsData){
  this.user = ProfileData;
  console.log(FriendsData);
})
