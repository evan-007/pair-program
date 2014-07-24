angular.module('ppApp')
.directive('viewBody', function(CookieHandler){
  return {
    restrict: 'E',
    templateUrl: 'ui/shared/view-body/view-body.html',
    transclude: true,
    link: function(scope, element, attrs) {
      scope.currentUser = CookieHandler.get();

      scope.$watch(
        function(){
          var user = CookieHandler.get();
          return (user == null) ? 0 : user.id;
        },
        function(newValue, oldValue) {
          if( newValue !== oldValue) {
            scope.currentUser = CookieHandler.get();
          }
        }
      );
    }
  }
})