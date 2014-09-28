angular.module('ppApp')
.factory('DashboardUpdateService', function($http, $q, CookieHandler){
  return function(){
    var defer = $q.defer()
    var id = CookieHandler.get().id;
    $http.get('/api/v1/dashboard/update').then(function(data){
      defer.resolve(data)
    });
    return defer.promise
  }
})
