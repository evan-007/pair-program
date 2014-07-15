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

  $scope.useTest = function(){
    $scope.signin.email = 'test@test.com';
    $scope.signin.password = 'password';
  }
});
