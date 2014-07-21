angular.module('ppApp')
.factory('MessageGetterService', function($http, $q){
  return function(boxType){
    var defer = $q.defer();
    var data = {box: boxType}
    $http.get('/api/v1/conversations', data).then(function(data){
      console.log(data);
      defer.resolve(data);
    });
    return defer.promise;
  }
})