angular.module('ppApp')
.factory('SessionService', function($http, TokenHandler, $rootScope){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      TokenHandler.set(data.user.token);
      $rootScope.$broadcast('authorized', data.user.username);
    })
		.error(function(){
			$rootScope.$broadcast('unauthorized');
    });
  };
});