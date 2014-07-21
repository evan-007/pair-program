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
      return MessageGetterService('inbox');
    }},
    controller: 'inboxCtrl'
  })
})
.controller('inboxCtrl', function($scope, Inbox){
  $scope.messages = Inbox.data.conversations;
  console.log($scope.messages)
})