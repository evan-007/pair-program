angular.module('ppApp')
.controller('authCtrl', function($scope, CookieHandler){
  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
    }
  })
})
