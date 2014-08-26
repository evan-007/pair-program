angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps',
                         'ui.router', 'restangular', 'ngMessages', 'ngTagsInput',
                         'growlNotifications', 'ngSanitize', 'angular-loading-bar'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})
.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1')
})
.config(function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
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
.factory('SessionService', function(CookieHandler, $http, StreamHandler, $location, growlNotifications){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      growlNotifications.add('Logged in as '+data.user.username, 'success', 2000);
      // StreamHandler.set();
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
angular.module('ppApp')
.factory('MessageStream', function(){
  return {
    stream: null
  }
})

angular.module('ppApp')
.factory('StreamHandler', function(CookieHandler, MessageStream){
  var StreamHandler = {

    set: function(){
      var user = CookieHandler.get();
      var source = new EventSource('/api/v1/messages/count?id='+user.id)
      MessageStream.stream = source
    },

    get: function(){
      var source = MessageStream.stream
      source.onmessage = function(event) {
        console.log(event.data);
        return event.data;
      }
      source.onerror = function(error) {
        source.close()
      }
    },

    kill: function(){
      var source = MessageStream.stream
      source.close();

    }
  }

  return StreamHandler
})

angular.module('ppApp')
.factory('UserService', function($resource){
	return $resource('/api/v1/users/:id', { id: '@id'})
});

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
    resolve: { UserList: function(Restangular){
      return Restangular.all('users').getList();
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
    resolve: { MapUsers: function(Restangular){
      var map = { map: 'true'}
        return Restangular.all('users').getList(map)
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
    controller: function($scope, $rootScope, PostMessageService,
      Restangular, growlNotifications) {
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
        var box = {box: type}
        Restangular.one('messages', id).patch(box).then(function(response){
          $scope.activeMessage = response.message;
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
        PostMessageService(message);
        //can't callback outside of restangular, assumes successful post
        growlNotifications.add('Message sent to '+message.sender_name, 'success', 2000)
        $scope.newMessage = '';
        $scope.activeMessage = '';
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
    resolve: {Inbox: function(Restangular){
      return Restangular.all('messages').getList();
    }},
    controller: 'inboxCtrl'
  })
})
.controller('inboxCtrl', function($scope, Inbox){
  $scope.messages = Inbox;
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
.factory('PostMessageService', function(Restangular){
  return function(message){
    var newMessage = {message: {
      receiver_id: message.sender_id,
      body: message.response,
      title: message.title
    }}

    Restangular.all('messages').post(newMessage).then(function(response){
      console.log(response)
    })
    // var defer = $q.defer();
    // $http.post('/api/v1/messages', newMessage).then(function(data){
    //   defer.resolve(data);
    // });
    // return defer.promise;
  }
})

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
.controller('authCtrl', function($scope, CookieHandler, MessageStream, StreamHandler){
  $scope.authUser = CookieHandler.get();
  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
      //handles data set on login
      $scope.getDatas()
    }
  })

  //handles data set on reload if logged in
  //what a mess
  $scope.getStream = function(){
    var user = CookieHandler.get()
    if (user == null ) {
      return
    } else {
      // $scope.getDatas()
      //have to run this in another function
      //otherwise digest in progress errors on $scope.$apply
      //wtf!
    }
  }

  $scope.getDatas = function(){
    StreamHandler.set()
    var source = MessageStream.stream
    source.onmessage = function(event){
      $scope.$apply(function(){
        $scope.messages = event.data;
      })
    }
  }

  //debugger, remove later
  //rails wont' kill connnection on page close
  //WTF

  $scope.killMessages = function(){
    StreamHandler.kill()
    console.log('it\s dead, jim')
  }
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

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder.users', {
    url: '/users/:id',
    templateUrl: 'ui/friendfinder/user/user.html',
    controller: 'userController',
    resolve: {User: function(Restangular, $stateParams){
      var id = $stateParams.id;
      return Restangular.one('users', id).get();
    }}
  })
})
.controller('userController', function($scope, User){
  $scope.user = User;
  console.log(User)
})

angular.module('ppApp')
.factory('UserDataService', function($http, $q){
  return function(id){
    var defer = $q.defer();
    $http.get('/api/v1/users/'+id).then(function(response){
      defer.resolve(response.data);
    });
    return defer.promise;
  }
});

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
    $http.get('/api/v1/friendships?type=pending').then(function(data){
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
    resolve: { Friends: function(RejectedFriendService){
      return RejectedFriendService();
    }}
  })
})
.controller('rejectedCtrl', function(Friends, FriendApproveService, $scope){
  $scope.friends = Friends.data;
  console.log(Friends)
  $scope.approve = function(friend){
    FriendApproveService(friend.id);
    //cleaner way to rm one value from array???
    //doing it here assumes success from server
    //avoids extra http.GET to refresh data
    var array = $scope.friends.friendships
    var index = array.indexOf(friend)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
})

angular.module('ppApp')
.factory('RejectedFriendService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('api/v1/friendships?type=rejected').then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})

angular.module('ppApp')
.factory('FriendApproveService', function($http, $q){
  return function(friendId){
    var defer = $q.defer();

    var data = {
      id: friendId
    }

    $http.put('/api/v1/friendships/'+friendId+'?approve="true"', data).then(
      function(data){
        defer.resolve(data);
      }
    );
    return defer.promise;
  }
})

angular.module('ppApp')
.factory('FriendRejectService', function($http, $q) {
  return function(id){
    var defer = $q.defer();
    $http.put('/api/v1/friendships/'+id+'?reject="true"').then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  }
})

angular.module('ppApp')
.factory('FriendRequestService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/friendships?type=requests').success(function(data){
      console.log(data);
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
.controller('requestsCtrl', function(RequestData, $scope, FriendApproveService,
FriendRejectService){
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
  $scope.reject = function(friend){
    FriendRejectService(friend.id);
    var array = $scope.requests.friendships
    var index = array.indexOf(friend)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.new', {
    url: '/new',
    templateUrl: 'ui/messages/new/new.html',
    controller: 'newMessageCtrl',
    resolve: { Friends: function(FriendshipService) {
      return FriendshipService.getAll();
    }}
  })
})
.controller('newMessageCtrl', function(Friends, $scope, Restangular, $location, growlNotifications){
  $scope.friends = Friends.friendships

  $scope.sendMessage = function(message){
    var data = {message: message}

    Restangular.all('messages').post(data).then(function(response){
      console.log(response.message)
      growlNotifications.add("Message sent!", 'success', 2000);
      $location.path('/messages');
    })
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent', {
    url: '/sent',
    templateUrl: 'ui/messages/sent/sent.html',
    controller: 'sentCtrl',
    resolve: {
      Messages: function(Restangular){
        var box = { box: 'sentbox'}
        return Restangular.all('messages').getList(box);
      }
    }
  })
})
.controller('sentCtrl', function($scope, Messages){
  $scope.messages = Messages;
  console.log(Messages)
  $scope.type = 'sentbox';

})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('postings.new', {
    url: '/new',
    controller: 'newPostingCtrl',
    templateUrl: 'ui/postings/new/new.html'
  })
})
.controller('newPostingCtrl', function($scope, $location, Restangular){
  $scope.submitPosting = function(newPosting){
    Restangular.all('postings').post(newPosting).then(function(response){
      $scope.postings.push(response);
      $location.path('/postings');
    });
  }
})
angular.module('ppApp')
.directive('ppPosting', function(){
  return {
    templateUrl: 'ui/postings/show/ppPosting.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    link: function(scope, element, attrs) {
      //edit functionality here or in ng-click?
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
      $scope.editPosting = function(){
        console.log('asdf')
      }
    }
  }
})
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

angular.module('ppApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './ui/shared/navbar/navbar.html',
    controller: 'navCtrl'
  }
})
//toDo: refactor into directive controller!
.controller('navCtrl', function(CookieHandler, $location, $scope, StreamHandler){
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
    StreamHandler.kill();
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