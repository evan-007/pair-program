angular.module('ppApp')
.directive('recordAvailabilityValidator', function($http) {

  return {
    require : 'ngModel',
    link : function(scope, element, attrs, ngModel) {
      var apiUrl = attrs.recordAvailabilityValidator;
      ngModel.$asyncValidators.recordAvailable = function(value) {
        return $http.get(apiUrl, {params: {attr: value}})
      }
    }
  }
});
