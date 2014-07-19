angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'ui/profile/profile.html',
    controller: 'profileCtrl as profile',
    resolve: {
      ProfileData: function(ProfileService){
        return ProfileService();
      }
    }
  });
})
.controller('profileCtrl', function(ProfileData){
  this.user = ProfileData;
})
