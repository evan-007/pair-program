angular.module('ppApp')
.factory('FirebaseService', function($firebase, CookieHandler){
  var user = CookieHandler.get();
  if (user !== undefined) {
    var ref =  new Firebase("https://intense-torch-4584.firebaseio.com/" + user.id);
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    // returns firebaseobject, 
    return syncObject;
  }
})
