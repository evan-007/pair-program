angular.module('ppApp')
.factory('PendingFriendService', function($http, $q){
  return function(){
    var defer = $q.defer()
    $http.get('/api/v1/friendships/pending').then(function(data){
      defer.resolve(data.data)
    });
    return defer.promise
  }
})
