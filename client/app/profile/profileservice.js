angular.module('ppApp')
.factory('ProfileService', function($http, $q, $location){
  return function(userId){
    if (userId === undefined) {
      return $location.path("/")
    }
    var defer = $q.defer();
    $http.get('/api/v1/users/profile/'+userId).success(function(data){
      defer.resolve(data.user_profile);
    });
    return defer.promise;
  }
})