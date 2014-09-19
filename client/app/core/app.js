angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps',
                         'ui.router', 'restangular',  'ngTagsInput',
                         'growlNotifications', 'ngSanitize', 'angular-loading-bar',
                         'ng-token-auth'])
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
.config(function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
})
.config(function($authProvider) {
  $authProvider.configure({
      apiUrl: '/api/v1'
  });
});
