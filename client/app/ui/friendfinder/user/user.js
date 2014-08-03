angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder.users', {
    url: '/users/:id',
    templateUrl: 'ui/friendfinder/user/user.html',
    controller: 'userController',
    resolve: {User: function(Restangular, $stateParams){
      var id = $stateParams.id;
      return Restangular.one('users', id).get();
    }}
  })
})
.controller('userController', function($scope, User){
  $scope.user = User;
  console.log(User)
})
