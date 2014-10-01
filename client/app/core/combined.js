angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps'.ns(),
                         'ui.router', 'restangular', 'ngMessages', 'ngTagsInput',
                         'growlNotifications', 'ngSanitize', 'angular-loading-bar',
                         'firebase'])
.constant('FIREBASE_URL', 'https://intense-torch-4584.firebaseio.com/data/')
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
.constant('USER_ROLES', {
  all: '*',
  public: 'public',
  registered: 'registered'
})
.run(function($rootScope, CookieHandler, $location, $state){
  $rootScope.$on('$stateChangeStart', function(event, next){
    // each route has data.authorizedRoles
    // set role from Cookie. If no user, role == 'public'
    // if role matches data.authorizedRoles, allow change
    // else broadcast a message?
    // if public route (ie homepage), redirect someplace
    // var authorizedRole = next.data.authorizedRoles;

    // hack to stop reg users from seeing broken lander


    // only care if auth is actually defined
    if (next.data !== undefined && next.data.authorizedRoles !== undefined) {
      // set user, should prob be in a service
      if (CookieHandler.get() !== undefined) {
        var user = 'registered'
      }
      else {
        var user = 'public'
      }
      var authorizedRoles = next.data.authorizedRoles
      // is a public route?
      if (authorizedRoles.indexOf('public') !== -1) {
        if (user == 'public') {
        }
        // prevent logged in users from viewing
        else if (user == 'registered') {
          event.preventDefault();
          $state.go('dashboard')
        }
      }
      // is auth route?
      // redirect non reg to home
      else if (authorizedRoles.indexOf('registered') !== -1) {
        if (user !== 'registered') {
          event.preventDefault();
          $state.go('home');
        }
      }
    }
  })
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
angular.module('ppApp')
.factory('DashboardUpdateService', function($http, $q, CookieHandler){
  return function(){
    var defer = $q.defer()
    var id = CookieHandler.get().id;
    $http.get('/api/v1/dashboard/update').then(function(data){
      defer.resolve(data)
    });
    return defer.promise
  }
})

angular.module('ppApp')
.factory('FirebaseService', function($firebase, CookieHandler, FIREBASE_URL){
  var FirebaseService = {
    get: function(){
      var user = CookieHandler.get()
      if (user == null ) {
        return
      } else {
        // put me in a service!
        var ref =  new Firebase(FIREBASE_URL + user.id);
        var sync = $firebase(ref);
        var syncObject = sync.$asObject();
        return syncObject;

      }
    },

    decr_resource: function(resource) {
      var id = CookieHandler.get().id
      var userMessage = new Firebase(FIREBASE_URL+id+'/'+resource);
      userMessage.transaction(function(currentResource){
        if (currentResource > 0) {
          return currentResource - 1
        }
      })
    }
  }
  return FirebaseService
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
.factory('SessionService', function(CookieHandler, $http, $location, growlNotifications){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      growlNotifications.add('Logged in as '+data.user.username, 'success', 2000);
      $location.path('/dashboard')
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
.factory('UserService', function($resource){
	return $resource('/api/v1/users/:id', { id: '@id'})
});

angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'ui/about/about.html',
    data: {
      pageTitle: 'About'
    }
  });
})

angular.module('ppApp')
.directive('ppFaq', function(){
  return {
    restrict: 'E',
    templateUrl: './ui/about/faq.html',
    scope: {
      question: '='
    },
    transclude: true
  }
})

angular.module('ppApp').config(function($stateProvider){
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'ui/contact/contact.html',
    controller: 'contactCtrl',
    data: {
      pageTitle: 'Contact'
    }
  })
})
.controller('contactCtrl', function(ContactService, $scope){
  $scope.sendMessage = function(message){
    return ContactService(message);
  }
})

angular.module('ppApp')
.factory('ContactService', function($http ,growlNotifications){
  return function(data){
    var contact = {contact: data}
    $http.post('/api/v1/contact_form', contact).success(function(){
      growlNotifications.add('Thanks for the message!', 'success');
    });
  }
})

angular.module('ppApp')
.config(function($stateProvider, USER_ROLES){
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: './ui/dashboard/dashboard.html',
    data: {
      authorizedRoles: [USER_ROLES.registered],
      pageTitle: 'Dashboard'
    },
    controller: 'dashboardCtrl as dashboard',
    // put in Service!
    resolve: {DashboardData: function(DashboardService){
      return DashboardService();
    }}
  })
})
.controller('dashboardCtrl', function(DashboardData){
  this.data = DashboardData;
})

angular.module('ppApp')
.factory('DashboardService', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/dashboard').then(function(resp){
      defer.resolve(resp.data);
    });
    return defer.promise
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friendfinder', {
    url: '/friendfinder',
    templateUrl: 'ui/friendfinder/friendfinder.html',
    controller: 'friendFinderCtrl',
    resolve: { UserList: function(Restangular){
      return Restangular.all('users').getList();
    }},
    data: {
      pageTitle: 'Friend Finder'
    }
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
    templateUrl: 'ui/friends/layout.html',
    data: {
      pageTitle: 'Friends'
    }
  })
  .state('friends.all', {
    url: '',
    templateUrl: 'ui/friends/friends.html',
    controller: 'friendsCtrl',
    resolve: { FriendsData: function(FriendshipService){
      return FriendshipService.getAll();
    }},
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
      friends: '=',
      type: '='
    },
  }
})
.controller('friendsCtrl', function(FriendsData, $scope, $filter){
  $scope.allFriends = FriendsData.friendships;
})

