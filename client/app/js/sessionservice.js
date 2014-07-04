angular.module('ppApp')
.factory('SessionService', function($http, TokenHandler){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      console.log(data);
      TokenHandler.set(data.user.token);
    });
  };
});