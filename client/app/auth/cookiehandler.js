angular.module('ppApp')
.factory('CookieHandler', function($cookieStore, $rootScope){
	var user = null;

	var CookieHandler = {
		set: function(user){
			$cookieStore.put('currentUser', user);
		},

		get: function(){
			return $cookieStore.get('currentUser');
		},

		delete: function(user){
			$cookieStore.remove('currentUser');
			$rootScope.$broadcast('logout');
		}
	};

	return CookieHandler;
});
