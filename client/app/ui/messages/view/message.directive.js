angular.module('ppApp')
.directive('ppMessageView', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/messages/view/message.directive.html',
    scope: {
      message: '=',
      type: '='
    },
    controller: function($scope, $rootScope, PostMessageService,
      Restangular, growlNotifications, $location) {

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
      $scope.trash = function(message){
        var params = {trash: 'true'}
        Restangular.one('messages', message.id).patch(params).then(function(){
          $location.path('/messages');
        })
      }
    }
  }
})
