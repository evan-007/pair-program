angular.module('ppApp')
.factory('FirebaseService', function($firebase, CookieHandler){
  var FirebaseService = {
    get: function(){
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
    },

    decr_resource: function(resource) {
      var id = CookieHandler.get().id
      var userMessage = new Firebase('https://intense-torch-4584.firebaseio.com/data/'+id+'/'+resource);
      userMessage.transaction(function(currentResource){
        if (currentResource > 0) {
          return currentResource - 1
        }
      })
    }
  }
  return FirebaseService
})
