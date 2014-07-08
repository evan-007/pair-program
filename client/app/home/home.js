angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    resolve: { users: function(MAPUSERS, DataService){
        return DataService(MAPUSERS);
      }
    }
  });
})
.controller('homeCtrl', function($scope, users){
  this.users = users;
})
.controller('MapCtrl', ['$scope', function ($scope) {
    $scope.mapOptions = {
      center: new google.maps.LatLng(0, 0),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  }]);