angular.module('ppApp')
.factory('FriendRequestService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/friendships?type=requests').success(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
