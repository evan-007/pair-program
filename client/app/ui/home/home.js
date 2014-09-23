angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'ui/home/home.html',
    controller: 'homeCtrl',
    resolve: {
      MapUsers: function(Restangular){
      var map = { map: 'true'}
        return Restangular.all('users').getList(map)
      },
    Languages: function(LanguageService){
      return LanguageService.set();
      }
    }
  })
}).controller('homeCtrl', function($scope, $filter, $interval, MapUsers, Languages){
  $scope.users = MapUsers;
  $scope.languages = Languages;
  $scope.language = $scope.languages[0];
  $scope.map = {
      center: {
          latitude: 50,
          longitude: 0
      },
      zoom: 2,
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language.name);
  });

  // ask Thomas: where does this really belong?
  // in a service probably?
  var counter = 0;
  var getNextLanguage = function(){
    limit = $scope.languages.length - 1;
    $scope.language = $scope.languages[counter];
    if(counter == limit) {
      counter = 0
    }
    else {
      counter++
    }
  }

  $interval(function(){
    getNextLanguage()
  }, 3000)
})
