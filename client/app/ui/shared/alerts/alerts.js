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

	$scope.$on('newMessage', function(event, data){
		alerts.push({type: 'success', msg: 'Message sent to '+data});
	})

	$scope.closeAlert = function(index) {
		alerts.splice(index, 1);
	};
})
.directive('alerts', function(){
  return {
    restrict: 'E',
    controller: 'alertsCtrl as alertCtrl',
    templateUrl: './ui/shared/alerts/alerts.html'
  }
})
