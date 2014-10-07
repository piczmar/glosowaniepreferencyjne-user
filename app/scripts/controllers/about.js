'use strict';

/**
 * @ngdoc function
 * @name clientUserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientUserApp
 */
angular.module('clientUserApp')
  .controller('AboutCtrl', function ($scope, SERVER_URL, PROFILE) {
    $scope.SERVER_URL = SERVER_URL;
    $scope.PROFILE = PROFILE;
  });
