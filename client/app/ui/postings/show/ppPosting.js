angular.module('ppApp')
.directive('ppPosting', function(){
  return {
    templateUrl: 'ui/postings/show/ppPosting.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    link: function(scope, element, attrs) {
      //edit functionality here or in ng-click?
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
      $scope.editPosting = function(){
        console.log('asdf')
      }
    }
  }
})