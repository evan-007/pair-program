angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl'   
  });
}).controller('signupCtrl', function(){
  
});