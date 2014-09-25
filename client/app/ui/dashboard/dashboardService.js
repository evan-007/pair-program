angular.module('ppApp')
.factory('DashboardService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/dashboard').then(function(resp){
      defer.resolve(resp.data);
    });
    return defer.promise
  }
})
