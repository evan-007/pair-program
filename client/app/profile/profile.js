angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl',
    resolve: {
      user: function(ProfileService){
        ProfileService.then(function(data){
          return data
        });
      }
    }
  });
})
.controller('profileCtrl', function(user){
  this.user = user;
})