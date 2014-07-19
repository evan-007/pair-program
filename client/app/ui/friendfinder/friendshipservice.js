angular.module('ppApp')
.factory('FriendshipService', function($http, $q){
  var FriendshipService = {
    getAll: function(){
      var defer = $q.defer();
      $http.get('api/v1/friendships').success(function(data){
        console.log(data.friendships);
        defer.resolve(data);
      });
      return defer.promise;
    },
    request: function(id){
      var data = { friendship: {friend_id: id} }
      $http.post('api/v1/friendships', data)
    }
  }
 return FriendshipService;
});
