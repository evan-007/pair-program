angular.module('ppApp')
.controller('authCtrl', function($scope, CookieHandler, DashboardUpdateService, FirebaseService, $firebase){
  $scope.authUser = CookieHandler.get();
  // handles reloading page
  if ($scope.authUser !== undefined) {
    DashboardUpdateService().then(function(){
      FirebaseService().$bindTo($scope, "data");
    })
  }

  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
      if ($scope.authUser !== undefined) {
        FirebaseService().$bindTo($scope, "data");
      }
    }
  })
})
