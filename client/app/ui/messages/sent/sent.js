angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent', {
    url: '/sent',
    templateUrl: 'ui/messages/sent/sent.html',
    controller: 'sentCtrl',
    resolve: {
      Messages: function(Restangular){
        var box = { box: 'sentbox'}
        return Restangular.all('messages').getList(box);
      }
    }
  })
})
.controller('sentCtrl', function($scope, Messages){
  $scope.messages = Messages;
  console.log(Messages)
  $scope.type = 'sentbox';

})
