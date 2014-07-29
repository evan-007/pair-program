angular.module('ppApp')
.factory('PostMessageService', function($http, $q){
  return function(message){
    console.log(message);
    var newMessage = {message: {
      receiver_id: message.sender_id,
      body: message.response,
      title: message.title
    }}
    var defer = $q.defer();
    $http.post('/api/v1/messages', newMessage).then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
