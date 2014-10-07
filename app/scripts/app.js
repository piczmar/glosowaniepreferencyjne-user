'use strict';

/**
 * @ngdoc overview
 * @name clientUserApp
 * @description
 * # clientUserApp
 *
 * Main module of the application.
 */
 var app = angular
 .module('clientUserApp', [
  'config',
  'ngResource',
  'ngRoute',
  'ui.sortable'
  ]);

app.config(function ($routeProvider,  $locationProvider ) {
  $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl' });
  //$routeProvider.when('/vote/:id',{templateUrl: 'views/vote.html', controller: 'VoteCtrl'});

  $routeProvider.when('/start/:id', { 
    templateUrl: 'views/voteStart.html',
    controller: 'VoteStartCtrl',
    resolve: {
      "vote": function($route, voteLibrary ) {      
        return voteLibrary.createNewVoting($route.current.params.id);
      }
    }
 
  });
  $routeProvider.when('/vote/:id', { 
    templateUrl: 'views/voteStart.html',
    controller: 'VoteStartCtrl',
    resolve: {
      "vote": function($route, voteLibrary ) {      
        return voteLibrary.getVoting($route.current.params.id);
      }
    }
 
  });
  $routeProvider.when('/thankyou',{templateUrl: 'views/thankYou.html', controller: 'ThankYouCtrl'});
  $routeProvider.when('/404',{templateUrl: 'views/404.html'});
  $routeProvider.otherwise({redirectTo: '/' });

  // $locationProvider.html5Mode(true).hashPrefix('!');
});


app.factory('$exceptionHandler', function () {
    return function (exception, cause) {
      console.log('exception : ' + exception);
      exception.message += ' (caused by "' + cause + '")';
      //throw exception;
    };
});

app.run(['$rootScope', function($root) {
  $root.$on('$routeChangeStart', function(e, curr, prev) { 
    if (curr.$$route && curr.$$route.resolve) {
      // Show a loading message until promises are not resolved
      $root.loadingView = true;
    }
  });
  $root.$on('$routeChangeSuccess', function(e, curr, prev) { 
    // Hide loading message
    $root.loadingView = false;
  });
  $root.$on("$routeChangeError", function (e, curr, prev) {
    console.log("failed to change routes: " + JSON.stringify(e));
    $root.loadingView = false;
  });
}]);