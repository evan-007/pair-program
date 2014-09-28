angular.module('ppApp')
.directive('ppMailbox', function(OneMessageService, PostMessageService, $rootScope){
  return {
    restrict: 'E',
    templateUrl: './ui/messages/mailbox.html',
    scope: {
      messages: '=',
      type: '='
    },
    link: function(scope, element, attrs) {
    },
    controller: function($scope, $rootScope, PostMessageService,
      Restangular, growlNotifications, CookieHandler, $firebase) {
        $scope.currentPage = 1;
        $scope.totalMessages = $scope.messages.length;
        $scope.itemsPerPage = 10;
        $scope.$watch('currentPage', function(newValue, oldValue){
          var start = (($scope.currentPage -1) * $scope.itemsPerPage)
          var end = start + $scope.itemsPerPage
          $scope.showMessages = $scope.messages.slice(start, end);
        });


      $scope.readMessage = function(message) {
        //set client read to true
        //http request takes care of server side update
        if (message.workflow_state == 'unread') {
          message.workflow_state = 'read';
          var id = CookieHandler.get().id
          var userMessage = new Firebase('https://intense-torch-4584.firebaseio.com/data/'+id+'/messages');
          userMessage.transaction(function(currentMessages){
            if (currentMessages > 0) {
              return currentMessages - 1
            }
          })
        }
      }

      $scope.reply = function(message){
        $scope.newMessage = message;
        $scope.activeMessage = '';
      }
      $scope.cancel = function(message){
        $scope.activeMessage = message;
        $scope.newMessage = '';
      }
      $scope.send = function(message){
        PostMessageService(message);
        //can't callback outside of restangular, assumes successful post
        growlNotifications.add('Message sent to '+message.sender_name, 'success', 2000)
        $scope.newMessage = '';
        $scope.activeMessage = '';
      }
    }
  }
})
