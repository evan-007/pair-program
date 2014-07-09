angular.module('ppApp')
.controller('alertsCtrl', function($scope){

	this.alerts = [];
	var alerts = this.alerts;

	$scope.$on('unauthorized', function(event, data){
		alerts.push({type: 'danger', msg: 'Check your credentials'});
	});

	$scope.$on('authorized', function(event, data){
		alerts.push({type: 'success', msg: 'What\'s up '+data});
	});

	$scope.$on('logout', function(event, data){
		alerts.push({type: 'success', msg: 'Later!'});
	});

	$scope.closeAlert = function(index) {
		alerts.splice(index, 1);
	};
})
.directive('alerts', function(){
  return {
    restrict: 'E',
    templateUrl: './layout/alerts/alerts.html'
  }
})
