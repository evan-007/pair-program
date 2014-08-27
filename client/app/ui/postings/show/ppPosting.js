angular.module('ppApp')
.directive('ppPosting', function(Restangular){
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
        var posting = {
          title: scope.activePosting.title,
          body: scope.activePosting.body
        }
        var id = scope.activePosting.id;

        if (title.attr('contenteditable') === undefined || title.attr('contenteditable') === 'false'){
          title.attr('contenteditable', true);
          body.attr('contenteditable', true);
          title.addClass('editing');
          body.addClass('editing');
          button.text('Save');
        }
        else {
          title.attr('contenteditable', false);
          body.attr('contenteditable', false);
          title.removeClass('editing');
          body.removeClass('editing');
          button.text('Edit');
          Restangular.one('postings', id).put(posting)
        }
      }
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
    }
  }
})