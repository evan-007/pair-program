angular.module('ppApp')
.factory('FirebaseService', function($firebase, CookieHandler){

  return  function(){
    var user = CookieHandler.get()
    if (user == null ) {
      return
    } else {
      // put me in a service!
      var ref =  new Firebase("https://intense-torch-4584.firebaseio.com/data/" + user.id);
      var sync = $firebase(ref);
      var syncObject = sync.$asObject();
      return syncObject;
      
    }
  }
})
