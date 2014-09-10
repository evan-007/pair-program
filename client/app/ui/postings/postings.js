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
.controller('postingsCtrl', function($scope, Postings, Restangular){
  $scope.postings = Postings;
  $scope.totalPostings = Postings.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 10;

  $scope.$watchGroup(['currentPage','postings'], function(newValue, old){
    var start = ($scope.currentPage - 1) * $scope.itemsPerPage
    var end = start + $scope.itemsPerPage
    $scope.activePostings = $scope.postings.slice(start, end);
  });

  $scope.myPostings = function(){
    var params = {list: 'true'}
    Restangular.all('postings').getList(params).then(function(response){
      $scope.postings = response;
    })
  }
})
