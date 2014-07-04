angular.module('ppApp')
.factory('SignUpService', function($http){
  return function(userData){
    $http.post('/api/v1/users', userData).success(function(data){
      console.log(data);
    });
  }
})