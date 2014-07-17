angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps', 'ui.router'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})
