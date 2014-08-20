angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('postings', {
    url: '/postings',
    templateUrl: 'ui/postings/postings.html',
    controller: 'postingsCtrl',
    resolve: { Postings: function(Restangular){
      return Restangular.all('postings').getList();
    }}
  })
})
.controller('postingsCtrl', function($scope, Postings){
  $scope.postings = Postings;
  console.log(Postings);
})
