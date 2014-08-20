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
      //handles data set on login
      $scope.getDatas()
    }
  })

  //handles data set on reload if logged in
  //what a mess
  $scope.getStream = function(){
    var user = CookieHandler.get()
    if (user == null ) {
      return
    } else {
      // $scope.getDatas()
      //have to run this in another function
      //otherwise digest in progress errors on $scope.$apply
      //wtf!
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

  //debugger, remove later
  //rails wont' kill connnection on page close
  //WTF

  $scope.killMessages = function(){
    StreamHandler.kill()
    console.log('it\s dead, jim')
  }
})
