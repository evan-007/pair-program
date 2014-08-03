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
    controller: function($scope, $rootScope, PostMessageService, OneMessageService,
      Restangular, growlNotifications) {
      $scope.currentPage = 1;
      $scope.totalMessages = $scope.messages.length;
      $scope.itemsPerPage = 10;
      $scope.$watch('currentPage', function(newValue, oldValue){
        var start = (($scope.currentPage -1) * $scope.itemsPerPage)
        var end = start + $scope.itemsPerPage
        $scope.showMessages = $scope.messages.slice(start, end);
      });

      $scope.getMessage = function(id, type, message) {
        message.read = true;
        $scope.activeMessage = '';
        $scope.newMessage = '';
        Restangular.one('messages', id).patch().then(function(response){
          console.log(response.message);
          $scope.activeMessage = response.message;
        })
        // OneMessageService(id, type).then(function(data){
        //   $scope.activeMessage = data;
        // })
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
        PostMessageService(message).then(function(){
          growlNotifications.add('Message sent to '+message.sender_name, 'success', 2000)
          $scope.newMessage = '';
          $scope.activeMessage = '';
          //alert or something that message was sent/failed?
        })
      }
    }
  }
})
