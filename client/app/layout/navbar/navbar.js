angular.module('ppApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './layout/navbar/navbar.html',
    controller: 'navCtrl'
  }
})
.controller('navCtrl', function(CookieHandler, $location, $scope){
  $scope.user = CookieHandler.get();

  $scope.$watch(
    function(){
      var user = CookieHandler.get();
      return (user == null) ? 0 : user.id;
    },
    function(newValue, oldValue) {
      if( newValue !== oldValue) {
        $scope.user = CookieHandler.get();
      }
    }
  );

  $scope.logout = function(){
    CookieHandler.delete();
    $location.path('/')
  }
})
