angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder', {
    url: '/friendfinder',
    templateUrl: 'ui/friendfinder/friendfinder.html',
    controller: 'friendFinderCtrl',
    resolve: { UserList: function(PublicUserData){
      return PublicUserData();
    }}
  });
})
.controller('friendFinderCtrl', function(UserList, $scope, FriendshipService, PublicUserData, growlNotifications){
  $scope.totalUsers = UserList.length;
  $scope.users = UserList;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 12;
  $scope.activeUsers = [];

  $scope.add = function(user){
    FriendshipService.request(user.id);
    var array = $scope.activeUsers
    var index = array.indexOf(user);
    if (index > -1) {
      array.splice(index, 1);
    }
    growlNotifications.add('Request sent to '+user.username, 'success', 2000)
  }


  $scope.$watchGroup(['currentPage', 'users'], function(newValue, oldValue){
    //calculates range of active users based on currentPage
    var start = (($scope.currentPage -1)) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    $scope.totalUsers = $scope.users.length;
    $scope.activeUsers = $scope.users.slice(start, end);
  });
});
