angular.module('ppApp')
.factory('SessionService', function(CookieHandler, $http, StreamHandler, $location, growlNotifications){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      growlNotifications.add('Logged in as '+data.user.username, 'success', 2000);
      StreamHandler.set();
      $location.path('/friends')
    })
		.error(function(){
      $location.path('/signin')
			growlNotifications.add('Are you sure that\'s the right password?', 'warning', 2000);
    });
  };
});
