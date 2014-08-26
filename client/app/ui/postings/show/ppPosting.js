angular.module('ppApp')
.directive('ppPosting', function(){
  return {
    templateUrl: 'ui/postings/show/ppPosting.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    
  }
})