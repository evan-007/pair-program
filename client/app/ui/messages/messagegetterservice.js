angular.module('ppApp')
.factory('MessageGetterService', function($http, $q){
  return function(boxType){
    var defer = $q.defer();
    $http.get('/api/v1/messages?box='+boxType).then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
