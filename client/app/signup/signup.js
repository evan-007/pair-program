angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl as signup'   
  });
}).controller('signupCtrl', function($scope, $http, SignUpService){
  $scope.submit = function(signup){
    SignUpService(signup);
  };
});