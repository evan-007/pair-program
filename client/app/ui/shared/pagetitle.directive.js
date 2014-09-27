angular.module('ppApp')
// http://stackoverflow.com/questions/23813599/set-page-title-using-ui-router
// so slick!
.directive('updateTitle', function($rootScope, $timeout) {
  return {
    link: function(scope, element) {

      var listener = function(event, toState, toParams, fromState, fromParams) {
        var title = 'ngThing';
        if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle + ' | ngThing';
        // Set asynchronously so page changes before title does
        $timeout(function() {
          element.text(title);
        });
      };

      $rootScope.$on('$stateChangeStart', listener);
    }
  }
});
