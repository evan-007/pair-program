angular.module('ppApp')
.directive('ppUser', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/shared/user-view/user.directive.html',
    scope: {
      activeUser: '=user'
    }
  }
})
