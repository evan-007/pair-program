angular.module('ppApp')
.controller('authCtrl', function($scope, CookieHandler, MessageStream, StreamHandler){
  $scope.authUser = CookieHandler.get();
  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
    }
  })

  $scope.getStream = function(){
    var user = CookieHandler.get()
    if (user == null ) {
      return
    } else {
      $scope.getDatas()
    }
  }

  $scope.getDatas = function(){
    StreamHandler.set()
    var source = MessageStream.stream
    source.onmessage = function(event){
      $scope.$apply(function(){
        $scope.messages = event.data;
      })
    }
  }

  $scope.messageCount = function(){
    console.log(MessageStream)
  }

  $scope.getMessages = function(){
    console.log(StreamHandler.get())
  }

  $scope.killMessages = function(){
    StreamHandler.kill()
  }
  // $scope.openStream = function(){
  //   var user = CookieHandler.get()
  //   if (user == null) {
  //     return
  //   }
  //   else {
  //     var source = new EventSource('/api/v1/messages/count?id='+user.id);
  //     source.onmessage = function(event) {
  //       console.log(event.data);
  //       $scope.messageCount = event.data;
  //       $scope.$apply();
  //     }
  //   }
  // }
})
