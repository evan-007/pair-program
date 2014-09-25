angular.module('ppApp')
.factory('ContactService', function($http ,growlNotifications){
  return function(data){
    var contact = {contact: data}
    $http.post('/api/v1/contact_form', contact).success(function(){
      growlNotifications.add('Thanks for the message!', 'success');
    });
  }
})
