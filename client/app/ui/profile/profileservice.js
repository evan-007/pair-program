angular.module('ppApp')
.factory('ProfileService', function($http, $q, $location){
  return function(){

    var defer = $q.defer();
    $http.get('/api/v1/users/profile/').success(function(data){
      defer.resolve(data.user_profile);
    });
    return defer.promise;
  }
})