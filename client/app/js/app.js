angular.module('ppApp', ['ngRoute', 'ui.bootstrap', 'ngCookies'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html'
  });
})
.run(function(CookieHandler, $rootScope){
	if (CookieHandler.get() !== undefined) {
		//setCurrent user
		console.log(CookieHandler.get());
	}
});