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
    return FriendshipService.request(id);
  }
  
  $scope.$watch('currentPage', function(newValue, oldValue){
    //calculates range of active users based on currentPage
    var start = (($scope.currentPage -1)) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    
    $scope.activeUsers = $scope.users.slice(start, end);
  })
  
  $scope.$watch(
    //watch the length of friendships array
  function(){
   PublicUserData();
  },
    function(newValue, oldValue) {
    if ( newValue !== oldValue ) {
      PublicUserData().then(function(data){
        return $scope.users = data;
      });
    }
  });
});
