angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('publicprofile', {
    url: '/users/:id',
    templateUrl: 'ui/users/show/show.html',
    resolve: { activeUser: function(Restangular, $stateParams){
      return Restangular.one('users', $stateParams.id).get();
    }},
    controller: 'publicProfileCtrl'
  })
})
.controller('publicProfileCtrl', function($scope, activeUser){
  $scope.activeUser = activeUser;
})
