angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps',
                         'ui.router', 'restangular', 'ngMessages', 'ngTagsInput',
                         'growlNotifications', 'ngSanitize'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})
.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1')
})
