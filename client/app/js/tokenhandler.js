angular.module('ppApp')
.factory('TokenHandler', function(){
  var token = null;
  
  var TokenHandler = {
    set: function(v) { token = v; },
    get: function() {
      return token
    }
  }
  return TokenHandler;
})