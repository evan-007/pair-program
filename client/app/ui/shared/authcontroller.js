angular.module('ppApp')
.controller('authCtrl', function($scope, $interval, CookieHandler, MessageCountService){
  $scope.authUser = CookieHandler.get();
  console.log($scope.authUser)
  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
    }
  })
  if ($scope.authUser ) {
    $interval(function() {

      MessageCountService().then(function(data) {
          $scope.messageCount = data;
      });
    }, 5000);
  }
})
