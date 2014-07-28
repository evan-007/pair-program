angular.module('ppApp')
.directive('mailBox', function(OneMessageService, PostMessageService){
  return {
    restrict: 'E',
    templateUrl: './ui/messages/mailbox.html',
    scope: {
      messages: '=',
      type: '='
    },
    //refactor things that don't use scope, element, attrs
    //into controller
    link: function(scope, element, attrs) {
      scope.currentPage = 1;
      scope.totalMessages = scope.messages.length;
      scope.itemsPerPage = 10;
      scope.$watch('currentPage', function(newValue, oldValue){
        var start = ((scope.currentPage -1) * scope.itemsPerPage)
        var end = start + scope.itemsPerPage
        scope.showMessages = scope.messages.slice(start, end);
      });

      //too many arguments!!!
      scope.getMessage = function(id, type, message) {
        message.read = true;
        scope.activeMessage = '';
        scope.newMessage = '';
        OneMessageService(id, type).then(function(data){
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
        PostMessageService(message).then(function(){
          scope.newMessage = '';
          scope.activeMessage = '';
          //alert or something that message was sent/failed?
        })
      }
    }
  }
})
