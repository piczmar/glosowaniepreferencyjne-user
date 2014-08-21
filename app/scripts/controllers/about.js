'use strict';

/**
 * @ngdoc function
 * @name clientUserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientUserApp
 */
angular.module('clientUserApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
