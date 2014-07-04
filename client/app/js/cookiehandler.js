angular.module('ppApp')
.factory('CookieHandler', function($cookieStore){
	var cookie = null;

	var CookieHandler = {
		set: function(userToken){
			$cookieStore.put('token', userToken);
		},

		get: function(){
			return $cookieStore.get('token');
		},

		delete: function(){
			$cookieStore.remove('token');
		}
	};

	return CookieHandler;
});