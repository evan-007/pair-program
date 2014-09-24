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
.constant('USER_ROLES', {
  all: '*',
  public: 'public',
  registered: 'registered'
})
.run(function($rootScope, CookieHandler, $location, $state){
  $rootScope.$on('$stateChangeStart', function(event, next){
    // each route has data.authorizedRoles
    // set role from Cookie. If no user, role == 'public'
    // if role matches data.authorizedRoles, allow change
    // else broadcast a message?
    // if public route (ie homepage), redirect someplace
    // var authorizedRole = next.data.authorizedRoles;

    // hack to stop reg users from seeing broken lander

    
    // only care if auth is actually defined
    if (next.data !== undefined) {
      // set user, should prob be in a service
      if (CookieHandler.get() !== undefined) {
        var user = 'registered'
      }
      else {
        var user = 'public'
      }
      var authorizedRoles = next.data.authorizedRoles
      console.log(authorizedRoles)
      // is a public route?
      if (authorizedRoles.indexOf('public') !== -1) {
        if (user == 'public') {
          console.log('public user on public route')
        }
        else if (user == 'registered') {
          console.log('registered user on public route')
          event.preventDefault();
          $state.go('postings')
        }
      }
      // is auth route?
    }
  })
})
