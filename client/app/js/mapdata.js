angular.module('ppApp')
.factory('MapData', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/users/').then(function(data){
      defer.resolve(data.data.users);
    })
    return defer.promise;
  }
})
