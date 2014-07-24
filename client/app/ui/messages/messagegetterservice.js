angular.module('ppApp')
.factory('MessageGetterService', function($http, $q){
  return function(boxType){
    var defer = $q.defer();
    $http.get('/api/v1/messages?box='+boxType).then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
//rafactor with ng resource or into messagegetterservice
.factory('OneMessage', function($http, $q){
  return function(id, boxType){
    var defer = $q.defer();
    $http.get('/api/v1/messages/'+id+'?box='+boxType).then(function(data){
      defer.resolve(data.data.message);
    });
    return defer.promise;
  }
})
// toDo ngResource or restangular
.factory('PostMessage', function($http, $q){
  return function(message){
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