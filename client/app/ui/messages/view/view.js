angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.inbox.show', {
    url: '/:id',
    resolve: {activeMessage: function(Restangular, $stateParams){
      var id = $stateParams.id
      return Restangular.one('messages', id).patch()
    }},
    controller: 'messagesShowCtrl',
    templateUrl: 'ui/messages/view/view.html'
  })
})
.controller('messagesShowCtrl', function(activeMessage, $scope){
  $scope.activeMessage = activeMessage.message;
})
