angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent.show', {
    url: '/:id',
    resolve: { activeMessage: function(Restangular, $stateParams){
      var id = $stateParams.id;
      var box = {box: 'sentbox'}
      return Restangular.one('messages', id).put(box);
    }},
    controller: 'messagesSentShowCtrl',
    templateUrl: 'ui/messages/sent/show/show.html'
  })
})
.controller('messagesSentShowCtrl', function(activeMessage, $scope){
  $scope.activeMessage = activeMessage;
  console.log(activeMessage);
})
