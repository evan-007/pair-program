angular.module('ppApp')
.factory('SignUpService', function($http, $location, $rootScope, CookieHandler){
  return function(userData){
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      CookieHandler.set(data.user);
      $rootScope.$broadcast('authorized', data.user.username);
      $location.path('/friends')
    })
    .error(function(data){
      console.log(data);
    });
  }
})