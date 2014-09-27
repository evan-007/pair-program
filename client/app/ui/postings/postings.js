angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('postings', {
    url: '/postings',
    templateUrl: 'ui/postings/postings.html',
    controller: 'postingsCtrl',
    resolve: { Postings: function(Restangular){
      return Restangular.all('postings').getList();
    }},
    data: {
      pageTitle: 'Postings'
    }
  })
})
.controller('postingsCtrl', function($scope, Postings, Restangular, $rootScope, $filter){
  $scope.postings = Postings;
  $scope.totalPostings = Postings.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 10;

  $rootScope.$on('updatePostings', function(){
    Restangular.all('postings').getList().then(function(resp){
      $scope.postings = resp;
    })
  })

  // so many watches, probably a bad idea
  //
  // $scope.$watch('search', function(newValue, old){
  // })

  $scope.$watchGroup(['currentPage','postings', 'search'], function(newValue, old){
    $scope.filteredPostings = $filter('filter')($scope.postings, $scope.search)
    var start = ($scope.currentPage - 1) * $scope.itemsPerPage
    var end = start + $scope.itemsPerPage
    $scope.activePostings = $scope.filteredPostings.slice(start, end);
  });

  $scope.allPostings = function(){
    Restangular.all('postings').getList().then(function(resp){
      $scope.postings = resp;
    })
  }

  $scope.myPostings = function(){
    var params = {list: 'true'}
    Restangular.all('postings').getList(params).then(function(response){
      $scope.postings = response;
    })
  }
})
