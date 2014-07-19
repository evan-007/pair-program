angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps', 'ui.router'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl',
    resolve: { UserList: function(PublicUserData){
      return PublicUserData();
    }}
  });
})
.controller('dashboardCtrl', function(UserList, $scope, FriendshipService, PublicUserData){
  $scope.totalUsers = UserList.length;
  $scope.users = UserList;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 12;
  $scope.activeUsers = [];
  
  $scope.add = function(id){
    FriendshipService.request(id);
    PublicUserData().then(function(data){
      $scope.users = data;
    });
  }

  
  $scope.$watchGroup(['currentPage', 'users'], function(newValue, oldValue){
    //calculates range of active users based on currentPage
    var start = (($scope.currentPage -1)) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    $scope.totalUsers = $scope.users.length;
    $scope.activeUsers = $scope.users.slice(start, end);
  });
});

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friends', {
    url: '/friends',
    abstract: true,
    templateUrl: 'friends/index.html'
  })
  .state('friends.all', {
    url: '',
    templateUrl: 'friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService.getAll();
    }}
  })
  .state('friends.pending', {
    url: '/pending',
    templateUrl: 'friends/pending.html',
    controller: 'friendsCtrl',
   
  })
  .state('friends.requests', {
    url: '/requests',
    templateUrl: 'friends/requests.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendRequestService){
      return FriendRequestService();
    }}
  })
  .state('friends.rejected', {
    url: '/rejected',
    templateUrl: 'friends/rejected.html',
    controller: 'friendsCtrl',
    resolve: { }
  })
})
.directive('friendNavbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'friends/friendnavbar.html'
  }
})
.controller('friendsCtrl', function(FriendsData, $scope, $filter){
  //must define filtered array before calling filter!!!
  // oh god refactor this mess, multiple ctrls
  $scope.allFriends = FriendsData.friendships;  
  $scope.friends = $filter('filter')($scope.allFriends, {workflow_state:'approved'}, true);
  $scope.pending = $filter('filter')($scope.allFriends, {workflow_state:'unapproved'}, true);
  $scope.rejectedRequests = $filter('filter')($scope.allFriends, {workflow_state:'rejected'}, true);
})
angular.module('ppApp')
.factory('AuthInterceptor', function($location, $q){
  //breaks on google map calls without $q conditions!
  //blog.thesparktree.com/post/75952317665/angularjs-interceptors-globally-handle-401-and-other
  return {
    response: function(response){
      if (response.status === 401) {
        console.log("Response 401");
      }
      return response || $q.when(response);
      },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        console.log("Response Error 401",rejection);
        $location.path('/');
      }
      return $q.reject(rejection);
      }
    }
})
angular.module('ppApp')
.factory('CookieHandler', function($cookieStore, $rootScope){
	var user = null;

	var CookieHandler = {
		set: function(user){
			$cookieStore.put('currentUser', user);
		},

		get: function(){
			return $cookieStore.get('currentUser');
		},

		delete: function(user){
			$cookieStore.remove('currentUser');
			$rootScope.$broadcast('logout');
		}
	};

	return CookieHandler;
});

angular.module('ppApp')
.factory('FriendRequestService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/friendships/requests').success(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})
angular.module('ppApp')
.factory('FriendshipService', function($http, $q){
  var FriendshipService = {
    getAll: function(){
      var defer = $q.defer();
      $http.get('api/v1/friendships').success(function(data){
        defer.resolve(data);
      });
      return defer.promise;
    },
    request: function(id){
      var data = { friendship: {friend_id: id} }
      $http.post('api/v1/friendships', data)
    }
  }
 return FriendshipService;
});
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
angular.module('ppApp')
.factory('PublicUserData', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/users/').then(function(data){
      defer.resolve(data.data.users);
    })
    return defer.promise;
  }
})

angular.module('ppApp').factory('SessionInjector', function(CookieHandler){
  return {
    request: function(config) {
      if (CookieHandler.get() !== undefined) {
        config.headers['token'] = CookieHandler.get().token;
        config.headers['username'] = CookieHandler.get().username;
      }
      return config;
    }
  }
})

