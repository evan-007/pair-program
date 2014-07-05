angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl as signin'
  });
})
.controller('signinCtrl', function($scope, SessionService, $http){
  $scope.newSession = function(authInfo){
    SessionService(authInfo);
  };

  $scope.auth_test = function(){
    $http.get('/api/v1/users/auth_test');
  };
});
