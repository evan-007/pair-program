angular.module('ppApp', ['ngRoute', 'ui.bootstrap', 'ngCookies'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html'
  });
})