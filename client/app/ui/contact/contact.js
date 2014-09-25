angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'ui/contact/contact.html',
    controller: 'contactCtrl'
  })
})
.controller('contactCtrl', function(ContactService, $scope){
  $scope.sendMessage = function(message){
    return ContactService(message);
  }
})
