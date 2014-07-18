angular.module('ppApp')
.factory('MapUserData', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/users/map').then(function(data){
      defer.resolve(data.data.users);
    })
    return defer.promise;
  }
})