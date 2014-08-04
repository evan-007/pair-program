angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'ui/home/home.html',
    controller: 'homeCtrl',
    resolve: { MapUsers: function(Restangular){
      var map = { map: 'true'}
        return Restangular.all('users').getList(map)
    }, Languages: function(LanguageService){
      return LanguageService.set();
    }
    }
  })
}).controller('homeCtrl', function($scope, $filter, MapUsers, Languages){
  $scope.users = MapUsers;
  $scope.languages = Languages;
  $scope.language = $scope.languages[0];
  $scope.map = {
      center: {
          latitude: 50,
          longitude: 0
      },
      zoom: 2,
      options: {mapTypeId: google.maps.MapTypeId.SATELLITE }
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language.name);
  });
})
