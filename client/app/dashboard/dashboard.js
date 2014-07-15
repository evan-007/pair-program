angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl'
  });
})
.controller('dashboardCtrl', function(){

});
