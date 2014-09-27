angular.module('ppApp')
.controller('authCtrl', function($scope, CookieHandler, MessageStream, StreamHandler, FirebaseService, $firebase){

  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
      getMessageCount();

    }
  })

  //handles data set on reload if logged in
  //what a mess
  var getMessageCount = function(){
    var user = CookieHandler.get()
    if (user == null ) {
      return
    } else {
      // put me in a service!
      var ref =  new Firebase("https://intense-torch-4584.firebaseio.com/data/" + $scope.authUser.id);
      var sync = $firebase(ref);
      var syncObject = sync.$asObject();
      // $scope.data = syncObject
      // $scope.data is a promise, can't console.log it
      syncObject.$bindTo($scope, "data");

    }
  }
  $scope.authUser = CookieHandler.get();
  // handles reloading page
  if ($scope.authUser !== undefined) {
    getMessageCount();
  }
})
