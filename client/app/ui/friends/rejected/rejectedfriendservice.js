angular.module('ppApp')
.factory('RejectedFriendService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('api/v1/friends?type=rejected').then(function(data){
      console.log('asdf')
      defer.resolve(data);
    });
    return defer.promise;
  }
})
