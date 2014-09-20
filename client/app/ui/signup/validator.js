angular.module('ppApp')
.directive('recordAvailabilityValidator', function($http) {

  return {
    require : 'ngModel',
    link : function(scope, element, attrs, ngModel) {
      var apiUrl = attrs.recordAvailabilityValidator;

      function setAsLoading(bool) {
        ngModel.$setValidity('recordLoading', !bool);
      }

      function setAsAvailable(bool) {
        ngModel.$setValidity('recordAvailable', bool);
      }

      ngModel.$parsers.push(function(value) {
        if(!value || value.length == 0) return;

        setAsLoading(true);
        setAsAvailable(false);

        $http.get(apiUrl, { params: {attr : value }} )
          .success(function(response) {
            setAsLoading(false);
            setAsAvailable(true);
          })
          .error(function() {
            setAsLoading(false);
            setAsAvailable(false);
          });
        console.log(value)
        return value;
      })
    }
  }
});
