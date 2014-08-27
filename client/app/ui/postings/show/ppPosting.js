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
      scope.editPosting = function(){
        var title = element.find('h4');
        var body = element.find('p');
        var button = element.find('button');

        if (title.attr('contenteditable') === undefined || title.attr('contenteditable') === 'false'){
          title.attr('contenteditable', true);
          body.attr('contenteditable', true);
          button.text('Save');
          console.log('if')
        }
        else {
          title.attr('contenteditable', false);
          body.attr('contenteditable', false);
          button.text('Save');
        }
      }
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
    }
  }
})