angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder.users', {
    url: '/users/:id',
    templateUrl: 'ui/friendfinder/user/user.html',
    controller: 'userController',
    resolve: {User: function(UserDataService, $stateParams){
      return UserDataService($stateParams.id);
    }}
  })
})
.controller('userController', function($scope, User){
  $scope.user = User.public_user;
  console.log(User)
})
