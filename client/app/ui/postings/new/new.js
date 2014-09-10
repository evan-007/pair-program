angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('postings.new', {
    url: '/new',
    controller: 'newPostingCtrl',
    templateUrl: 'ui/postings/new/new.html'
  })
})
.controller('newPostingCtrl', function($scope, $location, Restangular, $rootScope){
  $scope.submitPosting = function(newPosting){
    Restangular.all('postings').post(newPosting).then(function(response){
      $scope.postings.push(response);
      $rootScope.$broadcast('updatePostings');
      $location.path('/postings');
    });
  }
})
