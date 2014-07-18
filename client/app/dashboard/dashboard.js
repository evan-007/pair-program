angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl',
    resolve: { UserList: function(PublicUserData){
      return PublicUserData();
    }}
  });
})
.controller('dashboardCtrl', function(UserList, $scope, FriendshipService, PublicUserData){
  $scope.totalUsers = UserList.length;
  $scope.users = UserList;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 12;
  $scope.activeUsers = [];
  
  $scope.add = function(id){
    FriendshipService.request(id);
    PublicUserData().then(function(data){
      $scope.users = data;
    });
  }

  
  $scope.$watchGroup(['currentPage', 'users'], function(newValue, oldValue){
    //calculates range of active users based on currentPage
    var start = (($scope.currentPage -1)) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    $scope.totalUsers = $scope.users.length;
    $scope.activeUsers = $scope.users.slice(start, end);
  });
});
