angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('postings.show', {
    url: '/:id',
    controller: 'postingsShowCtrl',
    templateUrl: 'ui/postings/show/show.html',
    resolve: {Posting: function(Restangular, $stateParams){
      var id = $stateParams.id
      return Restangular.one('postings', id).get()
    }}
  })
})
.controller('postingsShowCtrl', function(Posting, $scope){
  $scope.activePosting = Posting;
})
