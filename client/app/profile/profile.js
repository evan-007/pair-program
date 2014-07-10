angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl as profile',
    resolve: {
      ProfileData: function(ProfileService, CookieHandler){
        var id = CookieHandler.get().id;
        return ProfileService(id);
      }
    }
  });
})
.controller('profileCtrl', function(ProfileData){
  this.user = ProfileData;
  console.log(ProfileData);
})