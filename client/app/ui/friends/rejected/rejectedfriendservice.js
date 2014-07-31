angular.module('ppApp')
.factory('RejectedFriendService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('api/v1/friendships?type=rejected').then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
