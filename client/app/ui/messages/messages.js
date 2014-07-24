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
.controller('inboxCtrl', function($scope, Inbox){
  $scope.messages = Inbox.data.messages;
  $scope.type = 'inbox';
})
.directive('mailBox', function(OneMessage, PostMessage){
  return {
    restrict: 'E',
    templateUrl: './ui/messages/mailbox.html',
    scope: {
      messages: '=',
      type: '='
    },
    //wow this actual works, scope is $scope?
    link: function(scope, element, attrs) {
      scope.currentPage = 1;
      scope.totalMessages = scope.messages.length;
      scope.itemsPerPage = 10;
      scope.$watch('currentPage', function(newValue, oldValue){
        var start = ((scope.currentPage -1) * scope.itemsPerPage)
        var end = start + scope.itemsPerPage
        scope.showMessages = scope.messages.slice(start, end);
      });
      
      scope.getMessage = function(id, type) {
        scope.activeMessage = '';
        scope.newMessage = '';
        OneMessage(id, type).then(function(data){
          scope.activeMessage = data;
        })
      }
      scope.reply = function(message){
        scope.newMessage = message;
        scope.activeMessage = '';
      }
      scope.cancel = function(message){
        scope.activeMessage = message;
        scope.newMessage = '';
      }
      scope.send = function(message){
        PostMessage(message).then(function(){
          scope.newMessage = '';
          scope.activeMessage = '';
          //alert or something that message was sent/failed?
        })
      }
    }
  }
})