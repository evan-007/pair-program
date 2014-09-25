angular.module('ppApp')
.config(function($stateProvider, USER_ROLES){
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: './ui/dashboard/dashboard.html',
    data: {
      authorizedRoles: [USER_ROLES.registered]
    },
    controller: 'dashboardCtrl as dashboard',
    resolve: {DashboardData: function($http, $q){
      var defer = $q.defer();
      $http.get('/api/v1/dashboard').then(function(resp){
        defer.resolve(resp.data)
      })
      return defer.promise
    }}
  })
})
.controller('dashboardCtrl', function(DashboardData){
  console.log(DashboardData)
})
