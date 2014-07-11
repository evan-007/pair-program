angular.module('ppApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps', 'multi-select'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})