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
}).controller('signupCtrl', function($scope, $http, SignUpService, Languages, $q, $auth){
  $scope.submit = function(signup){
    signup.language_ids = [];
    signup.languages.map(function(language){
      signup.language_ids.push(language.id)
    })
    $auth.submitRegistration(signup).then(function(resp){
      console.log(resp);
    });
  };
  $scope.languages = Languages;

  //put this in a service!
  $scope.getLanguages = function(query){
    var defer = $q.defer()
    $http.get('./api/v1/languages?q='+query).then(function(response){
      defer.resolve(response.data.languages)
    })
    return defer.promise
  }
});
