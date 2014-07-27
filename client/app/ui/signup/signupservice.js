angular.module('ppApp')
.factory('SignUpService', function($http, $location, $rootScope, CookieHandler){
  return function(userData){
    var length = userData.languages.length;
    var language_ids = [];
    //get just ids from languages
    for (var n = 0; n < length; n++) {
      language_ids.push(userData.languages[n].id)
    }
    console.log(language_ids);
    userData.language_ids = language_ids;
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      CookieHandler.set(data.user);
      $rootScope.$broadcast('authorized', data.user.username);
      $location.path('/friends')
    })
    .error(function(data){
      console.log(data);
    });
  }
})
