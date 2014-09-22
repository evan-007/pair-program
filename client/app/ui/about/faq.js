angular.module('ppApp')
.directive('ppFaq', function(){
  return {
    restrict: 'E',
    templateUrl: './ui/about/faq.html',
    scope: {
      question: '='
    },
    transclude: true
  }
})
