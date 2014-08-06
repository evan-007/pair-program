angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.new', {
    url: '/new',
    templateUrl: 'ui/messages/new/new.html',
    controller: 'newMessageCtrl',
    resolve: { Friends: function(FriendshipService) {
      return FriendshipService.getAll();
    }}
  })
})
.controller('newMessageCtrl', function(Friends, $scope, Restangular, $location, growlNotifications){
  $scope.friends = Friends.friendships

  $scope.sendMessage = function(message){
    var data = {message: message}

    Restangular.all('messages').post(data).then(function(response){
      console.log(response.message)
      growlNotifications.add("Message sent!", 'success', 2000);
      $location.path('/messages');
    })
  }
})
