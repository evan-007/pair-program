angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl as signin'
  });
})
.controller('signinCtrl', function($scope, SessionService){
  $scope.newSession = function(authInfo){
    SessionService(authInfo);
  };
});