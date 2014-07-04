angular.module('ppApp')
.factory('SignUpService', function($http){
  return function(userData){
    var user = {
      user : userData
    }
    $http.post('/api/v1/users', user).success(function(data){
      console.log(data)
      .failure(function(data){
        console.log(data);
      });
    });
  }
})