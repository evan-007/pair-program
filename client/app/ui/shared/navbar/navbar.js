angular.module('ppApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './ui/shared/navbar/navbar.html',
    controller: 'navCtrl'
  }
})
//toDo: refactor into directive controller!
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
