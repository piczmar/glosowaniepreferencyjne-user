'use strict';

var app = angular.module('clientUserApp');

app.controller('ThankYouCtrl', function ($scope, $routeParams, $location, voteService, SERVER_URL) {
	$scope.updateUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/vote/' + voteService.getVote()._id;
	$scope.vote = JSON.stringify(voteService.getVote());
});