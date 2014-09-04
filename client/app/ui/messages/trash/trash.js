angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.trash',{
    url: '/trash',
    templateUrl: 'ui/messages/trash/trash.html'
  })
})
