angular.module('ppApp')
.factory('SessionService', function($http, CookieHandler, $rootScope){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      $rootScope.$broadcast('authorized', data.user.username);
    })
		.error(function(){
			$rootScope.$broadcast('unauthorized');
    });
  };
});