angular.module('ppApp')
.factory('SessionService', function(CookieHandler, $http, $location, $rootScope){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      $rootScope.$broadcast('authorized', data.user.username);
      $location.path('/friends')
    })
		.error(function(){
			$rootScope.$broadcast('unauthorized');
    });
  };
});

angular.module('ppApp')
.factory('SignUpService', function($http, $location){
  return function(userData){
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      console.log(data);
      $location.path('/');
    })
    .error(function(data){
      console.log(data);
    });
  }
})
angular.module('ppApp')
.factory('TokenHandler', function(){
  var token = null;
  
  var TokenHandler = {
    set: function(v) { token = v; },
    get: function() {
      return token;
    }
  };
  return TokenHandler;
});
angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('signin', {
    url: '/signin',
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl as signin'
  });
})
.controller('signinCtrl', function($scope, SessionService, $http){
  $scope.newSession = function(authInfo){
    SessionService(authInfo);
  };

  $scope.useTest = function(){
    $scope.signin.email = 'test@test.com';
    $scope.signin.password = 'password';
  }
});

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl as signup',
    resolve: {Languages: function(LanguageService){
      return LanguageService.set();
    }}
  });
}).controller('signupCtrl', function($scope, $http, SignUpService, Languages){
  $scope.submit = function(signup){
    SignUpService(signup);
  };
  $scope.languages = Languages;
});
angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'ui/about/about.html'
  });
})


angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'ui/home/home.html',
    controller: 'homeCtrl',
    resolve: { MapUsers: function(MapUserData){
        return MapUserData();
    }, Languages: function(LanguageService){
      return LanguageService.set();
    }
    }
  })
}).controller('homeCtrl', function($scope, $filter, MapUsers, Languages){
  $scope.users = MapUsers;
  $scope.languages = Languages;
  $scope.language = $scope.languages[0];
  $scope.map = {
      center: {
          latitude: 50,
          longitude: 0
      },
      zoom: 2,
      options: {mapTypeId: google.maps.MapTypeId.SATELLITE }
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language.name);
  });
})

angular.module('ppApp')
.factory('MapUserData', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/users/map').then(function(data){
      defer.resolve(data.data.users);
    })
    return defer.promise;
  }
})
angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'ui/profile/profile.html',
    controller: 'profileCtrl as profile',
    resolve: {
      ProfileData: function(ProfileService){
        return ProfileService();
      }
    }
  });
})
.controller('profileCtrl', function(ProfileData){
  this.user = ProfileData;
})

angular.module('ppApp')
.factory('ProfileService', function($http, $q, $location){
  return function(){

    var defer = $q.defer();
    $http.get('/api/v1/users/profile/').success(function(data){
      defer.resolve(data.user_profile);
    });
    return defer.promise;
  }
})
angular.module('ppApp')
.controller('alertsCtrl', function($scope){

	this.alerts = [];
	var alerts = this.alerts;

	$scope.$on('unauthorized', function(event, data){
		alerts.push({type: 'danger', msg: 'Check your credentials'});
	});

	$scope.$on('authorized', function(event, data){
		alerts.push({type: 'success', msg: 'What\'s up '+data});
	});

	$scope.$on('logout', function(event, data){
		alerts.push({type: 'success', msg: 'Later!'});
	});

	$scope.closeAlert = function(index) {
		alerts.splice(index, 1);
	};
})
.directive('alerts', function(){
  return {
    restrict: 'E',
    templateUrl: './ui/shared/alerts/alerts.html'
  }
})

angular.module('ppApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './ui/shared/navbar/navbar.html',
    controller: 'navCtrl'
  }
})
.controller('navCtrl', function(CookieHandler, $location, $scope){
  $scope.user = CookieHandler.get();

  $scope.$watch(
    function(){
      var user = CookieHandler.get();
      return (user == null) ? 0 : user.id;
    },
    function(newValue, oldValue) {
      if( newValue !== oldValue) {
        $scope.user = CookieHandler.get();
      }
    }
  );

  $scope.logout = function(){
    CookieHandler.delete();
    $location.path('/')
  }
})
