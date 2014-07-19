angular.module('ppApp')
.factory('LanguageService', function($http, $q){
  var LanguageService = {
    set: function(){
      var defer = $q.defer();
      $http.get('/api/v1/languages').success(function(data){
        defer.resolve(data.languages);
      });
      return defer.promise;
    }
  }
  return LanguageService;
})