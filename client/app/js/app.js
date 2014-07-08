//ui maps needs this
function onGoogleReady() {
  angular.bootstrap(document.getElementById("map"), ['ppApp']);
}


angular.module('ppApp', ['ngRoute', 'ui.bootstrap', 'ngCookies', 'ui.map'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
})
.run(function(CookieHandler, $rootScope){
	if (CookieHandler.get() !== undefined) {
		//setCurrent user
		console.log(CookieHandler.get());
	}
})
.constant('MAPUSERS', '/api/v1/users')
