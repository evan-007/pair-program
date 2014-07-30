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
  $scope.users = UserList;
  $scope.totalUsers = $scope.users.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 12;
  $scope.activeUsers = [];

  $scope.add = function(user){
    FriendshipService.request(user.id);
    var array = $scope.users;
    var index = array.indexOf(user);
    if (index > -1) {
      array.splice(index, 1);
    }
    //need to manually update totalUsers to get watch to run WTF
    $scope.totalUsers = array.length
    growlNotifications.add('Request sent to '+user.username, 'success', 2000)
  }


  $scope.$watchGroup(['currentPage', 'totalUsers'], function(newValue, oldValue){
    console.log('running the watcher')
    var start = (($scope.currentPage -1)) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    $scope.totalUsers = $scope.users.length;
    $scope.activeUsers = $scope.users.slice(start, end);
  });
});
