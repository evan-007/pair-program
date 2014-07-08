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