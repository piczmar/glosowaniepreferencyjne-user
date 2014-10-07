'use strict';

/**
 * @ngdoc function
 * @name clientUserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientUserApp
 */
angular.module('clientUserApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.baseUrl = $location.protocol() + "//" + $location.host() + ":" + $location.port();
  });
