angular.module('ppApp')
.directive('ppPosting', function(Restangular, $rootScope, $state, $location, growlNotifications, $stateParams){
  return {
    templateUrl: 'ui/postings/show/ppPosting.directive.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    link: function(scope, element, attrs) {
      scope.sendMessage = function(){
        var newMessage = {
          body: scope.newMessage.body,
          title: scope.activePosting.title,
          receiver_id: scope.activePosting.user.id
        }
        var id = $stateParams.id;
        var params = {reply: 'true', posting_id: id}
        Restangular.all('messages').post(newMessage, params).then(function(){
          $location.path('#/postings');
        })
      }
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
