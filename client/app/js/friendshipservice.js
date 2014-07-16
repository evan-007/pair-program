angular.module('ppApp')
.factory('FriendshipService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('api/v1/friendships').success(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
});