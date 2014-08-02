angular.module('ppApp')
.factory('UserDataService', function($http, $q){
  return function(id){
    var defer = $q.defer();
    $http.get('/api/v1/users/'+id).then(function(response){
      defer.resolve(response.data);
    });
    return defer.promise;
  }
});
