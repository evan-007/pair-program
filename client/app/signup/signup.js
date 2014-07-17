angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl as signup',
    resolve: {Languages: function(LanguageService){
      return LanguageService.set();
    }}
  });
}).controller('signupCtrl', function($scope, $http, SignUpService, Languages){
  $scope.submit = function(signup){
    SignUpService(signup);
  };
  $scope.languages = Languages;
});