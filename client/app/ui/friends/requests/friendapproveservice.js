angular.module('ppApp')
.factory('FriendApproveService', function($http, $q){
  return function(friendId){
    var defer = $q.defer();

    var data = {
      id: friendId
    }

    $http.post('/api/v1/friendships/approve/'+friendId, data).then(
      function(data){
        console.log(data);
        defer.resolve(data);
      }
    );
    return defer.promise;
  }
})
