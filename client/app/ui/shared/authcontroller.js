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
    var source = new EventSource('/api/v1/messages/count');
    source.onmessage = function(event) {
      console.log(event);
    }
  }
})
