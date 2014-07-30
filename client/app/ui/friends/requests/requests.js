angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('friends.requests', {
    url: '/requests',
    templateUrl: 'ui/friends/requests/requests.html',
    controller: 'requestsCtrl',
    resolve: { RequestData: function(FriendRequestService){
      return FriendRequestService();
    }}
  })
})
.controller('requestsCtrl', function(RequestData, $scope, FriendApproveService){
  $scope.requests = RequestData;
  $scope.approve = function(friend){
    FriendApproveService(friend.id);
    //cleaner way to rm one value from array???
    //doing it here assumes success from server
    //avoids extra http.GET to refresh data
    var array = $scope.requests.friendships
    var index = array.indexOf(friend)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
})