angular.module('ppApp').config(function($stateProvider, USER_ROLES){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'ui/home/home.html',
    controller: 'homeCtrl',
    resolve: {
      MapUsers: function(Restangular){
      var map = { map: 'true'}
        return Restangular.all('users').getList(map)
      },
    Languages: function(LanguageService){
      return LanguageService.set();
      }
    },
    data: {
      authorizedRoles: [USER_ROLES.public],
      pageTitle: 'Home'
    }
  })
}).controller('homeCtrl', function($scope, $filter, $interval, MapUsers, Languages){
  $scope.users = MapUsers;
  $scope.languages = Languages;
  $scope.language = $scope.languages[0];
  $scope.map = {
      center: {
          latitude: 50,
          longitude: 0
      },
      zoom: 2,
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language.name);
  });

  // ask Thomas: where does this really belong?
  // in a service probably?
  var counter = 0;
  var getNextLanguage = function(){
    limit = $scope.languages.length - 1;
    $scope.language = $scope.languages[counter];
    if(counter == limit) {
      counter = 0
    }
    else {
      counter++
    }
  }

  $interval(function(){
    getNextLanguage()
  }, 3000)
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
      Restangular, growlNotifications, CookieHandler, FirebaseService) {
        $scope.currentPage = 1;
        $scope.totalMessages = $scope.messages.length;
        $scope.itemsPerPage = 10;
        $scope.$watch('currentPage', function(newValue, oldValue){
          var start = (($scope.currentPage -1) * $scope.itemsPerPage)
          var end = start + $scope.itemsPerPage
          $scope.showMessages = $scope.messages.slice(start, end);
        });


      $scope.readMessage = function(message) {
        //set client read to true
        //http request takes care of server side update
        if (message.workflow_state == 'unread') {
          message.workflow_state = 'read';
          FirebaseService.decr_resource('messages')
        }
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
    templateUrl: 'ui/messages/index.html',
    data: {
      pageTitle: 'Messages'
    }
  })
  .state('messages.inbox', {
    url: '',
    templateUrl: 'ui/messages/inbox.html',
    resolve: {Inbox: function(Restangular){
      return Restangular.all('messages').getList();
    }},
    controller: 'inboxCtrl',
    data: {
      pageTitle: 'Inbox'
    }
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

angular.module('ppApp')
.controller('authCtrl', function($scope, CookieHandler, DashboardUpdateService, FirebaseService, $firebase){
  $scope.authUser = CookieHandler.get();
  // handles reloading page
  if ($scope.authUser !== undefined) {
    DashboardUpdateService().then(function(){
      FirebaseService.get().$bindTo($scope, "data");
    })
  }

  $scope.$watch(function(){
    var user = CookieHandler.get();
    return (user == null) ? 0 : user.id;
  },
  function(newValue, oldValue) {
    if( newValue !== oldValue) {
      $scope.authUser = CookieHandler.get();
      if ($scope.authUser !== undefined) {
        FirebaseService.get().$bindTo($scope, "data");
      }
    }
  })
})

angular.module('ppApp')
// http://stackoverflow.com/questions/23813599/set-page-title-using-ui-router
// so slick!
.directive('updateTitle', function($rootScope, $timeout) {
  return {
    link: function(scope, element) {

      var listener = function(event, toState, toParams, fromState, fromParams) {
        var title = 'ngThing';
        if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle + ' | ngThing';
        // Set asynchronously so page changes before title does
        $timeout(function() {
          element.text(title);
        });
      };

      $rootScope.$on('$stateChangeStart', listener);
    }
  }
});

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('signin', {
    url: '/signin',
    templateUrl: 'ui/signin/signin.html',
    controller: 'signinCtrl as signin',
    data: {
      pageTitle: 'Signin'
    }
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
    }},
    data: {
      pageTitle: 'Signup'
    }
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
.directive('recordAvailabilityValidator', function($http) {

  return {
    require : 'ngModel',
    link : function(scope, element, attrs, ngModel) {
      var apiUrl = attrs.recordAvailabilityValidator;
      ngModel.$asyncValidators.recordAvailable = function(value) {
        return $http.get(apiUrl, {params: {attr: value}})
      }
    }
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
FriendRejectService, FirebaseService){
  $scope.requests = RequestData;
  $scope.approve = function(friend){
    FriendApproveService(friend.id);
    FirebaseService.decr_resource('requests')

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
    FirebaseService.decr_resource('requests')
    var array = $scope.requests.friendships
    var index = array.indexOf(friend)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('friends.show', {
    url: '/:id',
    templateUrl: 'ui/friends/show/show.html',
    resolve: { activeFriend : function($stateParams, Restangular){
      return Restangular.one('friends', $stateParams.id).get();
    }},
    controller: 'friendsShowCtrl',
  })
})
.controller('friendsShowCtrl', function(activeFriend, $scope){
  $scope.activeUser = activeFriend;
  console.log($scope.activeUser["just_partner?"])
})

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

angular.module('ppApp')
.directive('ppPosting', function(Restangular, $rootScope, $state, $location, growlNotifications, $stateParams){
  return {
    templateUrl: 'ui/postings/show/ppPosting.directive.html',
    restrict: 'E',
    scope: {
      activePosting: '=posting'
    },
    link: function(scope, element, attrs) {
      scope.sendMessage = function(){
        var newMessage = {
          body: scope.newMessage.body,
          title: scope.activePosting.title,
          receiver_id: scope.activePosting.user.id
        }
        var id = $stateParams.id;
        var params = {reply: 'true', posting_id: id}
        Restangular.all('messages').post(newMessage, params).then(function(){
          $location.path('/postings');
        })
      }
      scope.updatePosting = function(){
        //restangular object!
        scope.activePosting.put().then(function(){
          $rootScope.$broadcast('updatePostings')
        })
      }

      scope.refreshPosting = function(){
        Restangular.one('postings', $stateParams.id).get().then(function(resp){
          scope.activePosting = resp;
        })
      }

      scope.deletePosting = function(){
        scope.activePosting.remove().then(function(){
          $rootScope.$broadcast('updatePostings');
          $location.path('/postings');
          growlNotifications.add('Posting removed!');
        });
      }
    },
    controller: function($scope, CookieHandler){
      var authUser = CookieHandler.get().username;
      $scope.user = authUser;
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
.directive('ppUser', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/shared/user-view/user.directive.html',
    scope: {
      activeUser: '=user'
    }
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
      Messages: function(Restangular, $stateParams){
        var box = { box: 'sentbox'}
        return Restangular.all('messages').getList(box);
      }
    },
    data: {
      pageTitle: 'Sent'
    }
  })
})
.controller('sentCtrl', function($scope, Messages){
  $scope.messages = Messages;
  $scope.type = 'sentbox';

})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.trash',{
    url: '/trash',
    templateUrl: 'ui/messages/trash/trash.html',
    resolve: {
      TrashMessages: function(Restangular){
      var box = { box: 'trash'}
      return Restangular.all('messages').getList(box);
    }},
    controller: 'trashMessagesCtrl',
    data: {
      pageTitle: 'Trash'
    }
  })
})
.controller('trashMessagesCtrl', function($scope, TrashMessages){
  $scope.messages = TrashMessages;
})

