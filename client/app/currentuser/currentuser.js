angular.module('ppApp')
.controller('currentUserCtrl', function(CookieHandler, $scope){
	this.user = CookieHandler.get();
	$scope.logout = function(){
		//works, but does not update dom elements, digest?
		CookieHandler.delete();
	};
});