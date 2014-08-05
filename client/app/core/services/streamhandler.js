angular.module('ppApp')
.factory('StreamHandler', function(CookieHandler, MessageStream){
  var StreamHandler = {

    set: function(){
      var user
      user = CookieHandler.get();
      var source = new EventSource('/api/v1/messages/count?id='+user.id)
      MessageStream.get = source
    },

    get: function(){
      var source = MessageStream.get
      source.onmessage = function(event) {
        console.log(event)
        // source.close()
      }
      source.onerror = function(error) {
        source.close()
      }
    },

    kill: function(){
      var source = MessageStream.get
      source.onmessage = function(event) {
        source.close()
      }
    }
  }

  return StreamHandler
})
