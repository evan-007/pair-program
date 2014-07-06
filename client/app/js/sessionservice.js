angular.module('ppApp')
.factory('SessionService', function(CookieHandler, $http, $location, $rootScope){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      $rootScope.$broadcast('authorized', data.user.username);
      $location.path('/')
    })
		.error(function(){
			$rootScope.$broadcast('unauthorized');
    });
  };
});
