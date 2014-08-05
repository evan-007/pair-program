angular.module('ppApp')
.factory('StreamHandler', function(CookieHandler, MessageStream){
  var StreamHandler = {

    set: function(){
      var user = CookieHandler.get();
      var source = new EventSource('/api/v1/messages/count?id='+user.id)
      MessageStream.stream = source
    },

    get: function(){
      var source = MessageStream.stream
      source.onmessage = function(event) {
        console.log(event.data);
        return event.data;
      }
      source.onerror = function(error) {
        source.close()
      }
    },

    kill: function(){
      var source = MessageStream.stream
      source.close();

    }
  }

  return StreamHandler
})
