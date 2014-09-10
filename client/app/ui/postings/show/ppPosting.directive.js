angular.module('ppApp')
.directive('ppPosting', function(Restangular, $state, $location, growlNotifications){
  return {
    templateUrl: 'ui/postings/show/ppPosting.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    link: function(scope, element, attrs) {
      //edit functionality here or in ng-click?
      scope.updatePosting = function(){
        //restangular object!
        scope.activePosting.put()
      }

      scope.deletePosting = function(){
        scope.activePosting.remove();
        $location.path('/postings');
        growlNotifications.add('Posting removed!')
        //todo remove posting from parent scope
      }

      scope.logger = function(){
        console.log(scope.$parent.postings)
      }

      scope.editPosting = function(){
        var title = element.find('h4');
        var body = element.find('p');
        var button = element.find('button');

        if (title.attr('contenteditable') === undefined || title.attr('contenteditable') === 'false'){
          title.attr('contenteditable', true);
          body.attr('contenteditable', true);
          title.addClass('editing');
          body.addClass('editing');
          scope.editing = true;
          button.text('Save');
        }
        else {
          title.attr('contenteditable', false);
          body.attr('contenteditable', false);
          title.removeClass('editing');
          body.removeClass('editing');
          button.text('Edit');
          // activePosting is a Restangular object,
          // just call RestAPI on it!
          scope.activePosting.put()
          scope.editing = false;
        }
      }
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
    }
  }
})
