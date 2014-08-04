angular.module('ppApp')
.controller('authCtrl', function($scope, CookieHandler){
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

  $scope.openStream = function(){
    var user = CookieHandler.get()
    if (user == null) {
      return
    }
    else {
      var source = new EventSource('/api/v1/messages/count?id='+user.id);
      source.onmessage = function(event) {
        console.log(event.data);
        $scope.messageCount = event.data;
        $scope.$apply();
      }
    }
  }
})
