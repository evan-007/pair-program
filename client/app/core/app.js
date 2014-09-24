angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps'.ns(),
                         'ui.router', 'restangular', 'ngMessages', 'ngTagsInput',
                         'growlNotifications', 'ngSanitize', 'angular-loading-bar'])
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
.run(function($rootScope, CookieHandler){
  $rootScope.$on('$stateChangeStart', function(event, next){
    // each route has data.authorizedRoles
    // set role from Cookie. If no user, role == 'public'
    // if role matches data.authorizedRoles, allow change
    // else broadcast a message?
    // if public route (ie homepage), redirect someplace
    // var authorizedRole = next.data.authorizedRoles;
    var user = CookieHandler.get()
    console.log(user)
  })
})
