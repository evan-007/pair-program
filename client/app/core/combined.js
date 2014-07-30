angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps',
                         'ui.router', 'ngResource', 'ngMessages', 'ngTagsInput',
                         'growlNotifications', 'ngSanitize'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})

angular.module('ppApp')
.factory('AuthInterceptor', function($location, $q){
  //breaks on google map calls without $q conditions!
  //blog.thesparktree.com/post/75952317665/angularjs-interceptors-globally-handle-401-and-other
  return {
    response: function(response){
      if (response.status === 401) {
      }
      return response || $q.when(response);
      },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        $location.path('/');
      }
      return $q.reject(rejection);
      }
    }
})

angular.module('ppApp')
.factory('CookieHandler', function($cookieStore, growlNotifications){
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
			growlNotifications.add('Byebye!', 'success', 2000);
		}
	};

	return CookieHandler;
});

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
.factory('SessionService', function(CookieHandler, $http, $location, growlNotifications){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      growlNotifications.add('Logged in as '+data.user.username, 'success', 2000);
      $location.path('/friends')
    })
		.error(function(){
      $location.path('/signin')
			growlNotifications.add('Are you sure that\'s the right password?', 'warning', 2000);
    });
  };
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
angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'ui/about/about.html'
  });
})

angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'ui/contact/contact.html'
  })
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder', {
    url: '/friendfinder',
    templateUrl: 'ui/friendfinder/friendfinder.html',
    controller: 'friendFinderCtrl',
    resolve: { UserList: function(PublicUserData){
      return PublicUserData();
    }}
  });
})
.controller('friendFinderCtrl', function(UserList, $scope, FriendshipService, PublicUserData, growlNotifications){
  $scope.users = UserList;
  $scope.totalUsers = $scope.users.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 12;
  $scope.activeUsers = [];

  $scope.add = function(user){
    FriendshipService.request(user.id);
    var array = $scope.users;
    var index = array.indexOf(user);
    if (index > -1) {
      array.splice(index, 1);
    }
    //need to manually update totalUsers to get watch to run WTF
    $scope.totalUsers = array.length
    growlNotifications.add('Request sent to '+user.username, 'success', 2000)
  }


  $scope.$watchGroup(['currentPage', 'totalUsers'], function(newValue, oldValue){
    console.log('running the watcher')
    var start = (($scope.currentPage -1)) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    $scope.totalUsers = $scope.users.length;
    $scope.activeUsers = $scope.users.slice(start, end);
  });
});

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
.factory('PublicUserData', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/users/').then(function(data){
      defer.resolve(data.data.users);
    })
    return defer.promise;
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friends', {
    url: '/friends',
    abstract: true,
    templateUrl: 'ui/friends/layout.html'
  })
  .state('friends.all', {
    url: '',
    templateUrl: 'ui/friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService.getAll();
    }}
  })
})
.directive('friendNavbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/friends/friendnavbar.html'
  }
})
.directive('friendsList', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/friends/friendslist.html',
    scope: {
      friends: '=friends'
    },
  }
})
.controller('friendsCtrl', function(FriendsData, $scope, $filter){
  $scope.allFriends = FriendsData.friendships;
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
.directive('ppMailbox', function(OneMessageService, PostMessageService, $rootScope){
  return {
    restrict: 'E',
    templateUrl: './ui/messages/mailbox.html',
    scope: {
      messages: '=',
      type: '='
    },
    link: function(scope, element, attrs) {
    },
    controller: function($scope, $rootScope, PostMessageService, OneMessageService,
      growlNotifications) {
      $scope.currentPage = 1;
      $scope.totalMessages = $scope.messages.length;
      $scope.itemsPerPage = 10;
      $scope.$watch('currentPage', function(newValue, oldValue){
        var start = (($scope.currentPage -1) * $scope.itemsPerPage)
        var end = start + $scope.itemsPerPage
        $scope.showMessages = $scope.messages.slice(start, end);
      });

      $scope.getMessage = function(id, type, message) {
        message.read = true;
        $scope.activeMessage = '';
        $scope.newMessage = '';
        OneMessageService(id, type).then(function(data){
          $scope.activeMessage = data;
        })
      }
      $scope.reply = function(message){
        $scope.newMessage = message;
        $scope.activeMessage = '';
      }
      $scope.cancel = function(message){
        $scope.activeMessage = message;
        $scope.newMessage = '';
      }
      $scope.send = function(message){
        PostMessageService(message).then(function(){
          growlNotifications.add('Message sent to '+message.sender_name, 'success', 2000)
          $scope.newMessage = '';
          $scope.activeMessage = '';
          //alert or something that message was sent/failed?
        })
      }
    }
  }
})

angular.module('ppApp')
.factory('MessageGetterService', function($http, $q){
  return function(boxType){
    var defer = $q.defer();
    $http.get('/api/v1/messages?box='+boxType).then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages', {
    url: '/messages',
    abstract: true,
    templateUrl: 'ui/messages/index.html'
  })
  .state('messages.inbox', {
    url: '',
    templateUrl: 'ui/messages/inbox.html',
    resolve: {Inbox: function(MessageGetterService){
      return MessageGetterService();
    }},
    controller: 'inboxCtrl'
  })
})
.controller('inboxCtrl', function($scope, Inbox){
  $scope.messages = Inbox.data.messages;
  $scope.type = 'inbox';
})

angular.module('ppApp')
.factory('OneMessageService', function($http, $q){
  return function(id, boxType){
    var defer = $q.defer();
    $http.put('/api/v1/messages/'+id+'?box='+boxType).then(function(data){
      defer.resolve(data.data.message);
    });
    return defer.promise;
  }
})

angular.module('ppApp')
.factory('PostMessageService', function($http, $q){
  return function(message){
    var newMessage = {message: {
      receiver_id: message.sender_id,
      body: message.response,
      title: message.title
    }}
    var defer = $q.defer();
    $http.post('/api/v1/messages', newMessage).then(function(data){
      defer.resolve(data);
    });
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
.controller('authCtrl', function($scope, CookieHandler){
  $scope.authUser = CookieHandler.get();
  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
    }
  })
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('signin', {
    url: '/signin',
    templateUrl: 'ui/signin/signin.html',
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
    templateUrl: 'ui/signup/signup.html',
    controller: 'signupCtrl as signup',
    resolve: {Languages: function(LanguageService){
      return LanguageService.set();
    }}
  });
}).controller('signupCtrl', function($scope, $http, SignUpService, Languages, $q){
  $scope.submit = function(signup){
    SignUpService(signup);
  };
  $scope.languages = Languages;
  
  //put this in a service!
  $scope.getLanguages = function(query){
    var defer = $q.defer()
    $http.get('./api/v1/languages?q='+query).then(function(response){
      console.log(response)
      defer.resolve(response.data.languages)
    })
    return defer.promise
  }
});

angular.module('ppApp')
.factory('SignUpService', function($http, $location, $rootScope, CookieHandler, growlNotifications){
  return function(userData){
    var length = userData.languages.length;
    var language_ids = [];
    //get just ids from languages
    for (var n = 0; n < length; n++) {
      language_ids.push(userData.languages[n].id)
    }
    language_ids = language_ids.join(' ');
    userData.language_tokens = language_ids;
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      CookieHandler.set(data.user);
      growlNotifications.add('Logged in as '+data.user.username, 'success');
      $location.path('/friends')
    })
    .error(function(data){
      console.log(data);
    });
  }
})

angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('friends.pending', {
    url: '/pending',
    templateUrl: 'ui/friends/pending/pending.html',
    controller: 'pendingCtrl',
    resolve: {
      PendingFriends: function(PendingFriendService){
        return PendingFriendService();
      }
    }
  });
})
.controller('pendingCtrl', function(PendingFriends, $scope){
  $scope.pendingFriends = PendingFriends;
})

angular.module('ppApp')
.factory('PendingFriendService', function($http, $q){
  return function(){
    var defer = $q.defer()
    $http.get('/api/v1/friendships/pending').then(function(data){
      defer.resolve(data.data)
    });
    return defer.promise
  }
})

angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('friends.rejected', {
    url: '/rejected',
    templateUrl: 'ui/friends/rejected/rejected.html',
    controller: 'rejectedCtrl',
    resolve: { } //todo
  })
})
.controller('rejectedCtrl', function(){

})

angular.module('ppApp')
.factory('FriendApproveService', function($http, $q){
  return function(friendId){
    var defer = $q.defer();

    var data = {
      id: friendId
    }

    $http.post('/api/v1/friendships/approve/'+friendId, data).then(
      function(data){
        defer.resolve(data);
      }
    );
    return defer.promise;
  }
})

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
angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('friends.requests', {
    url: '/requests',
    templateUrl: 'ui/friends/requests/requests.html',
    controller: 'requestsCtrl',
    resolve: { RequestData: function(FriendRequestService){
      return FriendRequestService();
    }}
  })
})
.controller('requestsCtrl', function(RequestData, $scope, FriendApproveService){
  console.log(RequestData);
  $scope.requests = RequestData;
  $scope.approve = function(friend){
    FriendApproveService(friend.id);
    //cleaner way to rm one value from array???
    //doing it here assumes success from server
    //avoids extra http.GET to refresh data
    var array = $scope.requests.friendships
    var index = array.indexOf(friend)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent', {
    url: '/sent',
    templateUrl: 'ui/messages/sent/sent.html',
    controller: 'sentCtrl',
    resolve: {
      Messages: function(MessageGetterService){
        return MessageGetterService('sentbox');
      }
    }
  })
})
.controller('sentCtrl', function($scope, Messages, OneMessageService){
  $scope.messages = Messages.data.messages;
  $scope.type = 'sentbox';
  $scope.getMessage = function(id){
    OneMessageService(id).then(function(data){
      $scope.activeMessage = data;
    });
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

angular.module('ppApp')
.directive('viewBody', function(CookieHandler){
  return {
    restrict: 'E',
    templateUrl: 'ui/shared/view-body/view-body.html',
    transclude: true,
    link: function(scope, element, attrs) {
      scope.currentUser = CookieHandler.get();

      scope.$watch(
        function(){
          var user = CookieHandler.get();
          return (user == null) ? 0 : user.id;
        },
        function(newValue, oldValue) {
          if( newValue !== oldValue) {
            scope.currentUser = CookieHandler.get();
          }
        }
      );
    }
  }
})