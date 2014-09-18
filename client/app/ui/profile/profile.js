angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'ui/profile/profile.html',
    controller: 'profileCtrl as profile',
    resolve: {
      ProfileData: function(Restangular, CookieHandler){
        var id = CookieHandler.get().id
        var params = {profile: 'true'}
        return Restangular.one('users', id).get(params)
      }
    }
  });
})
.controller('profileCtrl', function(ProfileData, Restangular, CookieHandler){
  var viewModel = this;
  viewModel.user = ProfileData;

  this.saveChanges = function(user){
    this.user.save().then(function(response){
      // update cookie with new info
      // in case username changes for auth.
      // smelly, must be better solution
      var name = response.user.username
      var userId = response.user.id
      var authtoken = response.user.token
      var data = {username: name, token: authtoken, id: userId}
      CookieHandler.set(data)
    });
  }

  this.refresh = function(id){
    var id = CookieHandler.get().id
    var params = {profile: 'true'}
    Restangular.one('users', id).get(params).then(function(resp){
      viewModel.user = resp;
    })
  }
});
