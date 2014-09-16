angular.module('ppApp')
.directive('ppPosting', function(Restangular, $rootScope, $state, $location, growlNotifications){
  return {
    templateUrl: 'ui/postings/show/ppPosting.directive.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    link: function(scope, element, attrs) {
      //edit functionality here or in ng-click?
      scope.updatePosting = function(){
        //restangular object!
        scope.activePosting.put().then(function(){
          $rootScope.$broadcast('updatePostings')
        })
      }

      scope.deletePosting = function(){
        scope.activePosting.remove().then(function(){
          $rootScope.$broadcast('updatePostings');
          $location.path('/postings');
          growlNotifications.add('Posting removed!');
        });
      }
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
    }
  }
})
