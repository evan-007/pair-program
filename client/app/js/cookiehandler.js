angular.module('ppApp')
.factory('CookieHandler', function($cookieStore){
	var user = null;

	var CookieHandler = {
		set: function(user){
			$cookieStore.put('currentUser', user);
		},

		get: function(){
			return $cookieStore.get('currentUser');
		},

		delete: function(){
			$cookieStore.remove('currentUser');
		}
	};

	return CookieHandler;
});