angular.module('ppApp')
.factory('MessageGetterService', function($http, $q){
  return function(boxType){
    var defer = $q.defer();
    $http.get('/api/v1/conversations?box='+boxType).then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
//rafactor with ng resource or into messagegetterservice
.factory('OneMessage', function($http, $q){
  return function(id){
    var defer = $q.defer();
    $http.get('/api/v1/conversations/'+id).then(function(data){
      console.log(data);
      defer.resolve(data.data.message);
    });
    return defer.promise;
  }
})