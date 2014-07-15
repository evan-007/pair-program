angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl',
    resolve: { UserList: function(PublicUserData){
      return PublicUserData();
    }}
  });
})
.controller('dashboardCtrl', function(UserList, $scope){
  $scope.totalUsers = UserList.length;
  $scope.users = UserList;
});
