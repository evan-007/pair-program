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
  $scope.messages = Inbox.data.messages;
  $scope.type = 'inbox';
})
.directive('mailBox', function(OneMessage){
  return {
    restrict: 'E',
    templateUrl: './ui/messages/mailbox.html',
    scope: {
      messages: '=messages',
      type: '=type'
    },
    //wow this actual works, scope is $scope?
    link: function(scope, element, attrs) {
      scope.getMessage = function(id, type) {
        OneMessage(id, type).then(function(data){
          scope.activeMessage = data;
        })
      }
      scope.reply = function(message){
        console.log(message);
        scope.newMessage = message;
        scope.activeMessage = '';
      }
      scope.cancel = function(message){
        scope.activeMessage = message;
        scope.newMessage = '';
      }
    }
  }
})