angular.module('ppApp')
.factory('ProfileService', function($http, $q){
  return function(userId){
    var defer = $q.defer();
    $http.get('/api/v1/users/profile/'+userId).success(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})