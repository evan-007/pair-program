angular.module('ppApp', ['ngRoute', 'ui.bootstrap', 'ngCookies', 'google-maps'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})