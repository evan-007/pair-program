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
  console.log(RequestData);
  $scope.requests = RequestData;
  $scope.approve = function(userId){
    FriendApproveService(userId);
  }
  //todo make the view work
})
