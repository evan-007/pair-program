angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.trash.show', {
    url: '/:id',
    resolve: { activeMessage: function(Restangular, $stateParams){
      var id = $stateParams.id;
      var box = {box: 'trash'}
      return Restangular.one('messages', id).put(box);
    }},
    controller: 'messagesTrashShowCtrl',
    templateUrl: 'ui/messages/trash/show/show.html'
  })
})
.controller('messagesTrashShowCtrl', function(activeMessage, $scope){
  $scope.activeMessage = activeMessage;
})
