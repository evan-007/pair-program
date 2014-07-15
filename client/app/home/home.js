angular.module('ppApp').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    resolve: { MapUsers: function(MapData){
        return MapData();
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
      zoom: 2
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language.name);
    if (!$scope.filteredUsers){
      return;
    }
  });
})
