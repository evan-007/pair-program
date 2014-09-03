angular.module('ppApp')
.directive('ppMessageView', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/messages/view/message.directive.html',
    scope: {
      message: '='
    },
    controller: function($scope, $rootScope, PostMessageService,
      Restangular, growlNotifications) {
        // refactor to other directive
      // $scope.currentPage = 1;
      // $scope.totalMessages = $scope.messages.length;
      // $scope.itemsPerPage = 10;
      // $scope.$watch('currentPage', function(newValue, oldValue){
      //   var start = (($scope.currentPage -1) * $scope.itemsPerPage)
      //   var end = start + $scope.itemsPerPage
      //   $scope.showMessages = $scope.messages.slice(start, end);
      // });

      $scope.getMessage = function(id, type, message) {
        message.read = true;
        $scope.activeMessage = '';
        $scope.newMessage = '';
        var box = {box: type}
        Restangular.one('messages', id).patch(box).then(function(response){
          $scope.activeMessage = response.message;
        })
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
