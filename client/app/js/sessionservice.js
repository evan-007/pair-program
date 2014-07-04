angular.module('ppApp')
.factory('SessionService', function($http){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      console.log(data);
    }).failure(function(data){
      console.log(data);
    });
  }
})