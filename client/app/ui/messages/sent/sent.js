angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent', {
    url: '/sent',
    templateUrl: 'ui/messages/sent/sent.html',
    controller: 'sentCtrl',
    resolve: {
      Messages: function(Restangular, $stateParams){
        var box = { box: 'sentbox'}
        return Restangular.all('messages').getList(box);
      }
    },
    data: {
      pageTitle: 'Sent'
    }
  })
})
.controller('sentCtrl', function($scope, Messages){
  $scope.messages = Messages;
  $scope.type = 'sentbox';

})
