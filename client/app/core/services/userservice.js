angular.module('ppApp')
.factory('UserService', function($resource){
	return $resource('/api/v1/users/:id', { id: '@id'})
});
