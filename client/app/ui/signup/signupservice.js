angular.module('ppApp')
.factory('SignUpService', function($http, $location){
  return function(userData){
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      console.log(data);
      $location.path('/');
    })
    .error(function(data){
      console.log(data);
    });
  }
})