angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'ui/signup/signup.html',
    controller: 'signupCtrl as signup',
    resolve: {Languages: function(LanguageService){
      return LanguageService.set();
    }}
  });
}).controller('signupCtrl', function($scope, $http, SignUpService, Languages, $q){
  $scope.submit = function(signup){
    SignUpService(signup);
  };
  $scope.languages = Languages;
  
  //put this in a service!
  $scope.getLanguages = function(query){
    var defer = $q.defer()
    $http.get('./api/v1/languages?q='+query).then(function(response){
      console.log(response)
      defer.resolve(response.data.languages)
    })
    return defer.promise
  }
});
