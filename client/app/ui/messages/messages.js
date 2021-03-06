angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages', {
    url: '/messages',
    abstract: true,
    templateUrl: 'ui/messages/index.html',
    data: {
      pageTitle: 'Messages'
    }
  })
  .state('messages.inbox', {
    url: '',
    templateUrl: 'ui/messages/inbox.html',
    resolve: {Inbox: function(Restangular){
      return Restangular.all('messages').getList();
    }},
    controller: 'inboxCtrl',
    data: {
      pageTitle: 'Inbox'
    }
  })
})
.controller('inboxCtrl', function($scope, Inbox){
  $scope.messages = Inbox;
  $scope.type = 'inbox';
})
