angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent', {
    url: '/sent',
    templateUrl: 'ui/messages/sent/sent.html',
    controller: 'sentCtrl',
    resolve: {
      Messages: function(MessageGetterService){
        return MessageGetterService('sentbox');
      }
    }
  })
})
.controller('sentCtrl', function($scope, Messages, OneMessage){
  $scope.messages = Messages.data.conversations;
  $scope.getMessage = function(id){
    OneMessage(id).then(function(data){
      $scope.activeMessage = data;
    });
  }
})