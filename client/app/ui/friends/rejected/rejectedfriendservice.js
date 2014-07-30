angular.module('ppApp')
.factory('RejectedFriendService', function($http, $http){
  return function(){
    var defer = $q.defer();
    $http.get('api/v1/friends?type=rejected').then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