angular.module('ppApp')
.directive('ppMessageView', function(){
  return {
    restrict: 'E',
    templateUrl: 'ui/messages/view/message.directive.html',
    scope: {
      message: '=',
      type: '='
    },
    controller: function($scope, $rootScope, PostMessageService,
      Restangular, growlNotifications, $state) {

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
      $scope.trash = function(message){
        var params = {trash: 'true'}
        Restangular.one('messages', message.id).patch(params).then(function(){
          growlNotifications.add('Message moved to trash', 'success', 2000)
          // need reload: true to refresh resolve!
          $state.go('^', {}, { reload: true});
        })
      }
    }
  }
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.inbox.show', {
    url: '/:id',
    resolve: {activeMessage: function(Restangular, $stateParams){
      var id = $stateParams.id
      return Restangular.one('messages', id).patch()
    }},
    controller: 'messagesShowCtrl',
    templateUrl: 'ui/messages/view/view.html'
  })
})
.controller('messagesShowCtrl', function(activeMessage, $scope){
  $scope.activeMessage = activeMessage.message;
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('publicprofile', {
    url: '/users/:id',
    templateUrl: 'ui/users/show/show.html',
    resolve: { activeUser: function(Restangular, $stateParams){
      return Restangular.one('users', $stateParams.id).get();
    }},
    controller: 'publicProfileCtrl'
  })
})
.controller('publicProfileCtrl', function($scope, activeUser){
  $scope.activeUser = activeUser;
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.sent.show', {
    url: '/:id',
    resolve: { activeMessage: function(Restangular, $stateParams){
      var id = $stateParams.id;
      var box = {box: 'sentbox'}
      return Restangular.one('messages', id).put(box);
    }},
    controller: 'messagesSentShowCtrl',
    templateUrl: 'ui/messages/sent/show/show.html'
  })
})
.controller('messagesSentShowCtrl', function(activeMessage, $scope){
  $scope.activeMessage = activeMessage;
})

angular.module('ppApp')
.config(function($stateProvider){
  $stateProvider.state('messages.trash.show', {
    url: '/:id',
    resolve: { activeMessage: function(Restangular, $stateParams){
      var id = $stateParams.id;
      var box = {box: 'trash'}
      return Restangular.one('messages', id).put(box);
    }},
    controller: 'messagesTrashShowCtrl',
    templateUrl: 'ui/messages/trash/show/show.html'
  })
})
.controller('messagesTrashShowCtrl', function(activeMessage, $scope){
  $scope.activeMessage = activeMessage;
})
