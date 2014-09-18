angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.trash',{
    url: '/trash',
    templateUrl: 'ui/messages/trash/trash.html',
    resolve: {TrashMessages = function(Restangular){
      var box = {box: }
      return Restangular.all('messages').getList(box);
    }}
  })
})
