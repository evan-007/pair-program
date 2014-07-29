angular.module('ppApp')
.factory('CookieHandler', function($cookieStore, growlNotifications){
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
			growlNotifications.add('Byebye!', 'success', 2000);
		}
	};

	return CookieHandler;
});
