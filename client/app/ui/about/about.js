angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'ui/about/about.html',
    data: {
      pageTitle: 'About'
    }
  });
})
