'use strict';

var app = angular.module('clientUserApp');

app.controller('ThankYouCtrl', function ($scope, $routeParams, $location, voteService, SERVER_URL, USER_WEB_URL) {
	$scope.updateUrl = USER_WEB_URL + '/#/vote/' + voteService.getVote()._id;
	$scope.vote = JSON.stringify(voteService.getVote());
});