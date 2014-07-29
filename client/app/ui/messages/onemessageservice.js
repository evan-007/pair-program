angular.module('ppApp')
.factory('OneMessageService', function($http, $q){
  return function(id, boxType){
    var defer = $q.defer();
    $http.put('/api/v1/messages/'+id+'?box='+boxType).then(function(data){
      defer.resolve(data.data.message);
    });
    return defer.promise;
  }
})
