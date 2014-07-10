angular.module('ppApp')
.factory('AuthInterceptor', function($location, $q){
  //breaks on google map calls without $q conditions!
  //blog.thesparktree.com/post/75952317665/angularjs-interceptors-globally-handle-401-and-other
  return {
    response: function(response){
      if (response.status === 401) {
        console.log("Response 401");
      }
      return response || $q.when(response);
      },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        console.log("Response Error 401",rejection);
        $location.path('/');
      }
      return $q.reject(rejection);
      }
    }
})