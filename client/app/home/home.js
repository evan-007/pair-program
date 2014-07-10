angular.module('ppApp').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    resolve: { MapUsers: function(MapData){
        return MapData();
      }
    }
  })
}).controller('homeCtrl', function($scope, $filter, MapUsers){
  $scope.users = MapUsers;
  $scope.map = {
      center: {
          latitude: 50,
          longitude: 0
      },
      zoom: 2
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language);
    if (!$scope.filteredUsers){
      return;
    }
  });
})
