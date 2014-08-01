angular.module('ppApp')
.factory('MessageCountService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/messages/count').then(function(response){
      console.log(response)
      defer.resolve(response.data);
    });
    return defer.promise;
  }
})
