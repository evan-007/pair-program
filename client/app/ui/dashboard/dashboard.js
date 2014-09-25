angular.module('ppApp')
.config(function($stateProvider, USER_ROLES){
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: './ui/dashboard/dashboard.html',
    data: {
      authorizedRoles: [USER_ROLES.registered]
    }
  })
})
