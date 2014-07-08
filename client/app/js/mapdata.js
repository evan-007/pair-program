angular.module('ppApp')
.factory('MapData', function($http){
  return function(){
    $http.get('/api/v1/users/').then(function(data){
      console.log(data.data.users)
      return data;
    });
  }
})
