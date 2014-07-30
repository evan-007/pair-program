angular.module('ppApp')
.factory('FriendRejectService', function($http, $q) {
  return function(id){
    var defer = $q.defer();
    $http.put('/api/v1/friendships/'+id+'?reject="true"').then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
