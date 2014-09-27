angular.module('ppApp')
.config(function($stateProvider, USER_ROLES){
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: './ui/dashboard/dashboard.html',
    data: {
      authorizedRoles: [USER_ROLES.registered],
      pageTitle: 'Dashboard'
    },
    controller: 'dashboardCtrl as dashboard',
    // put in Service!
    resolve: {DashboardData: function(DashboardService){
      return DashboardService();
    }}
  })
})
.controller('dashboardCtrl', function(DashboardData){
  this.data = DashboardData;
})
