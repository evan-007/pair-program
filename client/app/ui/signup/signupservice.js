angular.module('ppApp')
.factory('SignUpService', function($http, $location, $rootScope, CookieHandler, growlNotifications){
  return function(userData){
    var length = userData.languages.length;
    var language_ids = [];
    //get just ids from languages
    for (var n = 0; n < length; n++) {
      language_ids.push(userData.languages[n].id)
    }
    language_ids = language_ids.join(' ');
    userData.language_tokens = language_ids;
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      CookieHandler.set(data.user);
      growlNotifications.add('Logged in as '+data.user.username, 'success');
      $location.path('/friends')
    })
    .error(function(data){
      console.log(data);
    });
  }
})
