angular.module('ppApp')
.factory('ContactService', function($http, $q){
  return function(){
    var defer = $q.defer()
    $http.post('/api/v1/contact_form').then(function(resp){
      defer.resolve(resp.data);
    });
    return defer.promise;
  }
})
