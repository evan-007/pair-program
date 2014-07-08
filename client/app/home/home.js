angular.module('ppApp').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    resolve: { mapUsers: function(MapData){
        return MapData();
      }
    }
  })
}).controller('homeCtrl', function($scope, MapData){
  MapData().then(function(data){
    console.log(data);
  })
  $scope.map = {
      center: {
          latitude: 45,
          longitude: -73
      },
      zoom: 8
  };
})
