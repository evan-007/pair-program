angular.module('ppApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html'
  });
})