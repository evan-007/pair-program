angular.module('ppApp')
.factory('DataService', function($http){
  return (function(urlPath){
    //not really reusable because of manipulations on the return data
    $http.get(urlPath).then(function(data){
      console.log(data.data.users);
      users = data.data.users
      return users;
    });
  });
})