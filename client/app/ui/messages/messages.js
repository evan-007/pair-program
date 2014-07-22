angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages', {
    url: '/messages',
    abstract: true,
    templateUrl: 'ui/messages/index.html'
  })
  .state('messages.inbox', {
    url: '',
    templateUrl: 'ui/messages/inbox.html',
    resolve: {Inbox: function(MessageGetterService){
      return MessageGetterService();
    }},
    controller: 'inboxCtrl'
  })
})
.controller('inboxCtrl', function($scope, Inbox, OneMessage){
  $scope.messages = Inbox.data.conversations;
})
.directive('mailBox', function(OneMessage){
  return {
    restrict: 'E',
    templateUrl: './ui/messages/mailbox.html',
    scope: {
      messages: '=messages'
    },
    //wow this actual works, scope is $scope?
    link: function(scope, element, attrs) {
      scope.getMessage = function(id) {
        OneMessage(id).then(function(data){
          scope.activeMessage = data;
        })
      }
    }
  }
})