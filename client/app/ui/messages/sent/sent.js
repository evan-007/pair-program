angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent', {
    url: '/sent',
    templateUrl: 'ui/messages/sent/sent.html',
    controller: 'sentCtrl',
    resolve: {
      Messages: function(Restangular){
        return Restangular.all('messages', {box: 'sentbox'}).getList();
      }
    }
  })
})
.controller('sentCtrl', function($scope, Messages, OneMessageService){
  $scope.messages = Messages;
  console.log(Messages)
  $scope.type = 'sentbox';
  $scope.getMessage = function(id){
    OneMessageService(id).then(function(data){
      $scope.activeMessage = data;
    });
  }
})
