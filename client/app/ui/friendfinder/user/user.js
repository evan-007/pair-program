angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder.users', {
    url: '/users/:id',
    templateUrl: 'ui/friendfinder/user/user.html',
    controller: 'userController',
    resolve: {User: function(restangular, $stateParams){
      return Restangular.one('users', $stateParams.id).get();
    }}
  })
})
.controller('userController', function($scope, User){
  $scope.user = User;
  console.log(User)
})
