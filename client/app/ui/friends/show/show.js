angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friends.show', {
    url: '/:id',
    templateUrl: 'ui/friends/show/show.html',
    resolve: { activeFriend : function($stateParams, Restangular){
      return Restangular.one('friends', $stateParams.id).get();
    }},
    controller: 'friendsShowCtrl'
  })
})
.controller('friendsShowCtrl', function(activeFriend, $scope){
  $scope.activeUser = activeFriend;
})
