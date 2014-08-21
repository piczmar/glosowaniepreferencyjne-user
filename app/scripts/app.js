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
  'ngResource',
  'ngRoute',
  'ui.sortable'
  ]);

app.config(function ($routeProvider,  $locationProvider ) {
  $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl' });
  $routeProvider.when('/vote/:id',{templateUrl: 'views/vote.html', controller: 'VoteCtrl'});
  $routeProvider.when('/thankyou',{templateUrl: 'views/thankYou.html', controller: 'VoteCtrl'});
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