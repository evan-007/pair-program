angular.module('ppApp')
.factory('PostMessageService', function(Restangular){
  return function(message){
    var newMessage = {message: {
      receiver_id: message.sender_id,
      body: message.response,
      title: message.title
    }}

    Restangular.all('messages').post(newMessage).then(function(response){
      console.log(response)
    })
    // var defer = $q.defer();
    // $http.post('/api/v1/messages', newMessage).then(function(data){
    //   defer.resolve(data);
    // });
    // return defer.promise;
  }
})
