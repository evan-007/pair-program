angular.module('ppApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './layout/navbar/navbar.html',
    controller: 'navCtrl'
  }
})
.controller('navCtrl', function(CookieHandler, $scope){
  // this works, but doesn't update when CookieHandler.get() changes
  // $scope.user = CookieHandler.get();
  $scope.user = CookieHandler.get();

  $scope.$watch(
    function(){
      var user = CookieHandler.get();
      return (typeof user === 'undefined') ? 0 : user.id;
    },
    function(newValue, oldValue) {
      if( newValue !== oldValue) {
        $scope.user = CookieHandler.get();
      }
    }
  );


  console.log(CookieHandler.get());
  $scope.logout = function(){
    CookieHandler.delete();
  }
})
