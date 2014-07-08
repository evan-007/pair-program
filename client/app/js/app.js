angular.module('ppApp', ['ngRoute', 'ui.bootstrap', 'ngCookies', 'google-maps'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
})
.run(function(CookieHandler, $rootScope){
	if (CookieHandler.get() !== undefined) {
		//setCurrent user
		console.log(CookieHandler.get());
	}
});
