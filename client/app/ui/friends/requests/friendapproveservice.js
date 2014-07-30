angular.module('ppApp')
.factory('FriendApproveService', function($http, $q){
  return function(friendId){
    var defer = $q.defer();

    var data = {
      id: friendId
    }

    $http.put('/api/v1/friendships/'+friendId+'?approve="true"', data).then(
      function(data){
        defer.resolve(data);
      }
    );
    return defer.promise;
  }
})
