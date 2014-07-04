angular.module('ppApp')
.factory('CookieHandler', function($cookieStore){
	var cookie = null;

	var CookieHandler = {
		set: function(userToken){
			$cookieStore.put('currentUser', userToken);
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