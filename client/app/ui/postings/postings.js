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
  console.log(Postings);
  $scope.myPostings = function(){
    var params = {list: 'true'}
    Restangular.all('postings').getList(params).then(function(response){
      $scope.postings = response;
    })
  }
})
