angular.module('ppApp', ['ngRoute', 'ui.bootstrap'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html'
  });
})