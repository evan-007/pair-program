angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl',
    resolve: {
      User: function(ProfileService, CookieHandler){
        var id = CookieHandler.get().id;
        ProfileService(id).then(function(data){
          return data
        });
      }
    }
  });
})
.controller('profileCtrl', function(User){
  this.user = User;
})